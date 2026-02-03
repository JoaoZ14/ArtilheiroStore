import styled from 'styled-components'

export const StyledEntregas = styled.main`
  min-height: 100vh;
  background: #fff;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`

export const EntregasContainer = styled.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1rem 4rem;
  width: 100%;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`

export const PageHeader = styled.header`
  margin-bottom: 2rem;
`

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
`

export const PageSubtitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
  font-weight: 400;
`

export const IntroText = styled.p`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;
  margin: 0 0 2rem;
`

export const Section = styled.section`
  margin-bottom: 2rem;
`

export const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`

export const SectionContent = styled.div`
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 0.75rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
