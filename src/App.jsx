import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import MiniCart from './components/MiniCart/MiniCart'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import TimesPage from './pages/TimesPage/TimesPage'
import CartPage from './pages/CartPage/CartPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MiniCart />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/times" element={<TimesPage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produto/:id" element={<ProductDetailPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/categoria/:slug" element={<ProductListingPage />} />
          <Route path="/brasileirao" element={<ProductListingPage />} />
          <Route path="/europeus" element={<ProductListingPage />} />
          <Route path="/lancamentos" element={<ProductListingPage />} />
          <Route path="/promocoes" element={<ProductListingPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}
