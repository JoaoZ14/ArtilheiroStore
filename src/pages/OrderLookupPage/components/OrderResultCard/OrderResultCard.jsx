import {
  ResultCard,
  ResultHeader,
  OrderCode,
  StatusBadge,
  ProgressBlock,
  ProgressTitle,
  Timeline,
  TimelineItem,
  TimelineLeft,
  TimelineDot,
  TimelineLine,
  TimelineContent,
  TimelineLabel,
  TimelineDate,
  CancelledNote,
  ResultMeta,
  ResultMetaItem,
  ResultTotal,
  InfoBlock,
  InfoLabel,
  InfoText,
  TrackingBlock,
  TrackingLabel,
  TrackingLink,
  SectionTitle,
  ItemList,
  ItemRow,
  ItemThumb,
  ItemThumbImg,
  ItemInfo,
  ItemName,
  ItemMeta,
  ItemPrice,
} from './OrderResultCard.styled'

const STATUS_LABELS = {
  CREATED: 'Criado',
  PAYMENT_PENDING: 'Aguardando pagamento',
  PENDING_PAYMENT: 'Aguardando pagamento',
  PAID: 'Pago',
  RECEIVED: 'Recebido',
  CONFIRMED: 'Confirmado',
  PREPARING: 'Em preparação',
  SHIPPED: 'Enviado',
  IN_TRANSIT: 'Em trânsito',
  DELIVERED: 'Entregue',
  CANCELLED: 'Cancelado',
  CANCELED: 'Cancelado',
}

const STATUS_VARIANT = {
  CREATED: 'yellow',
  PAYMENT_PENDING: 'yellow',
  PENDING_PAYMENT: 'yellow',
  PAID: 'green',
  RECEIVED: 'blue',
  CONFIRMED: 'blue',
  PREPARING: 'blue',
  SHIPPED: 'teal',
  IN_TRANSIT: 'teal',
  DELIVERED: 'green',
  CANCELLED: 'red',
  CANCELED: 'red',
}

/** Ordem do fluxo de envio (estilo Netshoes: timeline vertical) */
const SHIPPING_PROGRESS_STEPS = [
  { key: 'PAYMENT_PENDING', label: 'Pedido realizado' },
  { key: 'RECEIVED', label: 'Pagamento aprovado' },
  { key: 'CONFIRMED', label: 'Confirmado' },
  { key: 'PREPARING', label: 'Em separação' },
  { key: 'SHIPPED', label: 'Enviado' },
  { key: 'IN_TRANSIT', label: 'Em trânsito' },
  { key: 'DELIVERED', label: 'Entregue' },
]

function getProgressIndex(status) {
  if (status === 'CANCELLED' || status === 'CANCELED') return -1
  const idx = SHIPPING_PROGRESS_STEPS.findIndex((s) => s.key === status)
  if (idx >= 0) return idx
  if (status === 'CREATED' || status === 'PENDING_PAYMENT' || status === 'PAID') return 0
  return 0
}

function getStatusVariant(status) {
  return STATUS_VARIANT[status] || 'yellow'
}

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function formatDate(value) {
  if (!value) return '—'
  try {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    }).format(new Date(value))
  } catch {
    return value
  }
}

function getItemName(item) {
  return item.name ?? item.productName ?? 'Produto'
}

function formatCep(cep) {
  if (!cep) return ''
  const s = String(cep).replaceAll(/\D/g, '')
  return s.length === 8 ? `${s.slice(0, 5)}-${s.slice(5)}` : cep
}

function formatAddress(address) {
  if (!address || typeof address !== 'object') return null
  const { rua, numero, complemento, cidade, estado, cep } = address
  const parts = []
  if (rua) parts.push(rua)
  if (numero != null && numero !== '') parts.push(numero)
  if (complemento) parts.push(complemento)
  const line1 = parts.length ? parts.join(', ') : null
  const line2 = []
  if (cidade) line2.push(cidade)
  if (estado) line2.push(estado)
  const cityState = line2.length ? line2.join(' - ') : null
  const cepFormatted = cep ? `CEP ${formatCep(cep)}` : null
  return [line1, cityState, cepFormatted].filter(Boolean).join('. ')
}

export default function OrderResultCard({ order }) {
  const statusLabel = STATUS_LABELS[order.status] || order.status
  const statusVariant = getStatusVariant(order.status)
  const hasTracking = order.trackingUrl || order.trackingCode
  const progressIndex = getProgressIndex(order.status)
  const isCancelled = order.status === 'CANCELLED' || order.status === 'CANCELED'

  return (
    <ResultCard aria-label={`Pedido ${order.orderCode}`}>
      <ResultHeader>
        <OrderCode>{order.orderCode}</OrderCode>
        <StatusBadge $variant={statusVariant}>{statusLabel}</StatusBadge>
      </ResultHeader>
      <ProgressBlock aria-label="Progresso do pedido">
        <ProgressTitle>Acompanhe seu pedido</ProgressTitle>
        <Timeline role="list">
          {SHIPPING_PROGRESS_STEPS.map((step, index) => {
            const done = !isCancelled && index < progressIndex
            const current = !isCancelled && index === progressIndex
            const state = done ? 'done' : current ? 'current' : 'pending'
            const lineDone = !isCancelled && index < progressIndex
            const isLast = index === SHIPPING_PROGRESS_STEPS.length - 1
            const showDate =
              (step.key === 'PAYMENT_PENDING' && order.createdAt) ||
              (step.key === 'SHIPPED' && order.shippedAt)
            const dateValue =
              step.key === 'PAYMENT_PENDING'
                ? order.createdAt
                : step.key === 'SHIPPED'
                  ? order.shippedAt
                  : null
            return (
              <TimelineItem key={step.key} role="listitem">
                <TimelineLeft>
                  <TimelineDot $state={state} aria-current={current ? 'step' : undefined}>
                    {done ? '✓' : ''}
                  </TimelineDot>
                  {!isLast && <TimelineLine $done={lineDone} aria-hidden />}
                </TimelineLeft>
                <TimelineContent>
                  <TimelineLabel $active={current}>{step.label}</TimelineLabel>
                  {showDate && dateValue && (
                    <TimelineDate>{formatDate(dateValue)}</TimelineDate>
                  )}
                </TimelineContent>
              </TimelineItem>
            )
          })}
        </Timeline>
        {isCancelled && <CancelledNote>Pedido cancelado</CancelledNote>}
      </ProgressBlock>
      <ResultMeta>
        <ResultMetaItem>Data do pedido: {formatDate(order.createdAt)}</ResultMetaItem>
        {order.shippedAt && (
          <ResultMetaItem>Enviado em: {formatDate(order.shippedAt)}</ResultMetaItem>
        )}
        <ResultTotal>Total: {formatPrice(order.total)}</ResultTotal>
      </ResultMeta>
      {(order.customerName || order.email || order.address || order.paymentMethodName) && (
        <InfoBlock>
          {order.customerName && (
            <>
              <InfoLabel>Cliente</InfoLabel>
              <InfoText>
                {order.customerName}
                {order.email && ` · ${order.email}`}
              </InfoText>
            </>
          )}
          {order.address && formatAddress(order.address) && (
            <>
              <InfoLabel>Entrega</InfoLabel>
              <InfoText>{formatAddress(order.address)}</InfoText>
            </>
          )}
          {order.paymentMethodName && (
            <>
              <InfoLabel>Pagamento</InfoLabel>
              <InfoText>{order.paymentMethodName}</InfoText>
            </>
          )}
        </InfoBlock>
      )}
      {hasTracking && (
        <TrackingBlock>
          {order.trackingCode && (
            <TrackingLabel>
              Rastreio: <strong>{order.trackingCode}</strong>
              {order.carrier && ` · ${order.carrier}`}
            </TrackingLabel>
          )}
          {order.trackingUrl && (
            <TrackingLink href={order.trackingUrl} target="_blank" rel="noopener noreferrer">
              Rastrear entrega
            </TrackingLink>
          )}
        </TrackingBlock>
      )}
      <SectionTitle>Itens do pedido</SectionTitle>
      <ItemList aria-label="Itens do pedido">
        {order.items?.map((item, index) => {
          const name = getItemName(item)
          return (
            <ItemRow key={`${name}-${item.size ?? ''}-${index}`}>
              <ItemThumb>
                <ItemThumbImg
                  src={item.image || '/logos/sem%20fundo/4.png'}
                  alt={name}
                  loading="lazy"
                />
              </ItemThumb>
              <ItemInfo>
                <ItemName>{name}</ItemName>
                <ItemMeta>
                  {item.size ? `Tamanho ${item.size}` : ''}
                  {item.size && item.quantity ? ' · ' : ''}
                  {item.quantity ? `${item.quantity}x` : ''}
                </ItemMeta>
              </ItemInfo>
              <ItemPrice>
                {formatPrice((item.price ?? item.unitPrice ?? 0) * (item.quantity ?? 1))}
              </ItemPrice>
            </ItemRow>
          )
        })}
      </ItemList>
    </ResultCard>
  )
}
