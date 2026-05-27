import { useState, useEffect } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import { navLinks } from '../../data/mockData'
import { useCart } from '../../context/CartContext'
import LogoMark from '../LogoMark/LogoMark'
import { IconSearch, IconBag, IconUser, IconMenu, IconClose } from '../icons/westernIcons'
import {
  StyledNavbar,
  NavContainer,
  Logo,
  NavMenu,
  NavItem,
  NavSearchWrap,
  SearchForm,
  SearchInput,
  SearchSubmit,
  MobileSearchWrap,
  NavActions,
  IconButton,
  CartButtonWrap,
  CartBadge,
  MobileMenuButton,
  MobileMenu,
} from './Navbar.styled'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { itemCount } = useCart()

  useEffect(() => {
    const q = searchParams.get('q')
    if (q != null) setSearchQuery(q)
  }, [searchParams])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const term = searchQuery.trim()
    if (term) {
      navigate(`/produtos?q=${encodeURIComponent(term)}`)
      setMobileOpen(false)
    }
  }

  const searchPlaceholder = 'Buscar chapéus, acessórios ou coleções'

  return (
    <StyledNavbar>
      <NavContainer>
        <Logo as={NavLink} to="/">
          <LogoMark />
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

        <NavSearchWrap>
          <SearchForm onSubmit={handleSearchSubmit} role="search">
            <SearchInput
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={searchPlaceholder}
            />
            <SearchSubmit type="submit" aria-label="Buscar">
              <IconSearch size={20} aria-hidden />
            </SearchSubmit>
          </SearchForm>
        </NavSearchWrap>

        <NavActions>
          <CartButtonWrap>
            <IconButton
              as={NavLink}
              to="/carrinho"
              aria-label={`Carrinho com ${itemCount} itens`}
              onClick={() => setMobileOpen(false)}
            >
              <IconBag size={22} aria-hidden />
            </IconButton>
            {itemCount > 0 && (
              <CartBadge aria-hidden="true">{itemCount > 99 ? '99+' : itemCount}</CartBadge>
            )}
          </CartButtonWrap>
          <IconButton
            as={NavLink}
            to="/pedido/consultar"
            aria-label="Meus pedidos"
            onClick={() => setMobileOpen(false)}
          >
            <IconUser size={22} aria-hidden />
          </IconButton>
        </NavActions>

        <MobileMenuButton
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <IconClose size={24} aria-hidden /> : <IconMenu size={24} aria-hidden />}
        </MobileMenuButton>
      </NavContainer>

      <MobileMenu $open={mobileOpen}>
        <MobileSearchWrap>
          <SearchForm onSubmit={handleSearchSubmit} role="search">
            <SearchInput
              type="search"
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={searchPlaceholder}
            />
            <SearchSubmit type="submit" aria-label="Buscar">
              <IconSearch size={20} aria-hidden />
            </SearchSubmit>
          </SearchForm>
        </MobileSearchWrap>
        {navLinks.map((link) => (
          <NavLink key={link.path} to={link.path} onClick={() => setMobileOpen(false)}>
            {link.label}
          </NavLink>
        ))}
      </MobileMenu>
    </StyledNavbar>
  )
}
