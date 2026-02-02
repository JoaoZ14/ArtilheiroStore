import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

export const ToastContainer = styled.div`
  position: fixed;
  top: 5rem;
  right: 1rem;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 400px;
  width: calc(100% - 2rem);
  pointer-events: none;

  @media (max-width: 768px) {
    top: 4.5rem;
    right: 0.5rem;
    width: calc(100% - 1rem);
  }
`

export const ToastItem = styled.div`
  background: ${props => {
    if (props.$type === 'success') return '#10b981'
    if (props.$type === 'info') return '#3b82f6'
    return '#ef4444' // error
  }};
  color: white;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  animation: ${slideIn} 0.3s ease-out;
  pointer-events: all;
  font-size: 0.9375rem;
  line-height: 1.5;

  &.removing {
    animation: ${slideOut} 0.3s ease-out forwards;
  }
`

export const ToastMessage = styled.div`
  flex: 1;
  font-weight: 500;
`

export const ToastClose = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  transition: opacity 0.2s;
  flex-shrink: 0;

  &:hover {
    opacity: 1;
  }
`
