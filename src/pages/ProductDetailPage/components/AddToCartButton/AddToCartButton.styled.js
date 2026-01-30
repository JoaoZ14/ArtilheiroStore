import styled from 'styled-components'

export const CtaButton = styled.button`
  width: 100%;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: ${({ $disabled }) => ($disabled ? '#9ca3af' : '#c41e3a')};
  border: none;
  border-radius: 8px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover:not(:disabled) {
    background: #a01930;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`
