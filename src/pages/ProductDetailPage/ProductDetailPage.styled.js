import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledPDP = styled.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
`

export const PDPContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`

export const PDPGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr;
  }
`

export const GalleryCol = styled.div``

export const InfoCol = styled.div`
  min-width: 0;
`

export const RelatedSection = styled.section`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
`

export const RelatedTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.25rem;
`

export const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
  }
`

export const NotFoundWrap = styled.div`
  text-align: center;
  padding: 4rem 1rem;
`

export const NotFoundTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

export const NotFoundText = styled.p`
  color: #6b7280;
  margin-bottom: 1rem;
`

export const NotFoundLink = styled(Link)`
  color: #c41e3a;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
