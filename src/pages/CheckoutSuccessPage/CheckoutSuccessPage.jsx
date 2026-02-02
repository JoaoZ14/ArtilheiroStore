import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
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
  const [order, setOrder] = useState(null)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CHECKOUT_SUCCESS_KEY)
      if (!raw) {
        navigate('/', { replace: true })
        return
      }
      const data = JSON.parse(raw)
      if (!data?.orderId || data?.total == null) {
        navigate('/', { replace: true })
        return
      }
      setOrder({ orderId: data.orderId, total: data.total })
    } catch {
      navigate('/', { replace: true })
    }
  }, [navigate])

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
              <OrderValue>{formatPrice(order.total)}</OrderValue>
            </OrderRow>
          </OrderInfo>
          <BackLink to="/" onClick={handleBackToStore}>
            Voltar para a loja
          </BackLink>
        </SuccessCard>
      </SuccessContainer>
      <Footer />
    </StyledSuccess>
  )
}
