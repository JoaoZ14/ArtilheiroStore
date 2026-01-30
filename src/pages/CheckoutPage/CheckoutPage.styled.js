import styled from 'styled-components'

export const StyledCheckout = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`

export const CheckoutLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 360px;
    gap: 2rem;
  }
`

export const StepsCol = styled.div`
  min-width: 0;
`

export const StepCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

export const StepTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 1.25rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 1rem;
  font-size: 1rem;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #c41e3a;
    box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.15);
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 52px;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const SuccessWrap = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`

export const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`

export const SuccessText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 2rem;
`

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #a01930;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid ${({ $selected }) => ($selected ? '#c41e3a' : '#e5e7eb')};
  border-radius: 8px;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? 'rgba(196, 30, 58, 0.04)' : '#fff')};
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: ${({ $selected }) => ($selected ? '#c41e3a' : '#d1d5db')};
  }
`

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #c41e3a;
`

export const SummaryCol = styled.div`
  @media (max-width: 767px) {
    order: -1;
  }
`

export const StepIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

export const StepDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? '#c41e3a' : '#e5e7eb')};
  transition: background 0.2s;
`
