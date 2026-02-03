import {
  ExpandableCard,
  ExpandableHeader,
  HeaderLeft,
  HeaderItemThumbs,
  HeaderItemThumb,
  HeaderItemThumbImg,
  HeaderItemInfo,
  HeaderItemName,
  HeaderItemMeta,
  HeaderRight,
  HeaderTotal,
  StatusBadgeSmall,
  Chevron,
  ExpandableBody,
} from './ExpandableOrderCard.styled'
import OrderResultCard from '../OrderResultCard/OrderResultCard'

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

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value ?? 0)
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
  return item?.name ?? item?.productName ?? 'Produto'
}

const MAX_HEADER_THUMBS = 3
const DEFAULT_IMAGE = '/logos/sem%20fundo/4.png'

export default function ExpandableOrderCard({ order, expanded, onToggle }) {
  const orderCode = order.orderCode ?? order.orderId ?? order.id ?? '—'
  const statusLabel = STATUS_LABELS[order.status] ?? order.status
  const statusVariant = STATUS_VARIANT[order.status] ?? 'yellow'
  const items = order.items && order.items.length > 0 ? order.items : []
  const firstItem = items[0]
  const headerThumbs = items.slice(0, MAX_HEADER_THUMBS)
  const displayName = firstItem
    ? items.length === 1
      ? getItemName(firstItem)
      : `${getItemName(firstItem)}${items.length > 1 ? ` e mais ${items.length - 1} ${items.length === 2 ? 'item' : 'itens'}` : ''}`
    : orderCode
  const metaParts = []
  if (firstItem?.size) metaParts.push(`Tam. ${firstItem.size}`)
  if (firstItem?.quantity) metaParts.push(`${firstItem.quantity}x`)
  if (order.createdAt) metaParts.push(formatDate(order.createdAt))
  const metaText = metaParts.join(' · ')

  return (
    <ExpandableCard aria-label={firstItem ? `Pedido: ${displayName}` : `Pedido ${orderCode}`}>
      <ExpandableHeader
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`order-details-${order.id ?? orderCode}`}
        id={`order-header-${order.id ?? orderCode}`}
      >
        <HeaderLeft>
          {items.length > 0 ? (
            <>
              <HeaderItemThumbs>
                {headerThumbs.map((item, index) => (
                  <HeaderItemThumb key={`${item.productId ?? index}-${item.size ?? ''}`}>
                    <HeaderItemThumbImg
                      src={item.image ?? item.images?.[0] ?? DEFAULT_IMAGE}
                      alt={getItemName(item)}
                      loading="lazy"
                    />
                  </HeaderItemThumb>
                ))}
              </HeaderItemThumbs>
              <HeaderItemInfo>
                <HeaderItemName>{displayName}</HeaderItemName>
                {metaText && <HeaderItemMeta>{metaText}</HeaderItemMeta>}
              </HeaderItemInfo>
            </>
          ) : (
            <HeaderItemInfo>
              <HeaderItemName>{orderCode}</HeaderItemName>
              <HeaderItemMeta>{formatDate(order.createdAt)}</HeaderItemMeta>
            </HeaderItemInfo>
          )}
        </HeaderLeft>
        <HeaderRight>
          <HeaderTotal>{formatPrice(order.total)}</HeaderTotal>
          <StatusBadgeSmall $variant={statusVariant}>{statusLabel}</StatusBadgeSmall>
          <Chevron className={expanded ? 'expanded' : ''} aria-hidden>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Chevron>
        </HeaderRight>
      </ExpandableHeader>
      {expanded && (
        <ExpandableBody
          id={`order-details-${order.id ?? orderCode}`}
          role="region"
          aria-labelledby={`order-header-${order.id ?? orderCode}`}
        >
          <OrderResultCard order={order} />
        </ExpandableBody>
      )}
    </ExpandableCard>
  )
}
