import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { orderService } from '../../services/api/orderService'
import { ApiError } from '../../services/api/httpClient'
import OrderLookupForm from './components/OrderLookupForm/OrderLookupForm'
import OrderResultCard from './components/OrderResultCard/OrderResultCard'
import OrderLookupSkeleton from './components/OrderLookupSkeleton/OrderLookupSkeleton'
import {
  StyledOrderLookup,
  LookupContainer,
  PageTitle,
  PageDescription,
  MessageCard,
  MessageTitle,
  MessageText,
} from './OrderLookupPage.styled'

function getFriendlyError(error) {
  if (error instanceof ApiError) {
    if (error.status === 404) return 'Pedido não encontrado'
    if (error.status === 400 || error.status === 422) return 'Confira os dados e tente novamente'
  }
  return 'Erro ao consultar pedido'
}

export default function OrderLookupPage() {
  const [email, setEmail] = useState('')
  const [orderCode, setOrderCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    return () => {
      setOrder(null)
      setError(null)
    }
  }, [])

  const handleFormChange = ({ email: e, orderCode: code }) => {
    setEmail(e ?? email)
    setOrderCode(code ?? orderCode)
    setError(null)
  }

  const handleSubmit = async () => {
    const trimmedEmail = email.trim()
    const trimmedCode = orderCode.trim()
    if (!trimmedEmail || !trimmedCode) return

    setLoading(true)
    setError(null)
    setOrder(null)

    try {
      const data = await orderService.lookupOrder(trimmedEmail, trimmedCode)
      setOrder(data)
    } catch (err) {
      setError(getFriendlyError(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <StyledOrderLookup>
      <Navbar />
      <LookupContainer>
        <PageTitle>Consultar pedido</PageTitle>
        <PageDescription>
          Informe seu e-mail e o código do pedido para acompanhar o status.
        </PageDescription>

        <OrderLookupForm
          email={email}
          orderCode={orderCode}
          loading={loading}
          onChange={handleFormChange}
          onSubmit={handleSubmit}
        />

        {loading && <OrderLookupSkeleton />}

        {!loading && error && (
          <MessageCard role="alert">
            <MessageTitle>Não foi possível encontrar o pedido</MessageTitle>
            <MessageText>{error}</MessageText>
          </MessageCard>
        )}

        {!loading && order && <OrderResultCard order={order} />}
      </LookupContainer>
      <Footer />
    </StyledOrderLookup>
  )
}
