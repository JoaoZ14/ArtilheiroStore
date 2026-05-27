import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-surface);
  box-shadow: 0 1px 8px rgba(61, 50, 41, 0.06);
  border-bottom: 1px solid var(--color-border);
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  @media (max-width: 991px) {
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    border-bottom-color: var(--color-border);
  }
`

export const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 72px;
  height: auto;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
    min-height: 96px;
    gap: 2rem;
  }
`

export const Logo = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  min-width: 0;
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
    color: var(--color-text);
    border-radius: 6px;
    transition: color 0.2s, background 0.2s;

    &:hover {
      color: var(--color-primary);
      background: var(--color-primary-soft);
    }

    &.active {
      color: var(--color-primary);
      font-weight: 600;
    }
  }
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  max-width: 280px;
  width: 100%;
  min-height: 44px;
  height: 44px;
  background: var(--color-bg);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--color-border);

  &:focus-within {
    border-color: var(--color-primary);
    background: var(--color-surface);
  }

  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: 0.5rem;
    min-height: 44px;
    height: 44px;
  }

  @media (min-width: 992px) {
    height: 40px;
    min-height: 40px;
  }
`

export const SearchInput = styled.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 0.75rem;
  font-size: 0.9rem;
  color: var(--color-text);
  background: transparent;
  border: none;

  &::placeholder {
    color: var(--color-text-muted);
  }

  &:focus {
    outline: none;
  }
`

export const SearchSubmit = styled.button`
  flex-shrink: 0;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  & > svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: var(--color-primary);
  }

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CartButtonWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    min-width: 44px;
    min-height: 44px;
  }

  @media (min-width: 992px) {
    button {
      min-width: 40px;
      min-height: 40px;
    }
  }
`

export const CartBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: var(--color-text);
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  & > svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    color: var(--color-primary);
    background: var(--color-primary-soft);
  }

  @media (max-width: 991px) {
    color: var(--color-text);

    &:hover {
      color: var(--color-primary);
      background: var(--color-primary-soft);
    }
  }

  @media (min-width: 992px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`

export const NavSearchWrap = styled.div`
  display: none;
  flex: 1;
  min-width: 0;
  max-width: 280px;
  margin: 0 0.5rem;

  @media (min-width: 992px) {
    display: block;
  }
`

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;
  min-width: 44px;
  min-height: 44px;
  width: 44px;
  height: 44px;
  color: var(--color-text);
  background: transparent;
  border-radius: 8px;
  transition: color 0.2s;

  & > svg {
    width: 24px;
    height: 24px;
  }

  @media (max-width: 991px) {
    color: var(--color-text);
  }

  @media (min-width: 992px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-top: ${({ $open }) => ($open ? '1px solid var(--color-border)' : 'none')};
  padding: ${({ $open }) => ($open ? '1rem' : '0')};
  max-height: ${({ $open }) => ($open ? '85vh' : '0')};
  min-height: 0;
  overflow-x: hidden;
  overflow-y: ${({ $open }) => ($open ? 'auto' : 'hidden')};
  transition: max-height 0.3s ease, padding 0.3s ease, border 0.3s ease;

  a {
    display: flex;
    align-items: center;
    padding: 0.875rem 1rem;
    min-height: 44px;
    font-weight: 500;
    color: var(--color-text);
    border-radius: 6px;

    &:hover {
      background: var(--color-primary-soft);
      color: var(--color-primary);
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
`

export const MobileSearchWrap = styled.div`
  padding: 0 0 0.75rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 0.75rem;

  @media (min-width: 992px) {
    display: none;
  }
`
