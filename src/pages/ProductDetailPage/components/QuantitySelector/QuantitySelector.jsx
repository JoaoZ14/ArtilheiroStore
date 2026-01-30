import {
  QuantitySection,
  QuantityLabel,
  StepperWrap,
  StepperButton,
  StepperValue,
} from './QuantitySelector.styled'

const MIN = 1
const DEFAULT_MAX = 10

export default function QuantitySelector({
  value,
  onChange,
  min = MIN,
  max = DEFAULT_MAX,
}) {
  const canDecrease = value > min
  const canIncrease = value < max

  return (
    <QuantitySection>
      <QuantityLabel>Quantidade</QuantityLabel>
      <StepperWrap>
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
    </QuantitySection>
  )
}
