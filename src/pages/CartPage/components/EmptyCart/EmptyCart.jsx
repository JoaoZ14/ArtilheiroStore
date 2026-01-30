import {
  EmptyWrap,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  EmptyLink,
} from './EmptyCart.styled'

const CartIcon = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

export default function EmptyCart() {
  return (
    <EmptyWrap>
      <EmptyIcon aria-hidden>
        <CartIcon />
      </EmptyIcon>
      <EmptyTitle>Seu carrinho está vazio</EmptyTitle>
      <EmptyText>
        Adicione camisas do seu time e finalize sua compra quando quiser.
      </EmptyText>
      <EmptyLink to="/produtos">Voltar para a loja</EmptyLink>
    </EmptyWrap>
  )
}
