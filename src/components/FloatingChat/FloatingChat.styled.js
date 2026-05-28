import styled from 'styled-components'

export const FloatingRoot = styled.div`
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  @media (max-width: 480px) {
    right: 1rem;
    bottom: 1rem;
    left: 1rem;
    align-items: stretch;
  }
`

export const ChatPanel = styled.div`
  width: 380px;
  max-width: calc(100vw - 2rem);
  height: min(520px, calc(100vh - 7rem));
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.08),
    0 12px 28px -4px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: chatSlideIn 0.2s ease-out;

  @keyframes chatSlideIn {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: none;
    height: min(70vh, 520px);
  }
`

export const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  background: #1a1a1a;
  color: #fff;
  flex-shrink: 0;
`

export const PanelTitleGroup = styled.div`
  min-width: 0;
`

export const PanelTitle = styled.h2`
  font-size: 0.9375rem;
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
`

export const PanelSubtitle = styled.p`
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0.125rem 0 0;
  line-height: 1.3;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`

export const Fab = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: #1a1a1a;
  color: #fff;
  cursor: pointer;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.15),
    0 8px 20px rgba(0, 0, 0, 0.12);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  align-self: flex-end;

  &:hover {
    transform: scale(1.04);
    box-shadow:
      0 4px 12px rgba(0, 0, 0, 0.18),
      0 10px 24px rgba(0, 0, 0, 0.14);
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 3px;
  }

  @media (max-width: 480px) {
    align-self: flex-end;
  }
`
