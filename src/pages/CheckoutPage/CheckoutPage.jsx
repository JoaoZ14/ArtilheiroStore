import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useCart } from '../../context/CartContext'
import { useToast } from '../../context/ToastContext'
import { orderService } from '../../services/api/orderService'
import { createCardPaymentBrick } from '../../services/mercadopago/loadMercadoPago'
import OrderSummary from './components/OrderSummary/OrderSummary'
import {
  StyledCheckout,
  CheckoutContainer,
  CheckoutLayout,
  StepsCol,
  StepCard,
  StepTitle,
  Form,
  Field,
  Label,
  Input,
  Row,
  SubmitButton,
  ButtonSpinner,
  SummaryCol,
  StepIndicator,
  StepDots,
  StepDot,
  StepLabel,
  InfoText,
  PaymentMethodGroup,
  PaymentOption,
  Radio,
  QrCodeBox,
  QrCodeImage,
  QrCodeLabel,
  CopyArea,
  CopyInput,
  CopyButton,
  BoletoLink,
} from './CheckoutPage.styled'

const CHECKOUT_SUCCESS_KEY = 'artilheiro-checkout-success'
const CARD_PAYMENT_BRICK_CONTAINER_ID = 'cardPaymentBrick_container'

const PAYMENT_METHODS = [
  { id: 'card', label: 'Cartão de crédito ou débito', value: 'card' },
  { id: 'pix', label: 'PIX', value: 'pix' },
  { id: 'boleto', label: 'Boleto bancário', value: 'boleto' },
]

const STEPS = [
  { id: 1, title: 'Dados pessoais' },
  { id: 2, title: 'Endereço' },
  { id: 3, title: 'Pagamento' },
]

function validateStep1(data) {
  const nome = (data.nome || '').trim()
  const email = (data.email || '').trim()
  const cpf = (data.cpf || '').trim()
  return nome.length >= 3 && email.includes('@') && cpf.length >= 11
}

function validateStep2(data) {
  const cep = (data.cep || '').trim()
  const rua = (data.rua || '').trim()
  const numero = (data.numero || '').trim()
  const cidade = (data.cidade || '').trim()
  const estado = (data.estado || '').trim()
  return cep.length >= 8 && rua.length >= 3 && numero.length >= 1 && cidade.length >= 2 && estado.length >= 2
}

function buildOrderPayload(formData, items, subtotal) {
  return {
    customer: {
      name: formData.nome,
      email: formData.email,
      cpf: formData.cpf,
    },
    address: {
      cep: formData.cep,
      rua: formData.rua,
      numero: formData.numero,
      complemento: formData.complemento,
      cidade: formData.cidade,
      estado: formData.estado,
    },
    items: items.map(item => ({
      productId: item.productId,
      size: item.size,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
    })),
    total: subtotal,
  }
}

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { items, subtotal, itemCount, clearCart } = useCart()
  const { showError, showSuccess } = useToast()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    cidade: '',
    estado: '',
  })

  // Passo 3: pedido e métodos de pagamento
  const [orderId, setOrderId] = useState(null)
  const [orderTotal, setOrderTotal] = useState(null)
  const [orderLoading, setOrderLoading] = useState(false)
  const [orderError, setOrderError] = useState(null)
  const [mpPublicKey, setMpPublicKey] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [brickReady, setBrickReady] = useState(false)
  const [brickError, setBrickError] = useState(null)
  const brickControllerRef = useRef(null)
  const [pixResult, setPixResult] = useState(null)
  const [pixLoading, setPixLoading] = useState(false)
  const [boletoResult, setBoletoResult] = useState(null)
  const [boletoLoading, setBoletoLoading] = useState(false)

  useEffect(() => {
    if (itemCount === 0) {
      navigate('/carrinho', { replace: true })
    }
  }, [itemCount, navigate])

  // Ao entrar no passo 3: criar pedido e obter chave pública
  useEffect(() => {
    if (step !== 3 || orderId || orderLoading || itemCount === 0) return

    setOrderError(null)
    setOrderLoading(true)

    const orderPayload = buildOrderPayload(formData, items, subtotal)

    Promise.all([
      orderService.createOrder(orderPayload),
      orderService.getConfig().catch(() => ({ mercadopagoPublicKey: import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY || '' })),
    ])
      .then(([order, config]) => {
        setOrderId(order.orderId)
        setOrderTotal(order.total)
        setMpPublicKey(config?.mercadopagoPublicKey || import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY || '')
      })
      .catch(err => {
        console.error('Erro ao criar pedido:', err)
        setOrderError(err.message || 'Não foi possível criar o pedido. Tente novamente.')
      })
      .finally(() => {
        setOrderLoading(false)
      })
  }, [step, orderId, orderLoading, formData, items, subtotal, itemCount])

  // Montar Card Payment Brick apenas quando método for cartão
  useEffect(() => {
    if (step !== 3 || paymentMethod !== 'card' || !orderId || !mpPublicKey || subtotal <= 0) return

    let mounted = true
    setBrickError(null)
    setBrickReady(false)

    createCardPaymentBrick(mpPublicKey, CARD_PAYMENT_BRICK_CONTAINER_ID, {
      initialization: { amount: subtotal },
      callbacks: {
        onReady: () => {
          if (mounted) setBrickReady(true)
        },
        onSubmit: (brickFormData) => {
          const token = brickFormData.token
          const paymentMethodId = brickFormData.paymentMethodId ?? brickFormData.payment_method_id
          const installments = brickFormData.installments ?? 1
          const issuerId = brickFormData.issuerId ?? brickFormData.issuer_id

          if (!token || !paymentMethodId) {
            return Promise.reject(new Error('Dados do cartão incompletos.'))
          }

          const paymentBody = {
            token,
            payment_method_id: paymentMethodId,
            installments,
            issuer_id: issuerId,
            payer: {
              email: formData.email.trim(),
              name: formData.nome.trim(),
              identification: {
                type: 'CPF',
                number: String(formData.cpf).replace(/\D/g, ''),
              },
            },
          }

          return orderService
            .createPayment(orderId, paymentBody)
            .then(result => {
              if (result.status === 'approved') {
                showSuccess('Pagamento aprovado! Redirecionando...')
                try {
                  sessionStorage.setItem(
                    CHECKOUT_SUCCESS_KEY,
                    JSON.stringify({
                      orderId: result.orderId,
                      total: orderTotal ?? subtotal,
                      email: formData.email?.trim?.() ?? '',
                    })
                  )
                } catch (_) {}
                clearCart()
                navigate('/checkout/sucesso', { replace: true })
                return
              }
              if (result.status === 'pending') {
                showSuccess('Pagamento em análise. Você receberá a confirmação em breve.')
                try {
                  sessionStorage.setItem(
                    CHECKOUT_SUCCESS_KEY,
                    JSON.stringify({
                      orderId: result.orderId,
                      total: orderTotal ?? subtotal,
                      email: formData.email?.trim?.() ?? '',
                    })
                  )
                } catch (_) {}
                clearCart()
                navigate('/checkout/sucesso', { replace: true })
                return
              }
              showError(result.statusDetail || 'Pagamento recusado. Tente outro cartão ou forma de pagamento.')
              return Promise.reject(new Error(result.statusDetail || 'Pagamento recusado'))
            })
            .catch(err => {
              const msg = err?.message || err?.data?.message || 'Erro ao processar pagamento. Tente novamente.'
              showError(msg)
              return Promise.reject(err)
            })
        },
        onError: (err) => {
          console.error('[CardPaymentBrick]', err)
          if (mounted) setBrickError(err?.message || 'Erro no formulário de pagamento.')
        },
      },
    })
      .then(controller => {
        if (mounted) brickControllerRef.current = controller
      })
      .catch(err => {
        console.error('Erro ao carregar formulário de pagamento:', err)
        if (mounted) setBrickError(err?.message || 'Não foi possível carregar o formulário de pagamento.')
      })

    return () => {
      mounted = false
      if (brickControllerRef.current?.unmount) {
        brickControllerRef.current.unmount()
        brickControllerRef.current = null
      }
      setBrickReady(false)
    }
  }, [step, orderId, mpPublicKey, subtotal, paymentMethod])

  // Polling do status do PIX enquanto o usuário está na tela do QR code (ex.: localhost sem webhook)
  const pixPaymentId = pixResult?.paymentId
  const emailForSuccessRef = useRef(formData.email)
  emailForSuccessRef.current = formData.email
  useEffect(() => {
    if (!pixPaymentId || !orderId) return
    const intervalMs = 4000
    const timerId = setInterval(() => {
      orderService
        .getPaymentStatus(orderId, pixPaymentId)
        .then(({ updated }) => {
          if (updated) {
            clearCart()
            showSuccess('Pagamento confirmado!')
            navigate('/checkout/sucesso', {
              replace: true,
              state: {
                fromPix: true,
                email: (emailForSuccessRef.current || '').trim(),
                orderCode: orderId,
              },
            })
          }
        })
        .catch(() => {})
    }, intervalMs)
    return () => clearInterval(timerId)
  }, [orderId, pixPaymentId, clearCart, navigate, showSuccess])

  const payerFromForm = () => ({
    email: formData.email.trim(),
    name: formData.nome.trim(),
    identification: { type: 'CPF', number: String(formData.cpf).replace(/\D/g, '') },
  })

  const handleGeneratePix = () => {
    if (!orderId || pixLoading) return
    setPixLoading(true)
    setPixResult(null)
    orderService
      .createPayment(orderId, {
        payment_method_id: 'pix',
        payer: payerFromForm(),
      })
      .then(res => {
        setPixResult({
          paymentId: res.paymentId,
          qrCodeBase64: res.qrCodeBase64,
          qrCode: res.qrCode,
          ticketUrl: res.ticketUrl,
        })
        try {
          sessionStorage.setItem(
            CHECKOUT_SUCCESS_KEY,
            JSON.stringify({
              orderId: res.orderId,
              total: orderTotal ?? subtotal,
              email: formData.email?.trim?.() ?? '',
            })
          )
        } catch (_) {}
      })
      .catch(err => {
        showError(err?.message || err?.data?.message || 'Erro ao gerar PIX. Tente novamente.')
      })
      .finally(() => setPixLoading(false))
  }

  const handleGenerateBoleto = () => {
    if (!orderId || boletoLoading) return
    setBoletoLoading(true)
    setBoletoResult(null)
    orderService
      .createPayment(orderId, {
        payment_method_id: 'bolbradesco',
        payer: {
          ...payerFromForm(),
          address: {
            rua: formData.rua.trim(),
            numero: String(formData.numero ?? '').trim(),
            cep: String(formData.cep).replace(/\D/g, ''),
            cidade: formData.cidade.trim(),
            estado: formData.estado.trim(),
          },
        },
      })
      .then(res => {
        setBoletoResult({ ticketUrl: res.ticketUrl })
        try {
          sessionStorage.setItem(
            CHECKOUT_SUCCESS_KEY,
            JSON.stringify({
              orderId: res.orderId,
              total: orderTotal ?? subtotal,
              email: formData.email?.trim?.() ?? '',
            })
          )
        } catch (_) {}
      })
      .catch(err => {
        showError(err?.message || err?.data?.message || 'Erro ao gerar boleto. Tente novamente.')
      })
      .finally(() => setBoletoLoading(false))
  }

  const handleGoToOrderSuccess = () => {
    clearCart()
    navigate('/checkout/sucesso', { replace: true })
  }

  const handleCopyPixCode = () => {
    if (!pixResult?.qrCode) return
    navigator.clipboard?.writeText(pixResult.qrCode).then(() => showSuccess('Código PIX copiado!'))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleStep1Submit = (e) => {
    e.preventDefault()
    if (validateStep1(formData)) setStep(2)
  }

  const handleStep2Submit = (e) => {
    e.preventDefault()
    if (validateStep2(formData)) setStep(3)
  }

  if (itemCount === 0) {
    return null
  }

  return (
    <StyledCheckout>
      <Navbar />
      <CheckoutContainer>
        <CheckoutLayout>
          <StepsCol>
            <StepIndicator aria-label={`Passo ${step} de 3`}>
              <StepDots>
                {STEPS.map((s) => (
                  <StepDot key={s.id} $active={step >= s.id} aria-hidden />
                ))}
              </StepDots>
              <StepLabel>Passo {step} de 3</StepLabel>
            </StepIndicator>

            {step === 1 && (
              <StepCard>
                <StepTitle>Dados pessoais</StepTitle>
                <Form onSubmit={handleStep1Submit}>
                  <Field>
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input
                      id="nome"
                      name="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      minLength={3}
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      name="cpf"
                      type="text"
                      inputMode="numeric"
                      placeholder="000.000.000-00"
                      value={formData.cpf}
                      onChange={handleChange}
                      required
                      minLength={11}
                    />
                  </Field>
                  <SubmitButton type="submit" disabled={!validateStep1(formData)}>
                    Continuar
                  </SubmitButton>
                </Form>
              </StepCard>
            )}

            {step === 2 && (
              <StepCard>
                <StepTitle>Endereço</StepTitle>
                <Form onSubmit={handleStep2Submit}>
                  <Field>
                    <Label htmlFor="cep">CEP</Label>
                    <Input
                      id="cep"
                      name="cep"
                      type="text"
                      inputMode="numeric"
                      autoComplete="postal-code"
                      placeholder="00000-000"
                      value={formData.cep}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                  <Field>
                    <Label htmlFor="rua">Rua</Label>
                    <Input
                      id="rua"
                      name="rua"
                      type="text"
                      placeholder="Nome da rua"
                      value={formData.rua}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                  <Row>
                    <Field>
                      <Label htmlFor="numero">Número</Label>
                      <Input
                        id="numero"
                        name="numero"
                        type="text"
                        inputMode="numeric"
                        placeholder="Nº"
                        value={formData.numero}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field>
                      <Label htmlFor="complemento">Complemento</Label>
                      <Input
                        id="complemento"
                        name="complemento"
                        type="text"
                        placeholder="Apto, bloco"
                        value={formData.complemento}
                        onChange={handleChange}
                      />
                    </Field>
                  </Row>
                  <Row>
                    <Field>
                      <Label htmlFor="cidade">Cidade</Label>
                      <Input
                        id="cidade"
                        name="cidade"
                        type="text"
                        placeholder="Cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        required
                      />
                    </Field>
                    <Field>
                      <Label htmlFor="estado">Estado</Label>
                      <Input
                        id="estado"
                        name="estado"
                        type="text"
                        placeholder="UF"
                        value={formData.estado}
                        onChange={handleChange}
                        required
                        maxLength={2}
                      />
                    </Field>
                  </Row>
                  <SubmitButton type="submit" disabled={!validateStep2(formData)}>
                    Continuar
                  </SubmitButton>
                </Form>
              </StepCard>
            )}

            {step === 3 && (
              <StepCard>
                <StepTitle>Pagamento</StepTitle>
                {orderLoading && (
                  <>
                    <InfoText>Criando seu pedido… Aguarde.</InfoText>
                    <SubmitButton type="button" disabled>
                      <ButtonSpinner aria-hidden />
                      Processando…
                    </SubmitButton>
                  </>
                )}
                {orderError && !orderLoading && (
                  <>
                    <InfoText role="alert" style={{ color: '#b91c1c' }}>
                      {orderError}
                    </InfoText>
                    <SubmitButton
                      type="button"
                      onClick={() => {
                        setOrderId(null)
                        setOrderError(null)
                        setOrderLoading(false)
                      }}
                    >
                      Tentar novamente
                    </SubmitButton>
                  </>
                )}
                {!orderLoading && orderId && (
                  <>
                    <InfoText>Escolha a forma de pagamento.</InfoText>
                    <PaymentMethodGroup role="group" aria-label="Forma de pagamento">
                      {PAYMENT_METHODS.map(({ id, label, value }) => (
                        <PaymentOption
                          key={id}
                          $selected={paymentMethod === value}
                          className={paymentMethod === value ? 'selected' : ''}
                        >
                          <Radio
                            type="radio"
                            name="paymentMethod"
                            value={value}
                            checked={paymentMethod === value}
                            onChange={() => {
                              setPaymentMethod(value)
                              setPixResult(null)
                              setBoletoResult(null)
                            }}
                            disabled={value === 'card' && !mpPublicKey}
                          />
                          <span>{label}</span>
                          {value === 'card' && !mpPublicKey && (
                            <span style={{ fontSize: '0.75rem', color: '#6b7280' }}> (indisponível)</span>
                          )}
                        </PaymentOption>
                      ))}
                    </PaymentMethodGroup>

                    {paymentMethod === 'card' && !mpPublicKey && (
                      <InfoText role="alert" style={{ color: '#b91c1c' }}>
                        Chave do Mercado Pago não configurada. Use PIX ou Boleto ou configure
                        GET /api/config (mercadopagoPublicKey) ou VITE_MERCADOPAGO_PUBLIC_KEY.
                      </InfoText>
                    )}

                    {paymentMethod === 'card' && mpPublicKey && (
                      <>
                        <InfoText>
                          Preencha os dados do cartão abaixo. O pagamento é processado de forma segura pelo Mercado Pago.
                        </InfoText>
                        {brickError && (
                          <InfoText role="alert" style={{ color: '#b91c1c', marginBottom: '0.5rem' }}>
                            {brickError}
                          </InfoText>
                        )}
                        <div
                          id={CARD_PAYMENT_BRICK_CONTAINER_ID}
                          style={{ minHeight: brickReady ? undefined : 280 }}
                          aria-busy={!brickReady}
                          aria-live="polite"
                        />
                      </>
                    )}

                    {paymentMethod === 'pix' && (
                      <>
                        {!pixResult ? (
                          <>
                            <InfoText>Gere o QR Code PIX e pague pelo app do seu banco.</InfoText>
                            <SubmitButton
                              type="button"
                              onClick={handleGeneratePix}
                              disabled={pixLoading}
                              aria-busy={pixLoading}
                            >
                              {pixLoading && <ButtonSpinner aria-hidden />}
                              {pixLoading ? 'Gerando PIX…' : 'Gerar QR Code PIX'}
                            </SubmitButton>
                          </>
                        ) : (
                          <>
                            <InfoText>Escaneie o QR Code ou copie o código PIX e pague no app do seu banco.</InfoText>
                            <QrCodeBox>
                              {pixResult.qrCodeBase64 && (
                                <>
                                  <QrCodeLabel>QR Code</QrCodeLabel>
                                  <QrCodeImage
                                    src={`data:image/png;base64,${pixResult.qrCodeBase64}`}
                                    alt="QR Code PIX"
                                    width={200}
                                    height={200}
                                  />
                                </>
                              )}
                              {pixResult.qrCode && (
                                <CopyArea>
                                  <QrCodeLabel>Código PIX (copia e cola)</QrCodeLabel>
                                  <CopyInput
                                    type="text"
                                    readOnly
                                    value={pixResult.qrCode}
                                    aria-label="Código PIX para copiar"
                                  />
                                  <CopyButton type="button" onClick={handleCopyPixCode}>
                                    Copiar código
                                  </CopyButton>
                                </CopyArea>
                              )}
                            </QrCodeBox>
                            {pixResult.ticketUrl && (
                              <InfoText style={{ marginTop: '0.5rem' }}>
                                <BoletoLink
                                  href={pixResult.ticketUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ display: 'inline-flex', marginTop: '0.5rem' }}
                                >
                                  Ver pagamento no Mercado Pago
                                </BoletoLink>
                              </InfoText>
                            )}
                            <InfoText style={{ marginTop: '1rem' }}>
                              Após o pagamento você receberá a confirmação por e-mail.
                            </InfoText>
                            <SubmitButton type="button" onClick={handleGoToOrderSuccess}>
                              Ir para página do pedido
                            </SubmitButton>
                          </>
                        )}
                      </>
                    )}

                    {paymentMethod === 'boleto' && (
                      <>
                        {!boletoResult ? (
                          <>
                            <InfoText>Gere o boleto e pague em qualquer banco ou lotérica.</InfoText>
                            <SubmitButton
                              type="button"
                              onClick={handleGenerateBoleto}
                              disabled={boletoLoading}
                              aria-busy={boletoLoading}
                            >
                              {boletoLoading && <ButtonSpinner aria-hidden />}
                              {boletoLoading ? 'Gerando boleto…' : 'Gerar boleto'}
                            </SubmitButton>
                          </>
                        ) : (
                          <>
                            <InfoText>Abra ou baixe o boleto e pague até o vencimento.</InfoText>
                            {boletoResult.ticketUrl && (
                              <BoletoLink
                                href={boletoResult.ticketUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Abrir / Baixar boleto
                              </BoletoLink>
                            )}
                            <InfoText style={{ marginTop: '1rem' }}>
                              Após o pagamento você receberá a confirmação por e-mail.
                            </InfoText>
                            <SubmitButton type="button" onClick={handleGoToOrderSuccess}>
                              Ir para página do pedido
                            </SubmitButton>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </StepCard>
            )}
          </StepsCol>

          <SummaryCol>
            {(step === 1 || step === 2 || step === 3) && items.length > 0 && (
              <OrderSummary items={items} subtotal={subtotal} />
            )}
          </SummaryCol>
        </CheckoutLayout>
      </CheckoutContainer>
      <Footer />
    </StyledCheckout>
  )
}
