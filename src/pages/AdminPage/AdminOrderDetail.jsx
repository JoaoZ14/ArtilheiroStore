import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { RiArrowLeftLine, RiMapPinLine, RiFileCopyLine, RiMailLine } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { adminService } from '../../services/api/adminService'
import {
  DetailGrid, Card, CardTitle, InfoRow, ItemRow, TotalRow,
  StatusBadge, StatusSelect, UpdateBtn, BackBtn, SuccessMsg, ErrorMsg,
  ActionRow, ActionBtn, CopyBtn, UpdatedAt,
  Stepper, Step, StepDot, StepLabel,
} from './AdminOrderDetail.styled'

const STATUS_OPTIONS = [
  { value: 'PAYMENT_PENDING', label: 'Aguardando pagamento' },
  { value: 'PAYMENT_APPROVED', label: 'Pago' },
  { value: 'PAYMENT_IN_PROCESS', label: 'Em processamento' },
  { value: 'PAYMENT_REJECTED', label: 'Pagamento recusado' },
  { value: 'SHIPPED', label: 'Enviado' },
  { value: 'DELIVERED', label: 'Entregue' },
  { value: 'CANCELLED', label: 'Cancelado' },
]

const STATUS_LABELS = {
  PAYMENT_PENDING: 'Aguardando pagamento',
  PAYMENT_APPROVED: 'Pago',
  PAYMENT_REJECTED: 'Pagamento recusado',
  PAYMENT_IN_PROCESS: 'Em processamento',
  CANCELLED: 'Cancelado',
  SHIPPED: 'Enviado',
  DELIVERED: 'Entregue',
}

const PROGRESS_STEPS = [
  { key: 'PAYMENT_PENDING', label: 'Pendente' },
  { key: 'PAYMENT_APPROVED', label: 'Pago' },
  { key: 'SHIPPED', label: 'Enviado' },
  { key: 'DELIVERED', label: 'Entregue' },
]

const STEP_ORDER = ['PAYMENT_PENDING', 'PAYMENT_APPROVED', 'SHIPPED', 'DELIVERED']

function getStepIndex(status) {
  const idx = STEP_ORDER.indexOf(status)
  return idx === -1 ? -1 : idx
}

function formatCurrency(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0)
}

function formatDate(d) {
  return new Date(d).toLocaleString('pt-BR', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

function buildMapUrl(address) {
  const query = [
    address.rua,
    address.numero,
    address.complemento,
    address.cidade,
    address.estado,
    'Brasil',
  ].filter(Boolean).join(', ')
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function buildAddressText(address) {
  const lines = [
    `${address.rua}, ${address.numero}${address.complemento ? ` — ${address.complemento}` : ''}`,
    `${address.cidade} — ${address.estado}`,
    `CEP ${address.cep}`,
  ]
  return lines.join('\n')
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).catch(() => {})
}

export default function AdminOrderDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [newStatus, setNewStatus] = useState('')
  const [updating, setUpdating] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    adminService.getOrderDetail(id)
      .then((data) => {
        setOrder(data)
        setNewStatus(data.status)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  async function handleUpdateStatus() {
    if (newStatus === order.status) return

    if (newStatus === 'CANCELLED') {
      const confirmed = window.confirm(
        `Tem certeza que deseja cancelar o pedido ${order.id}?\nEsta ação não pode ser desfeita automaticamente.`
      )
      if (!confirmed) return
    }

    setUpdating(true)
    setSuccess(false)
    setError(null)

    try {
      await adminService.updateOrderStatus(id, newStatus)
      setOrder((prev) => ({ ...prev, status: newStatus, updatedAt: new Date().toISOString() }))
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
    } catch (err) {
      setError('Falha ao atualizar o status. Tente novamente.')
      console.error(err)
    } finally {
      setUpdating(false)
    }
  }

  function handleCopyAddress() {
    copyToClipboard(buildAddressText(order.address))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) {
    return (
      <AdminLayout title="Pedido" subtitle="Carregando…">
        <p style={{ color: '#7A6B5D' }}>Carregando detalhes…</p>
      </AdminLayout>
    )
  }

  if (!order) {
    return (
      <AdminLayout title="Pedido não encontrado">
        <BackBtn onClick={() => navigate('/admin/pedidos')}>
          <RiArrowLeftLine /> Voltar
        </BackBtn>
      </AdminLayout>
    )
  }

  const isAlterableStatus = !['CANCELLED', 'PAYMENT_REJECTED'].includes(order.status)
  const stepIndex = getStepIndex(order.status)
  const showStepper = stepIndex !== -1

  return (
    <AdminLayout title={`Pedido ${order.id}`} subtitle={formatDate(order.createdAt)}>
      <BackBtn onClick={() => navigate('/admin/pedidos')}>
        <RiArrowLeftLine size={16} /> Voltar aos pedidos
      </BackBtn>

      <DetailGrid>
        <div>
          {/* Itens */}
          <Card>
            <CardTitle>Itens do pedido</CardTitle>
            {order.items.map((item, i) => (
              <ItemRow key={i}>
                <img
                  src={item.productImage || '/favicon.jpg'}
                  alt={item.productName}
                  onError={(e) => { e.target.src = '/favicon.jpg' }}
                />
                <div>
                  <strong>{item.productName || `Produto #${item.productId}`}</strong>
                  <small>Tamanho: {item.size || '—'} · Qtd: {item.quantity}</small>
                </div>
                <span>{formatCurrency(item.unitPrice * item.quantity)}</span>
              </ItemRow>
            ))}
            <TotalRow>
              <span>Total</span>
              <span>{formatCurrency(order.total)}</span>
            </TotalRow>
          </Card>

          {/* Cliente */}
          <Card>
            <CardTitle>Cliente</CardTitle>
            <InfoRow><span>Nome</span><span>{order.customer.name}</span></InfoRow>
            <InfoRow><span>E-mail</span><span>{order.customer.email}</span></InfoRow>
            <InfoRow><span>CPF</span><span>{order.customer.cpf}</span></InfoRow>
            <ActionRow>
              <ActionBtn href={`mailto:${order.customer.email}`}>
                <RiMailLine size={13} /> Enviar e-mail
              </ActionBtn>
              <CopyBtn onClick={() => copyToClipboard(order.customer.email)}>
                <RiFileCopyLine size={13} /> Copiar e-mail
              </CopyBtn>
            </ActionRow>
          </Card>

          {/* Endereço */}
          <Card>
            <CardTitle>Endereço de entrega</CardTitle>
            <InfoRow><span>CEP</span><span>{order.address.cep}</span></InfoRow>
            <InfoRow>
              <span>Rua</span>
              <span>{order.address.rua}, {order.address.numero}</span>
            </InfoRow>
            {order.address.complemento && (
              <InfoRow><span>Complemento</span><span>{order.address.complemento}</span></InfoRow>
            )}
            <InfoRow>
              <span>Cidade</span>
              <span>{order.address.cidade} — {order.address.estado}</span>
            </InfoRow>
            <ActionRow>
              <ActionBtn href={buildMapUrl(order.address)} target="_blank" rel="noopener noreferrer">
                <RiMapPinLine size={13} /> Abrir no Google Maps
              </ActionBtn>
              <CopyBtn onClick={handleCopyAddress}>
                <RiFileCopyLine size={13} /> {copied ? 'Copiado!' : 'Copiar endereço'}
              </CopyBtn>
            </ActionRow>
          </Card>

          {/* Pagamentos */}
          {order.payments?.length > 0 && (
            <Card>
              <CardTitle>Pagamentos</CardTitle>
              {order.payments.map((p, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <InfoRow><span>Método</span><span>{p.method || '—'}</span></InfoRow>
                  <InfoRow><span>Status MP</span><span>{p.status}</span></InfoRow>
                  <InfoRow>
                    <span>ID MP</span>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>{p.mp_payment_id}</span>
                  </InfoRow>
                </div>
              ))}
            </Card>
          )}
        </div>

        {/* Coluna lateral — status */}
        <div>
          <Card>
            <CardTitle>Status do pedido</CardTitle>

            {showStepper && (
              <Stepper>
                {PROGRESS_STEPS.map((step, i) => (
                  <Step key={step.key} $done={i < stepIndex}>
                    <StepDot $active={i === stepIndex} $done={i < stepIndex}>
                      {i < stepIndex ? '✓' : i + 1}
                    </StepDot>
                    <StepLabel $active={i === stepIndex}>{step.label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}

            <StatusBadge $status={order.status}>
              {STATUS_LABELS[order.status] || order.status}
            </StatusBadge>

            {order.updatedAt && (
              <UpdatedAt>
                Última atualização: {formatDate(order.updatedAt)}
              </UpdatedAt>
            )}

            {isAlterableStatus && (
              <div>
                <p style={{ fontSize: '0.75rem', color: '#7A6B5D', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Atualizar status
                </p>
                <StatusSelect value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                  {STATUS_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </StatusSelect>
                <UpdateBtn onClick={handleUpdateStatus} disabled={updating || newStatus === order.status}>
                  {updating ? 'Salvando…' : 'Salvar status'}
                </UpdateBtn>
                {success && (
                  <SuccessMsg>✓ Status atualizado. E-mail enviado ao cliente.</SuccessMsg>
                )}
                {error && <ErrorMsg>{error}</ErrorMsg>}
              </div>
            )}

            {!isAlterableStatus && (
              <p style={{ fontSize: '0.8rem', color: '#7A6B5D', marginTop: 4 }}>
                Este pedido está encerrado e não pode ser alterado.
              </p>
            )}
          </Card>
        </div>
      </DetailGrid>
    </AdminLayout>
  )
}
