import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { RiDashboardLine, RiShoppingBagLine, RiBoxingLine, RiLogoutBoxLine, RiMenuLine, RiPriceTagLine, RiBookmarkLine, RiChat3Line } from 'react-icons/ri'
import { useAdmin } from '../../context/AdminContext'
import {
  AdminWrap, Sidebar, SidebarLogo, SidebarNav, SidebarLink,
  SidebarDivider, SidebarFooter, MainContent, MobileBar,
  MobileHamburger, Overlay, PageHeader,
} from './AdminLayout.styled'

const NAV_ITEMS = [
  { path: '/admin/dashboard', label: 'Dashboard', Icon: RiDashboardLine },
  { path: '/admin/produtos', label: 'Produtos', Icon: RiBoxingLine },
  { path: '/admin/pedidos', label: 'Pedidos', Icon: RiShoppingBagLine },
  { path: '/admin/categorias', label: 'Categorias', Icon: RiPriceTagLine },
  { path: '/admin/colecoes', label: 'Coleções', Icon: RiBookmarkLine },
  { path: '/admin/feedbacks', label: 'Feedbacks', Icon: RiChat3Line },
]

export default function AdminLayout({ children, title, subtitle }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { logout } = useAdmin()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function handleNav(path) {
    navigate(path)
    setSidebarOpen(false)
  }

  function handleLogout() {
    logout()
    navigate('/admin/login')
  }

  return (
    <AdminWrap>
      <MobileBar>
        <MobileHamburger onClick={() => setSidebarOpen(true)} aria-label="Abrir menu">
          <RiMenuLine size={22} />
        </MobileHamburger>
        <span>Admin</span>
      </MobileBar>

      <Overlay $open={sidebarOpen} onClick={() => setSidebarOpen(false)} />

      <Sidebar $open={sidebarOpen}>
        <SidebarLogo>
          <span>Glamour Country</span>
          <small>Painel Administrativo</small>
        </SidebarLogo>

        <SidebarNav>
          {NAV_ITEMS.map(({ path, label, Icon }) => (
            <SidebarLink
              key={path}
              $active={pathname.startsWith(path)}
              onClick={() => handleNav(path)}
            >
              <Icon size={18} />
              {label}
            </SidebarLink>
          ))}
        </SidebarNav>

        <SidebarDivider />

        <SidebarFooter>
          <SidebarLink onClick={handleLogout}>
            <RiLogoutBoxLine size={18} />
            Sair
          </SidebarLink>
        </SidebarFooter>
      </Sidebar>

      <MainContent>
        {title && (
          <PageHeader>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
          </PageHeader>
        )}
        {children}
      </MainContent>
    </AdminWrap>
  )
}
