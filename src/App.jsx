import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from 'react-router-dom'

function TimesRedirect() {
  return <Navigate to="/chapeus" replace />
}

function AgroRedirect() {
  return <Navigate to="/country" replace />
}
import { CartProvider } from './context/CartContext'
import { ToastProvider } from './context/ToastContext'
import Toast from './components/Toast/Toast'
import LandingPage from './pages/LandingPage/LandingPage'
import ProductListingPage from './pages/ProductListingPage/ProductListingPage'
import LancamentosPage from './pages/LancamentosPage/LancamentosPage'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage'
import TimesPage from './pages/TimesPage/TimesPage'
import CartPage from './pages/CartPage/CartPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import CheckoutSuccessPage from './pages/CheckoutSuccessPage/CheckoutSuccessPage'
import OrderLookupPage from './pages/OrderLookupPage/OrderLookupPage'
import StaticPage from './pages/StaticPage/StaticPage'
import HelpPage from './pages/HelpPage/HelpPage'
import ContactPage from './pages/ContactPage/ContactPage'
import PaymentPage from './pages/PaymentPage/PaymentPage'
import EntregasPage from './pages/EntregasPage/EntregasPage'
import AboutPage from './pages/AboutPage/AboutPage'
import { staticPages } from './pages/StaticPage/content'

function SearchRedirect() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')
  const to = q ? `/produtos?q=${encodeURIComponent(q)}` : '/produtos'
  return <Navigate to={to} replace />
}

export default function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <CartProvider>
          <Toast />
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chapeus" element={<TimesPage />} />
          <Route path="/times" element={<TimesRedirect />} />
          <Route path="/country" element={<ProductListingPage />} />
          <Route path="/agro" element={<AgroRedirect />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produto/:id" element={<ProductDetailPage />} />
          <Route path="/carrinho" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/sucesso" element={<CheckoutSuccessPage />} />
          <Route path="/pedido/consultar/:id" element={<OrderLookupPage />} />
          <Route path="/pedido/consultar" element={<OrderLookupPage />} />
          <Route path="/busca" element={<SearchRedirect />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/ajuda" element={<HelpPage />} />
          <Route path="/politica-de-privacidade" element={<StaticPage {...staticPages['politica-de-privacidade']} />} />
          <Route path="/termos" element={<StaticPage {...staticPages.termos} />} />
          <Route path="/lojas" element={<StaticPage {...staticPages.lojas} />} />
          <Route path="/trabalhe-conosco" element={<StaticPage {...staticPages['trabalhe-conosco']} />} />
          <Route path="/troca-devolucao" element={<StaticPage {...staticPages['troca-devolucao']} />} />
          <Route path="/entregas" element={<EntregasPage />} />
          <Route path="/pagamento" element={<PaymentPage />} />
          <Route path="/pedidos" element={<StaticPage {...staticPages.pedidos} />} />
          <Route path="/favoritos" element={<StaticPage {...staticPages.favoritos} />} />
          <Route path="/cadastro" element={<StaticPage {...staticPages.cadastro} />} />
          <Route path="/login" element={<StaticPage {...staticPages.login} />} />
          <Route path="/categoria/:slug" element={<ProductListingPage />} />
          <Route path="/brasileirao" element={<ProductListingPage />} />
          <Route path="/europeus" element={<ProductListingPage />} />
          <Route path="/lancamentos" element={<LancamentosPage />} />
          <Route path="/promocoes" element={<ProductListingPage />} />
        </Routes>
        </CartProvider>
      </ToastProvider>
    </BrowserRouter>
  )
}
