import { Wrap } from './HelpEmptyState.styled'

export default function HelpEmptyState() {
  return (
    <Wrap role="status" aria-live="polite">
      Nenhum resultado encontrado para sua busca.
    </Wrap>
  )
}
