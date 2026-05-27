import styled from 'styled-components'

export const CtaButton = styled.button`
  width: 100%;
  min-height: 48px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${({ $disabled }) => ($disabled ? '#9ca3af' : 'var(--color-primary)')};
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`
