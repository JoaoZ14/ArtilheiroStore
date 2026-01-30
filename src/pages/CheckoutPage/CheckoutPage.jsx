import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { useCart } from '../../context/CartContext'
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
  SuccessWrap,
  SuccessTitle,
  SuccessText,
  BackButton,
  PaymentOption,
  Radio,
  SummaryCol,
  StepIndicator,
  StepDot,
} from './CheckoutPage.styled'

const STEPS = [
  { id: 1, title: 'Dados pessoais' },
  { id: 2, title: 'Endereço' },
  { id: 3, title: 'Pagamento' },
  { id: 4, title: 'Confirmação' },
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

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { items, subtotal, itemCount, clearCart } = useCart()
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
    paymentMethod: 'credit',
  })

  useEffect(() => {
    if (itemCount === 0 && step < 4) {
      navigate('/carrinho', { replace: true })
    }
  }, [itemCount, step, navigate])

  const isSuccessStep = step === 4

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

  const handleStep3Submit = (e) => {
    e.preventDefault()
    setStep(4)
    clearCart()
  }

  if (itemCount === 0 && !isSuccessStep) {
    return null
  }

  return (
    <StyledCheckout>
      <Navbar />
      <CheckoutContainer>
        <CheckoutLayout>
          <StepsCol>
            <StepIndicator>
              {STEPS.map((s) => (
                <StepDot key={s.id} $active={step >= s.id} aria-hidden />
              ))}
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
                <Form onSubmit={handleStep3Submit}>
                  <Field>
                    <PaymentOption $selected={formData.paymentMethod === 'credit'}>
                      <Radio
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === 'credit'}
                        onChange={handleChange}
                      />
                      <span>Cartão de crédito</span>
                    </PaymentOption>
                  </Field>
                  <Field>
                    <PaymentOption $selected={formData.paymentMethod === 'pix'}>
                      <Radio
                        type="radio"
                        name="paymentMethod"
                        value="pix"
                        checked={formData.paymentMethod === 'pix'}
                        onChange={handleChange}
                      />
                      <span>Pix</span>
                    </PaymentOption>
                  </Field>
                  {formData.paymentMethod === 'credit' && (
                    <>
                      <Field>
                        <Label htmlFor="cardNumber">Número do cartão (mock)</Label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          readOnly
                          disabled
                        />
                      </Field>
                      <Row>
                        <Field>
                          <Label htmlFor="cardExp">Validade (mock)</Label>
                          <Input id="cardExp" name="cardExp" type="text" placeholder="MM/AA" readOnly disabled />
                        </Field>
                        <Field>
                          <Label htmlFor="cardCvv">CVV (mock)</Label>
                          <Input id="cardCvv" name="cardCvv" type="text" placeholder="***" readOnly disabled />
                        </Field>
                      </Row>
                    </>
                  )}
                  {formData.paymentMethod === 'pix' && (
                    <Field>
                      <Label>Pix (mock)</Label>
                      <Input type="text" placeholder="QR Code será exibido aqui" readOnly disabled />
                    </Field>
                  )}
                  <SubmitButton type="submit">Finalizar compra</SubmitButton>
                </Form>
              </StepCard>
            )}

            {step === 4 && (
              <StepCard>
                <SuccessWrap>
                  <SuccessTitle>Compra realizada com sucesso!</SuccessTitle>
                  <SuccessText>Obrigado por comprar na Artilheiro Store.</SuccessText>
                  <BackButton as={Link} to="/">
                    Voltar para a loja
                  </BackButton>
                </SuccessWrap>
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
