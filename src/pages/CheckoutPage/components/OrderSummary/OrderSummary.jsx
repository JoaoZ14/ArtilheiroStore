import { useState } from 'react'
import {
  SummaryCard,
  SummaryHeader,
  Chevron,
  SummaryBody,
  ItemList,
  ItemRow,
  ItemThumb,
  ItemThumbImg,
  ItemInfo,
  ItemName,
  ItemMeta,
  ItemPrice,
  SummaryRow,
  SummaryTotalRow,
  FreightNote,
} from './OrderSummary.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const ChevronIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const FREIGHT_PLACEHOLDER = 0

export default function OrderSummary({ items, subtotal }) {
  const [open, setOpen] = useState(false)
  const freight = FREIGHT_PLACEHOLDER
  const total = subtotal + freight

  return (
    <SummaryCard>
      <SummaryHeader type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>Resumo do pedido</span>
        <Chevron $open={open}>
          <ChevronIcon />
        </Chevron>
      </SummaryHeader>
      <SummaryBody $open={open}>
        <ItemList>
          {items.map((item) => (
            <ItemRow key={`${item.productId}-${item.size}`}>
              <ItemThumb>
                <ItemThumbImg src={item.image} alt={item.name} />
              </ItemThumb>
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemMeta>Tamanho {item.size} · {item.quantity}x</ItemMeta>
              </ItemInfo>
              <ItemPrice>{formatPrice(item.unitPrice * item.quantity)}</ItemPrice>
            </ItemRow>
          ))}
        </ItemList>
        <SummaryRow>
          <span>Subtotal ({items.reduce((a, i) => a + i.quantity, 0)} itens)</span>
          <span>{formatPrice(subtotal)}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Frete</span>
          <span>{freight === 0 ? 'Calculado no checkout' : formatPrice(freight)}</span>
        </SummaryRow>
        <FreightNote>O valor do frete será calculado na próxima etapa.</FreightNote>
        <SummaryTotalRow>
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </SummaryTotalRow>
      </SummaryBody>
    </SummaryCard>
  )
}
