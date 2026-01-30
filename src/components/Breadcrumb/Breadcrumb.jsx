import { Link } from 'react-router-dom'
import {
  BreadcrumbNav,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbCurrent,
} from './Breadcrumb.styled'

const DEFAULT_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Camisas', path: '/produtos' },
]

export default function Breadcrumb({ items = DEFAULT_ITEMS, current }) {
  return (
    <BreadcrumbNav aria-label="Breadcrumb">
      <BreadcrumbList>
        {items.map((item) => (
          <BreadcrumbItem key={item.path || item.label}>
            <BreadcrumbLink as={Link} to={item.path}>
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
        {current && (
          <BreadcrumbItem>
            <BreadcrumbCurrent>{current}</BreadcrumbCurrent>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </BreadcrumbNav>
  )
}
