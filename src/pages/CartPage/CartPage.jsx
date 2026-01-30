import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import CartItem from './components/CartItem/CartItem'
import CartSummary from './components/CartSummary/CartSummary'
import EmptyCart from './components/EmptyCart/EmptyCart'
import { useCart } from '../../context/CartContext'
import {
  StyledCartPage,
  CartContainer,
  CartHeader,
  CartTitle,
  ContinueLink,
  CartLayout,
  CartListSection,
  SummaryWrap,
} from './CartPage.styled'

export default function CartPage() {
  const navigate = useNavigate()
  const { items, itemCount, subtotal, updateQuantity, removeItem } = useCart()

  const handleCheckout = () => {
    if (itemCount === 0) return
    navigate('/checkout')
  }

  return (
    <StyledCartPage>
      <Navbar />
      <CartContainer>
        <CartHeader>
          <CartTitle>Meu Carrinho</CartTitle>
          <ContinueLink as={Link} to="/produtos">
            Continuar comprando
          </ContinueLink>
        </CartHeader>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartLayout>
            <CartListSection>
              {items.map((item) => (
                <CartItem
                  key={`${item.productId}-${item.size}`}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </CartListSection>

            <SummaryWrap>
              <CartSummary
                subtotal={subtotal}
                itemCount={itemCount}
                onCheckout={handleCheckout}
              />
            </SummaryWrap>
          </CartLayout>
        )}
      </CartContainer>
      <Footer />
    </StyledCartPage>
  )
}
