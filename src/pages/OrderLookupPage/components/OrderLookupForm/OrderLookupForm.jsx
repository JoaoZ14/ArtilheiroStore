import {
  FormCard,
  FormEl,
  Field,
  Label,
  Input,
  SubmitButton,
  ButtonSpinner,
} from './OrderLookupForm.styled'

/** Formata CPF para exibição: 000.000.000-00 (máx. 11 dígitos). */
function formatCpfDisplay(value) {
  const digits = (value ?? '').replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
}

export default function OrderLookupForm({
  mode = 'email',
  email,
  orderCode,
  cpf = '',
  loading,
  onChange,
  onSubmit,
}) {
  const isEmailValid =
    (email?.trim() || '').length > 0 && (orderCode?.trim() || '').length > 0
  const cpfDigits = (cpf ?? '').replace(/\D/g, '')
  const isCpfValid = cpfDigits.length >= 11
  const isValid = mode === 'cpf' ? isCpfValid : isEmailValid

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid || loading) return
    onSubmit()
  }

  const handleCpfChange = (e) => {
    const digits = (e.target.value ?? '').replace(/\D/g, '').slice(0, 11)
    onChange({ cpf: formatCpfDisplay(digits) })
  }

  const handleCpfKeyDown = (e) => {
    if (e.key !== 'Backspace') return
    const digits = (cpf ?? '').replace(/\D/g, '')
    if (digits.length === 0) return
    e.preventDefault()
    onChange({ cpf: formatCpfDisplay(digits.slice(0, -1)) })
  }

  if (mode === 'cpf') {
    return (
      <FormCard>
        <FormEl onSubmit={handleSubmit} noValidate>
          <Field>
            <Label htmlFor="order-lookup-cpf">CPF</Label>
            <Input
              id="order-lookup-cpf"
              type="text"
              inputMode="numeric"
              placeholder="000.000.000-00"
              value={cpf}
              onChange={handleCpfChange}
              onKeyDown={handleCpfKeyDown}
              disabled={loading}
              autoComplete="off"
              required
              maxLength={14}
              aria-label="CPF para consultar pedidos"
            />
          </Field>
          <SubmitButton type="submit" disabled={!isValid || loading} aria-busy={loading}>
            {loading && <ButtonSpinner aria-hidden />}
            {loading ? 'Buscando…' : 'Buscar pedidos'}
          </SubmitButton>
        </FormEl>
      </FormCard>
    )
  }

  return (
    <FormCard>
      <FormEl onSubmit={handleSubmit} noValidate>
        <Field>
          <Label htmlFor="order-lookup-email">E-mail</Label>
          <Input
            id="order-lookup-email"
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => onChange({ email: e.target.value, orderCode })}
            disabled={loading}
            autoComplete="email"
            required
          />
        </Field>
        <Field>
          <Label htmlFor="order-lookup-code">Código do pedido</Label>
          <Input
            id="order-lookup-code"
            type="text"
            placeholder="Ex: ART-10293"
            value={orderCode}
            onChange={(e) => onChange({ email, orderCode: e.target.value })}
            disabled={loading}
            autoComplete="off"
            required
          />
        </Field>
        <SubmitButton type="submit" disabled={!isValid || loading} aria-busy={loading}>
          {loading && <ButtonSpinner aria-hidden />}
          {loading ? 'Buscando…' : 'Buscar pedido'}
        </SubmitButton>
      </FormEl>
    </FormCard>
  )
}
