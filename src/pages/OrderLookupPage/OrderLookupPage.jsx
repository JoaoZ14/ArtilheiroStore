import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { orderService } from '../../services/api/orderService'
import { ApiError } from '../../services/api/httpClient'
import OrderLookupForm from './components/OrderLookupForm/OrderLookupForm'
import OrderResultCard from './components/OrderResultCard/OrderResultCard'
import ExpandableOrderCard from './components/ExpandableOrderCard/ExpandableOrderCard'
import OrderLookupSkeleton from './components/OrderLookupSkeleton/OrderLookupSkeleton'
import {
  StyledOrderLookup,
  LookupContainer,
  PageTitle,
  PageDescription,
  TabGroup,
  TabButton,
  MessageCard,
  MessageTitle,
  MessageText,
  OrderList,
} from './OrderLookupPage.styled'

const ORDER_LOOKUP_KEY = 'artilheiro-order-lookup'

function getFriendlyError(error) {
  if (error instanceof ApiError) {
    if (error.status === 404) return 'Pedido não encontrado'
    if (error.status === 400 || error.status === 422) return 'Confira os dados e tente novamente'
  }
  return 'Erro ao consultar pedido'
}

const LOOKUP_MODE_EMAIL = 'email'
const LOOKUP_MODE_CPF = 'cpf'

export default function OrderLookupPage() {
  const navigate = useNavigate()
  const { id: orderIdFromUrl } = useParams()
  const [mode, setMode] = useState(LOOKUP_MODE_EMAIL)
  const [email, setEmail] = useState('')
  const [orderCode, setOrderCode] = useState('')
  const [cpf, setCpf] = useState('')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState(null)
  const [ordersByCpf, setOrdersByCpf] = useState([])
  const [expandedOrderId, setExpandedOrderId] = useState(null)
  const [error, setError] = useState(null)

  // Restaurar pedido do sessionStorage quando a URL tem :id (ex.: após recarregar)
  useEffect(() => {
    if (!orderIdFromUrl) {
      setOrder(null)
      return
    }
    try {
      const raw = sessionStorage.getItem(ORDER_LOOKUP_KEY)
      if (!raw) return
      const { id, order: storedOrder } = JSON.parse(raw)
      if (storedOrder && id === orderIdFromUrl) {
        setOrder(storedOrder)
        setError(null)
      }
    } catch (_) {}
  }, [orderIdFromUrl])

  useEffect(() => {
    return () => {
      setOrder(null)
      setError(null)
    }
  }, [])

  const handleFormChange = ({ email: e, orderCode: code, cpf: c }) => {
    if (e !== undefined) setEmail(e)
    if (code !== undefined) setOrderCode(code)
    if (c !== undefined) setCpf(c)
    setError(null)
  }

  const handleModeChange = (newMode) => {
    setMode(newMode)
    setOrder(null)
    setOrdersByCpf([])
    setExpandedOrderId(null)
    setError(null)
    if (orderIdFromUrl && newMode === LOOKUP_MODE_CPF) {
      navigate('/pedido/consultar', { replace: true })
    }
  }

  const handleToggleExpand = (orderKey) => {
    setExpandedOrderId((prev) => (prev === orderKey ? null : orderKey))
  }

  const handleSubmit = async () => {
    if (mode === LOOKUP_MODE_CPF) {
      const digits = (cpf ?? '').replace(/\D/g, '')
      if (digits.length < 11) return

      setLoading(true)
      setError(null)
      setOrder(null)
      setOrdersByCpf([])

      try {
        const list = await orderService.getOrdersByCpf(cpf)
        setOrdersByCpf(Array.isArray(list) ? list : [])
        if (!list?.length) {
          setError('Nenhum pedido encontrado para este CPF.')
        }
      } catch (err) {
        setError(getFriendlyError(err))
      } finally {
        setLoading(false)
      }
      return
    }

    const trimmedEmail = email.trim()
    const trimmedCode = orderCode.trim()
    if (!trimmedEmail || !trimmedCode) return

    setLoading(true)
    setError(null)
    setOrder(null)
    setOrdersByCpf([])

    try {
      const data = await orderService.lookupOrder(trimmedEmail, trimmedCode)
      setOrder(data)
      const idForUrl = data.id ?? data.orderCode ?? data.orderId
      if (idForUrl) {
        try {
          sessionStorage.setItem(
            ORDER_LOOKUP_KEY,
            JSON.stringify({ id: idForUrl, order: data })
          )
        } catch (_) {}
        navigate(`/pedido/consultar/${encodeURIComponent(idForUrl)}`, {
          replace: true,
        })
      }
    } catch (err) {
      setError(getFriendlyError(err))
    } finally {
      setLoading(false)
    }
  }

  const showSingleOrder = !loading && order && mode === LOOKUP_MODE_EMAIL
  const showOrderList = !loading && ordersByCpf.length > 0

  return (
    <StyledOrderLookup>
      <Navbar />
      <LookupContainer>
        <PageTitle>Consultar pedido</PageTitle>
        <PageDescription>
          Busque por e-mail e código do pedido ou pelo seu CPF para ver todos os pedidos.
        </PageDescription>

        <TabGroup role="tablist" aria-label="Forma de consulta">
          <TabButton
            type="button"
            role="tab"
            aria-selected={mode === LOOKUP_MODE_EMAIL}
            aria-controls="lookup-form"
            id="tab-email"
            className={mode === LOOKUP_MODE_EMAIL ? 'active' : ''}
            onClick={() => handleModeChange(LOOKUP_MODE_EMAIL)}
          >
            E-mail e código
          </TabButton>
          <TabButton
            type="button"
            role="tab"
            aria-selected={mode === LOOKUP_MODE_CPF}
            aria-controls="lookup-form"
            id="tab-cpf"
            className={mode === LOOKUP_MODE_CPF ? 'active' : ''}
            onClick={() => handleModeChange(LOOKUP_MODE_CPF)}
          >
            Por CPF
          </TabButton>
        </TabGroup>

        <div id="lookup-form" role="tabpanel" aria-labelledby={mode === LOOKUP_MODE_EMAIL ? 'tab-email' : 'tab-cpf'}>
          <OrderLookupForm
            mode={mode}
            email={email}
            orderCode={orderCode}
            cpf={cpf}
            loading={loading}
            onChange={handleFormChange}
            onSubmit={handleSubmit}
          />
        </div>

        {loading && <OrderLookupSkeleton />}

        {!loading && error && (
          <MessageCard role="alert">
            <MessageTitle>
              {mode === LOOKUP_MODE_CPF ? 'Nenhum pedido encontrado' : 'Não foi possível encontrar o pedido'}
            </MessageTitle>
            <MessageText>{error}</MessageText>
          </MessageCard>
        )}

        {showSingleOrder && <OrderResultCard order={order} />}

        {showOrderList && (
          <OrderList>
            {ordersByCpf.map((o) => {
              const orderKey = o.id ?? o.orderCode ?? o.orderId
              return (
                <ExpandableOrderCard
                  key={orderKey}
                  order={o}
                  expanded={expandedOrderId === orderKey}
                  onToggle={() => handleToggleExpand(orderKey)}
                />
              )
            })}
          </OrderList>
        )}
      </LookupContainer>
      <Footer />
    </StyledOrderLookup>
  )
}
