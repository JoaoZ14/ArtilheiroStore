import styled from 'styled-components'

export const SummaryCard = styled.aside`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.25rem;
  height: fit-content;

  @media (min-width: 768px) {
    position: sticky;
    top: calc(var(--navbar-height, 100px) + 1rem);
  }
`

export const SummaryTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`

export const SummaryTotalRow = styled(SummaryRow)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`

export const SummaryFreightNote = styled.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 1rem;
`

export const CheckoutButton = styled.button`
  width: 100%;
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
