import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAdmin } from '../../context/AdminContext'
import { LoginWrap, LoginCard, LoginTitle, LoginSub, Field, LoginBtn, LoginError } from './AdminLogin.styled'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAdmin()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const ok = login(password)
    setLoading(false)
    if (ok) {
      navigate('/admin/dashboard', { replace: true })
    } else {
      setError('Senha incorreta.')
      setPassword('')
    }
  }

  return (
    <LoginWrap>
      <LoginCard>
        <LoginTitle>Glamour Country</LoginTitle>
        <LoginSub>Acesso ao painel administrativo</LoginSub>

        <form onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              autoFocus
            />
          </Field>

          <LoginBtn type="submit" disabled={loading || !password}>
            {loading ? 'Entrando…' : 'Entrar'}
          </LoginBtn>

          {error && <LoginError>{error}</LoginError>}
        </form>
      </LoginCard>
    </LoginWrap>
  )
}
