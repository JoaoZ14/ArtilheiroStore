import styled from 'styled-components'

export const AdminWrap = styled.div`
  display: flex;
  min-height: 100vh;
  background: #F5EFE8;
  font-family: var(--font-body);
`

export const Sidebar = styled.aside`
  width: 240px;
  min-height: 100vh;
  background: #2C2420;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  transition: transform 0.25s ease;

  @media (max-width: 768px) {
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translateX(-100%)')};
    box-shadow: ${({ $open }) => ($open ? '4px 0 24px rgba(0,0,0,0.4)' : 'none')};
  }
`

export const SidebarLogo = styled.div`
  padding: 24px 20px 20px;
  border-bottom: 1px solid rgba(255,255,255,0.08);

  span {
    font-family: var(--font-display);
    color: #E8D5B7;
    font-size: 1.1rem;
    display: block;
  }

  small {
    color: rgba(255,255,255,0.35);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
`

export const SidebarNav = styled.nav`
  flex: 1;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const SidebarLink = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  background: ${({ $active }) => ($active ? 'rgba(155,115,73,0.25)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#E8D5B7' : 'rgba(255,255,255,0.55)')};
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? '600' : '400')};
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background 0.15s, color 0.15s;

  svg {
    flex-shrink: 0;
    color: ${({ $active }) => ($active ? '#9B7349' : 'rgba(255,255,255,0.4)')};
  }

  &:hover {
    background: rgba(255,255,255,0.07);
    color: #E8D5B7;
  }
`

export const SidebarDivider = styled.div`
  height: 1px;
  background: rgba(255,255,255,0.08);
  margin: 8px 12px;
`

export const SidebarFooter = styled.div`
  padding: 16px 12px;
  border-top: 1px solid rgba(255,255,255,0.08);
`

export const MainContent = styled.main`
  margin-left: 240px;
  flex: 1;
  min-height: 100vh;
  padding: 32px;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px 16px;
  }
`

export const MobileBar = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background: #2C2420;
  align-items: center;
  padding: 0 16px;
  gap: 12px;
  z-index: 99;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);

  span {
    font-family: var(--font-display);
    color: #E8D5B7;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    display: flex;
    & ~ main {
      padding-top: calc(56px + 20px);
    }
  }
`

export const MobileHamburger = styled.button`
  background: none;
  border: none;
  color: #E8D5B7;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
`

export const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'block' : 'none')};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
  }
`

export const PageHeader = styled.div`
  margin-bottom: 28px;

  h1 {
    font-family: var(--font-display);
    font-size: 1.6rem;
    color: #3D3229;
    font-weight: 400;
  }

  p {
    color: #7A6B5D;
    font-size: 0.875rem;
    margin-top: 4px;
  }
`
