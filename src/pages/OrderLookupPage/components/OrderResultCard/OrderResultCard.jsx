import {
  ResultCard,
  ResultHeader,
  OrderCode,
  StatusBadge,
  ResultMeta,
  ResultMetaItem,
  ResultTotal,
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
  CANCELED: 'Cancelado',
}

const STATUS_VARIANT = {
  CREATED: 'yellow',
  PAYMENT_PENDING: 'yellow',
  PENDING_PAYMENT: 'yellow',
  PAID: 'green',
  CANCELED: 'red',
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

export default function OrderResultCard({ order }) {
  const statusLabel = STATUS_LABELS[order.status] || order.status
  const statusVariant = getStatusVariant(order.status)

  return (
    <ResultCard aria-label={`Pedido ${order.orderCode}`}>
      <ResultHeader>
        <OrderCode>{order.orderCode}</OrderCode>
        <StatusBadge $variant={statusVariant}>{statusLabel}</StatusBadge>
      </ResultHeader>
      <ResultMeta>
        <ResultMetaItem>Data: {formatDate(order.createdAt)}</ResultMetaItem>
        <ResultTotal>Total: {formatPrice(order.total)}</ResultTotal>
      </ResultMeta>
      <ItemList aria-label="Itens do pedido">
        {order.items?.map((item, index) => (
          <ItemRow key={`${item.name}-${item.size}-${index}`}>
            <ItemThumb>
              <ItemThumbImg
                src={item.image || '/logos/sem%20fundo/4.png'}
                alt={item.name}
                loading="lazy"
              />
            </ItemThumb>
            <ItemInfo>
              <ItemName>{item.name}</ItemName>
              <ItemMeta>
                Tamanho {item.size} · {item.quantity}x
              </ItemMeta>
            </ItemInfo>
            <ItemPrice>{formatPrice((item.price || item.unitPrice) * (item.quantity || 1))}</ItemPrice>
          </ItemRow>
        ))}
      </ItemList>
    </ResultCard>
  )
}
