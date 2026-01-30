import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import QuantityControl from '../QuantityControl/QuantityControl'
import {
  ItemCard,
  ItemImageLink,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemMeta,
  ItemPrice,
  ItemQuantityWrap,
  ItemSubtotal,
  ItemRemoveButton,
  ItemActions,
} from './CartItem.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const TrashIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
)

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  const [confirmRemove, setConfirmRemove] = useState(false)
  const subtotal = item.unitPrice * item.quantity

  useEffect(() => {
    if (!confirmRemove) return
    const t = setTimeout(() => setConfirmRemove(false), 3000)
    return () => clearTimeout(t)
  }, [confirmRemove])

  const handleRemove = () => {
    if (confirmRemove) {
      onRemove?.(item.productId, item.size)
      setConfirmRemove(false)
    } else {
      setConfirmRemove(true)
    }
  }

  return (
    <ItemCard>
      <ItemImageLink as={Link} to={`/produto/${item.productId}`}>
        <ItemImage src={item.image} alt={item.name} />
      </ItemImageLink>

      <ItemInfo>
        <ItemName>{item.name}</ItemName>
        <ItemMeta>Tamanho: {item.size}</ItemMeta>
        <ItemPrice>{formatPrice(item.unitPrice)}</ItemPrice>
      </ItemInfo>

      <ItemQuantityWrap>
        <QuantityControl
          value={item.quantity}
          onChange={(q) => onUpdateQuantity?.(item.productId, item.size, q)}
          min={1}
          max={99}
          aria-label={`Quantidade de ${item.name}`}
        />
      </ItemQuantityWrap>

      <ItemSubtotal>{formatPrice(subtotal)}</ItemSubtotal>

      <ItemActions>
        <ItemRemoveButton
          type="button"
          onClick={handleRemove}
          aria-label={confirmRemove ? 'Clique novamente para remover' : 'Remover item'}
          title={confirmRemove ? 'Clique novamente para remover' : 'Remover'}
        >
          <TrashIcon />
        </ItemRemoveButton>
        {confirmRemove && (
          <span style={{ fontSize: '0.75rem', color: '#c41e3a', fontWeight: 600 }}>
            Clique de novo para remover
          </span>
        )}
      </ItemActions>
    </ItemCard>
  )
}
