import styled from 'styled-components'

export const StyledSection = styled.section`
  padding: 2rem 0 2.5rem;

  @media (min-width: 768px) {
    padding: 3rem 0 4rem;
  }
`

export const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 0.75rem;

  @media (min-width: 520px) {
    padding: 0 1.25rem;
  }

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  @media (min-width: 520px) {
    gap: 0.65rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.85rem;
  }

  @media (min-width: 1200px) {
    gap: 1rem;
  }
`
