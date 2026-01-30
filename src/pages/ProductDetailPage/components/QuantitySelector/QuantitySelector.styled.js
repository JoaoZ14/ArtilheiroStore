import styled from 'styled-components'

export const QuantitySection = styled.div`
  margin-bottom: 1.25rem;
`

export const QuantityLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`

export const StepperWrap = styled.div`
  display: inline-flex;
  align-items: center;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
`

export const StepperButton = styled.button`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover:not(:disabled) {
    background: #f3f4f6;
    color: #1a1a1a;
  }

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: -2px;
  }
`

export const StepperValue = styled.span`
  min-width: 48px;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
`
