import {
  ErrorWrap,
  ErrorIcon,
  ErrorTitle,
  ErrorText,
  ErrorActions,
  RetryButton,
  BackLink,
} from './ErrorState.styled'

export default function ErrorState({
  title = 'Algo deu errado',
  message = 'Não foi possível carregar. Tente novamente.',
  onRetry,
  backToLabel = 'Voltar para a loja',
  backToPath = '/produtos',
}) {
  return (
    <ErrorWrap role="alert">
      <ErrorIcon aria-hidden>⚠</ErrorIcon>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorText>{message}</ErrorText>
      <ErrorActions>
        {onRetry && (
          <RetryButton type="button" onClick={onRetry}>
            Tentar novamente
          </RetryButton>
        )}
        <BackLink to={backToPath}>{backToLabel}</BackLink>
      </ErrorActions>
    </ErrorWrap>
  )
}
