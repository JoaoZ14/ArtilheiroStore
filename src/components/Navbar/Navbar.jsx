import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/mockData'
import {
  StyledNavbar,
  NavContainer,
  Logo,
  LogoImage,
  NavMenu,
  NavItem,
  NavActions,
  IconButton,
  MobileMenuButton,
  MobileMenu,
} from './Navbar.styled'

const SearchIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
)

const CartIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
)

const ProfileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
)

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

const SCROLL_THRESHOLD = 20

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <StyledNavbar $scrolled={isScrolled}>
      <NavContainer>
        <Logo as={NavLink} to="/">
          <LogoImage src="/logos/sem%20fundo/4.png" alt="Artilheiro Store" />
        </Logo>

        <NavMenu>
          {navLinks.map((link) => (
            <NavItem key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>

        <NavActions>
          <IconButton href="/busca" aria-label="Buscar" $scrolled={isScrolled}>
            <SearchIcon />
          </IconButton>
          <IconButton href="/carrinho" aria-label="Carrinho" $scrolled={isScrolled}>
            <CartIcon />
          </IconButton>
          <IconButton href="/perfil" aria-label="Perfil" $scrolled={isScrolled}>
            <ProfileIcon />
          </IconButton>
        </NavActions>

        <MobileMenuButton
          $scrolled={isScrolled}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </MobileMenuButton>
      </NavContainer>

      <MobileMenu $open={mobileOpen}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </MobileMenu>
    </StyledNavbar>
  )
}
