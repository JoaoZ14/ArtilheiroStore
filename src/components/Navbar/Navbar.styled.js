import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #eee;
`

export const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  min-height: 85px;
  height: auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const Logo = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

export const LogoImage = styled.img`
  height: 85px;
  width: auto;
  object-fit: contain;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
`

export const NavMenu = styled.ul`
  display: none;
  align-items: center;
  gap: 0.25rem;

  @media (min-width: 992px) {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 0.5rem;
  }
`

export const NavItem = styled.li`
  a {
    display: block;
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #333;
    border-radius: 4px;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: #c41e3a;
      background: rgba(196, 30, 58, 0.06);
    }

    &.active {
      color: #c41e3a;
      font-weight: 600;
    }
  }
`

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #333;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #c41e3a;
    background: rgba(196, 30, 58, 0.06);
  }
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #333;
  background: transparent;
  border-radius: 8px;

  @media (min-width: 992px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-top: 1px solid #eee;
  padding: 1rem;
  max-height: ${({ $open }) => ($open ? '400px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;

  a {
    padding: 0.75rem 1rem;
    font-weight: 500;
    color: #333;
    border-radius: 4px;

    &:hover {
      background: rgba(196, 30, 58, 0.06);
      color: #c41e3a;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`
