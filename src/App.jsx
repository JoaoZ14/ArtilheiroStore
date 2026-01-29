import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Rotas futuras: /produtos, /produto/:id, /carrinho */}
      </Routes>
    </BrowserRouter>
  )
}
