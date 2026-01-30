import styled from 'styled-components'

export const StyledTimesPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
`

export const TimesHeader = styled.header`
  position: relative;
  width: 100%;
  min-height: 220px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 280px;
  }
`

export const TimesHeaderImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TimesHeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`

export const TimesHeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 220px;
  padding: 2rem 1.5rem;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;

  @media (min-width: 768px) {
    min-height: 280px;
    align-items: flex-start;
    text-align: left;
    padding: 3rem 2rem;
  }
`

export const TimesHeaderTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

export const TimesHeaderSubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

export const TimesMain = styled.main`
  flex: 1;
  padding: 3rem 0 4rem;
`

export const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`

export const LeagueSection = styled.section`
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

export const LeagueTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgb(192, 192, 192);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
`

export const TeamsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  justify-items: start;

  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.6rem;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 0.85rem;
  }
`
