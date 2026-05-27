import styled from 'styled-components'

export const StyledSection = styled.section`
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`

export const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    text-align: left;
  }
`

export const SectionHint = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  color: var(--color-text-muted);
  margin: -1rem 0 1.25rem;
  text-align: center;

  @media (min-width: 768px) {
    margin: -1.5rem 0 1.5rem;
    text-align: left;
  }
`

export const HighlightRail = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  scrollbar-width: thin;

  & > * {
    flex: 0 0 min(280px, 78vw);
    scroll-snap-align: start;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    overflow: visible;
    padding-bottom: 0;

    & > * {
      flex: initial;
    }
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
`
