import { StepperWrap, StepperButton, StepperValue } from './QuantityControl.styled'

export default function QuantityControl({
  value,
  onChange,
  min = 1,
  max = 99,
  'aria-label': ariaLabel = 'Quantidade',
}) {
  const canDecrease = value > min
  const canIncrease = value < max

  return (
    <StepperWrap role="group" aria-label={ariaLabel}>
      <StepperButton
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={!canDecrease}
        aria-label="Diminuir quantidade"
      >
        −
      </StepperButton>
      <StepperValue aria-live="polite">{value}</StepperValue>
      <StepperButton
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={!canIncrease}
        aria-label="Aumentar quantidade"
      >
        +
      </StepperButton>
    </StepperWrap>
  )
}
