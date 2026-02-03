import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { orderService } from '../../services/api/orderService'
import OrderResultCard from '../OrderLookupPage/components/OrderResultCard/OrderResultCard'
import {
  StyledSuccess,
  SuccessContainer,
  SuccessCard,
  SuccessIcon,
  SuccessTitle,
  SuccessText,
  OrderInfo,
  OrderRow,
  OrderTerm,
  OrderValue,
  OrderDetailsWrap,
  BackLink,
} from './CheckoutSuccessPage.styled'

const CHECKOUT_SUCCESS_KEY = 'artilheiro-checkout-success'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value ?? 0)
}

export default function CheckoutSuccessPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const [order, setOrder] = useState(null)
  const [orderDetails, setOrderDetails] = useState(null)
  const [lookupLoading, setLookupLoading] = useState(false)

  const state = location.state ?? {}

  useEffect(() => {
    const codeFromUrl = searchParams.get('code')
    if (codeFromUrl?.trim()) {
      const totalFromUrl = searchParams.get('total')
      const total = totalFromUrl != null ? Number(totalFromUrl) : null
      const emailFromUrl = searchParams.get('email')
      setOrder({
        orderId: codeFromUrl.trim(),
        total,
        email: emailFromUrl?.trim() || null,
      })
      return
    }
    try {
      const raw = sessionStorage.getItem(CHECKOUT_SUCCESS_KEY)
      if (!raw) {
        navigate('/', { replace: true })
        return
      }
      const data = JSON.parse(raw)
      if (!data?.orderId) {
        navigate('/', { replace: true })
        return
      }
      setOrder({
        orderId: data.orderId,
        total: data.total ?? null,
        email: data.email?.trim() || null,
      })
    } catch {
      navigate('/', { replace: true })
    }
  }, [navigate, searchParams])

  // Buscar pedido via lookup (email + código) para mostrar os dados iguais à tela "Rastrear meu pedido"
  const emailForLookup = order?.email ?? state?.email
  const orderCodeForLookup = order?.orderId ?? state?.orderCode
  useEffect(() => {
    if (!emailForLookup?.trim() || !orderCodeForLookup?.trim()) return
    setLookupLoading(true)
    orderService
      .lookupOrder(emailForLookup.trim(), orderCodeForLookup.trim())
      .then(setOrderDetails)
      .catch(() => setOrderDetails(null))
      .finally(() => setLookupLoading(false))
  }, [emailForLookup, orderCodeForLookup])

  const handleBackToStore = () => {
    try {
      sessionStorage.removeItem(CHECKOUT_SUCCESS_KEY)
    } catch (_) {}
  }

  if (!order) {
    return null
  }

  const showLookupCard = orderDetails && !lookupLoading
  const showFallbackInfo = !lookupLoading && !orderDetails

  return (
    <StyledSuccess>
      <Navbar />
      <SuccessContainer>
        <SuccessCard>
          <SuccessIcon aria-hidden>✓</SuccessIcon>
          <SuccessTitle>Pedido realizado com sucesso!</SuccessTitle>
          <SuccessText>
            Recebemos seu pedido e ele já está sendo processado.
          </SuccessText>
          {lookupLoading && (
            <SuccessText style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
              Carregando detalhes do pedido…
            </SuccessText>
          )}
          {showLookupCard && (
            <OrderDetailsWrap>
              <OrderResultCard order={orderDetails} />
            </OrderDetailsWrap>
          )}
          {showFallbackInfo && (
            <OrderInfo>
              <OrderRow>
                <OrderTerm>Número do pedido</OrderTerm>
                <OrderValue>{order.orderId}</OrderValue>
              </OrderRow>
              <OrderRow>
                <OrderTerm>Valor total</OrderTerm>
                <OrderValue>{order.total != null ? formatPrice(order.total) : '—'}</OrderValue>
              </OrderRow>
            </OrderInfo>
          )}
          <BackLink to="/" onClick={handleBackToStore} style={{ marginTop: '1.5rem' }}>
            Voltar para a loja
          </BackLink>
        </SuccessCard>
      </SuccessContainer>
      <Footer />
    </StyledSuccess>
  )
}
