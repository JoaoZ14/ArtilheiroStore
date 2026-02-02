import styled from 'styled-components'

export const StyledStatic = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`

export const StaticContainer = styled.div`
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  width: 100%;
`

export const StaticTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const StaticContent = styled.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`
