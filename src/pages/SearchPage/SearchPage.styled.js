import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledSearch = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1.5rem 1.5rem 3rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2rem 2rem 4rem;
  }
`

export const SearchTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`

export const EmptyWrap = styled.div`
  text-align: center;
  padding: 3rem 1rem;
  max-width: 400px;
  margin: 0 auto;
`

export const EmptyTitle = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

export const EmptyText = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  height: 48px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: #c41e3a;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: #a01930;
  }
`
