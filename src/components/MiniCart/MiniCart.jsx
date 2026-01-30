import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import MiniCartItem from './MiniCartItem'
import {
  Overlay,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  CloseButton,
  DrawerBody,
  EmptyState,
  EmptyText,
  ItemList,
  DrawerFooter,
  SubtotalRow,
  CtaGroup,
  PrimaryButton,
  SecondaryButton,
  ExploreButton,
} from './MiniCart.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export default function MiniCart() {
  const {
    items,
    subtotal,
    isMiniCartOpen,
    closeMiniCart,
    removeItem,
    itemCount,
  } = useCart()

  const isEmpty = items.length === 0

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeMiniCart()
  }

  return (
    <>
      <Overlay $open={isMiniCartOpen} onClick={handleOverlayClick} aria-hidden="true" />
      <Drawer $open={isMiniCartOpen} role="dialog" aria-modal="true" aria-label="Meu Carrinho">
        <DrawerHeader>
          <DrawerTitle>Meu Carrinho</DrawerTitle>
          <CloseButton type="button" onClick={closeMiniCart} aria-label="Fechar carrinho">
            <CloseIcon />
          </CloseButton>
        </DrawerHeader>

        <DrawerBody>
          {isEmpty ? (
            <EmptyState>
              <EmptyText>Seu carrinho está vazio</EmptyText>
              <ExploreButton as={Link} to="/produtos" onClick={closeMiniCart}>
                Explorar produtos
              </ExploreButton>
            </EmptyState>
          ) : (
            <ItemList>
              {items.map((item) => (
                <MiniCartItem
                  key={`${item.productId}-${item.size}`}
                  item={item}
                  onRemove={removeItem}
                />
              ))}
            </ItemList>
          )}
        </DrawerBody>

        {!isEmpty && (
          <DrawerFooter>
            <SubtotalRow>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </SubtotalRow>
            <CtaGroup>
              <PrimaryButton as={Link} to="/carrinho" onClick={closeMiniCart}>
                Ir para o carrinho
              </PrimaryButton>
              <SecondaryButton as={Link} to="/checkout" onClick={closeMiniCart}>
                Finalizar compra
              </SecondaryButton>
            </CtaGroup>
          </DrawerFooter>
        )}
      </Drawer>
    </>
  )
}
