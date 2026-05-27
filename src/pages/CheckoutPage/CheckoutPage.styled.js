import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const StyledCheckout = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`

export const CheckoutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

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
  padding-bottom: calc(1.5rem + var(--safe-area-bottom, 0px));

  @media (min-width: 768px) {
    padding: 2rem;
    padding-bottom: 2rem;
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

export const InfoText = styled.p`
  font-size: 0.9375rem;
  color: #4b5563;
  margin: 0 0 0.75rem;
  line-height: 1.5;
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
  min-height: 48px;
  height: 48px;
  padding: 0 1rem;
  font-size: 16px;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-tap-highlight-color: transparent;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(166, 124, 82, 0.15);
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

export const SubmitButton = styled.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

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
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`

export const ButtonSpinner = styled.span`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${spin} 0.75s linear infinite;
  flex-shrink: 0;
`

export const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  min-height: 44px;
  border: 2px solid ${({ $selected }) => ($selected ? 'var(--color-primary)' : '#e5e7eb')};
  border-radius: 8px;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? 'rgba(166, 124, 82, 0.04)' : '#fff')};
  transition: border-color 0.2s, background 0.2s;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    border-color: ${({ $selected }) => ($selected ? 'var(--color-primary)' : '#d1d5db')};
  }
`

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  accent-color: var(--color-primary);
`

export const SummaryCol = styled.div`
  @media (max-width: 767px) {
    order: -1;
  }
`

export const StepIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`

export const StepDots = styled.span`
  display: flex;
  gap: 0.5rem;
`

export const StepDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? 'var(--color-primary)' : '#e5e7eb')};
  transition: background 0.2s;
`

export const StepLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
`

export const PaymentMethodGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`

export const QrCodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin: 1rem 0;
`

export const QrCodeImage = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  object-fit: contain;
  background: #fff;
  border-radius: 4px;
`

export const QrCodeLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
`

export const CopyArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CopyInput = styled.input`
  width: 100%;
  min-height: 44px;
  padding: 0.5rem 1rem;
  font-size: 0.8125rem;
  font-family: monospace;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  -webkit-tap-highlight-color: transparent;
`

export const CopyButton = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-primary);
  background: #fff;
  border: 1px solid var(--color-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }
`

export const BoletoLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #a01930;
  }
`
