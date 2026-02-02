import {
  FormCard,
  FormEl,
  Field,
  Label,
  Input,
  SubmitButton,
  ButtonSpinner,
} from './OrderLookupForm.styled'

export default function OrderLookupForm({ email, orderCode, loading, onChange, onSubmit }) {
  const isValid = (email?.trim() || '').length > 0 && (orderCode?.trim() || '').length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isValid || loading) return
    onSubmit()
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
