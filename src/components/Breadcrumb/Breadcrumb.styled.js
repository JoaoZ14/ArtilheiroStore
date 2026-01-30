import styled from 'styled-components'

export const BreadcrumbNav = styled.nav`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
`

export const BreadcrumbList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
`

export const BreadcrumbItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  &:not(:last-child)::after {
    content: '›';
    color: #9ca3af;
    font-weight: 400;
  }
`

export const BreadcrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #1a1a1a;
  }
`

export const BreadcrumbCurrent = styled.span`
  color: #1a1a1a;
  font-weight: 500;
`
