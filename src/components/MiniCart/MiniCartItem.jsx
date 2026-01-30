import {
  ItemRow,
  ItemImageWrap,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemMeta,
  ItemPrice,
  ItemRight,
  RemoveButton,
} from './MiniCartItem.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
)

export default function MiniCartItem({ item, onRemove }) {
  const subtotal = item.unitPrice * item.quantity

  return (
    <ItemRow>
      <ItemImageWrap>
        <ItemImage src={item.image} alt={item.name} />
      </ItemImageWrap>
      <ItemDetails>
        <ItemName>{item.name}</ItemName>
        <ItemMeta>Tamanho {item.size} · {item.quantity}x</ItemMeta>
        <ItemPrice>{formatPrice(subtotal)}</ItemPrice>
      </ItemDetails>
      <ItemRight>
        <RemoveButton
          type="button"
          onClick={() => onRemove?.(item.productId, item.size)}
          aria-label="Remover item"
        >
          <TrashIcon />
        </RemoveButton>
      </ItemRight>
    </ItemRow>
  )
}
