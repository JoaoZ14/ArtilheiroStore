import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1100;
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  -webkit-tap-highlight-color: transparent;
`

export const Drawer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1101;
  width: 100%;
  max-width: 420px;
  background: #fff;
  box-shadow: -4px 0 24px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 767px) {
    max-width: none;
    border-radius: 16px 16px 0 0;
    top: auto;
    max-height: 92vh;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(100%)')};
  }
`

export const DrawerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
`

export const DrawerTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #6b7280;
  background: transparent;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #1a1a1a;
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const DrawerBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  min-height: 0;
`

export const EmptyState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem 1rem;
`

export const EmptyText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
`

export const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DrawerFooter = styled.footer`
  padding: 1rem 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;
`

export const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`

export const CtaGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const PrimaryButton = styled.button`
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

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const SecondaryButton = styled.button`
  width: 100%;
  height: 48px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #c41e3a;
  background: transparent;
  border: 2px solid #c41e3a;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(196, 30, 58, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const ExploreButton = styled.button`
  width: 100%;
  max-width: 280px;
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
