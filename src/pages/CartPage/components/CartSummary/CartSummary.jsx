import {
  SummaryCard,
  SummaryTitle,
  SummaryRow,
  SummaryTotalRow,
  SummaryFreightNote,
  CheckoutButton,
} from './CartSummary.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const FREIGHT_PLACEHOLDER = 0

export default function CartSummary({ subtotal, itemCount, onCheckout }) {
  const freight = FREIGHT_PLACEHOLDER
  const total = subtotal + freight

  return (
    <SummaryCard>
      <SummaryTitle>Resumo do pedido</SummaryTitle>
      <SummaryRow>
        <span>Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'itens'})</span>
        <span>{formatPrice(subtotal)}</span>
      </SummaryRow>
      <SummaryRow>
        <span>Frete</span>
        <span>{freight === 0 ? 'Calculado no checkout' : formatPrice(freight)}</span>
      </SummaryRow>
      <SummaryFreightNote>
        O valor do frete será calculado na próxima etapa.
      </SummaryFreightNote>
      <SummaryTotalRow>
        <span>Total</span>
        <span>{formatPrice(total)}</span>
      </SummaryTotalRow>
      <CheckoutButton
        type="button"
        disabled={itemCount === 0}
        onClick={onCheckout}
        aria-label="Finalizar compra"
      >
        Finalizar compra
      </CheckoutButton>
    </SummaryCard>
  )
}
