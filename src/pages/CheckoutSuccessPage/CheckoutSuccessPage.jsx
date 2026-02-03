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
      setOrder({ orderId: codeFromUrl.trim(), total })
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
      setOrder({ orderId: data.orderId, total: data.total ?? null })
    } catch {
      navigate('/', { replace: true })
    }
  }, [navigate, searchParams])

  // Após PIX pago: buscar pedido via lookup para mostrar status atualizado
  useEffect(() => {
    if (!state.fromPix || !state.email?.trim() || !state.orderCode?.trim()) return
    setLookupLoading(true)
    orderService
      .lookupOrder(state.email.trim(), state.orderCode.trim())
      .then(setOrderDetails)
      .catch(() => setOrderDetails(null))
      .finally(() => setLookupLoading(false))
  }, [state.fromPix, state.email, state.orderCode])

  const handleBackToStore = () => {
    try {
      sessionStorage.removeItem(CHECKOUT_SUCCESS_KEY)
    } catch (_) {}
  }

  if (!order) {
    return null
  }

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
          {lookupLoading && (
            <SuccessText style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
              Carregando detalhes do pedido…
            </SuccessText>
          )}
          {orderDetails && !lookupLoading && (
            <OrderDetailsWrap>
              <OrderResultCard order={orderDetails} />
            </OrderDetailsWrap>
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
