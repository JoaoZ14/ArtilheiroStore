import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

export const StyledTimesPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
  background: var(--color-bg);
`

export const TimesHeader = styled.header`
  position: relative;
  width: 100%;
  min-height: 260px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 340px;
  }
`

export const TimesHeaderImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`

export const TimesHeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(74, 63, 53, 0.82) 0%,
    rgba(74, 63, 53, 0.45) 45%,
    rgba(74, 63, 53, 0.15) 100%
  );
`

export const TimesHeaderContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 260px;
  padding: 2.5rem 1.5rem;
  max-width: 640px;

  @media (min-width: 768px) {
    min-height: 340px;
    padding: 3.5rem 2rem;
    margin-left: max(1.5rem, calc((100vw - 1400px) / 2 + 2rem));
  }
`

export const TimesHeaderEyebrow = styled.span`
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`

export const TimesHeaderTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.75rem;
  line-height: 1.15;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`

export const TimesHeaderSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 1.25rem;
  max-width: 420px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

export const HeaderCta = styled(Link)`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  padding: 0.7rem 1.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`

export const TimesMain = styled.main`
  flex: 1;
  padding: 2.5rem 0 4rem;

  @media (min-width: 768px) {
    padding: 3rem 0 5rem;
  }
`

export const StylesSection = styled.section`
  margin-bottom: 3rem;
`

export const StylesSectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-text);
  margin: 0 0 0.35rem;
`

export const StylesSectionHint = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin: 0 0 1.25rem;
  line-height: 1.5;
`

export const StylesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
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

export const LeagueSection = styled.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 3.5rem;
  }
`

export const CollectionFeatured = styled(Link)`
  display: block;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 16px rgba(61, 50, 41, 0.08);
  text-decoration: none;
  color: inherit;
  margin-bottom: 1.25rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(61, 50, 41, 0.12);
  }

  &:hover img {
    transform: scale(1.04);
  }
`

export const CollectionFeaturedImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s ease;

  @media (min-width: 768px) {
    aspect-ratio: 21 / 9;
  }
`

export const CollectionFeaturedOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(74, 63, 53, 0.75) 0%,
    rgba(74, 63, 53, 0.2) 45%,
    transparent 100%
  );
`

export const CollectionFeaturedContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 1.25rem 1.5rem;

  @media (min-width: 768px) {
    padding: 1.75rem 2rem;
  }
`

export const LeagueTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  margin: 0 0 0.35rem;
  line-height: 1.15;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const CollectionDescription = styled.p`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 0.5rem;
  max-width: 480px;
`

export const FeaturedCta = styled.span`
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-accent);
`

export const LineList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const LineLink = styled(Link)`
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }
`

export const StatusMessage = styled.p`
  text-align: center;
  padding: 3rem 1rem;
  font-family: var(--font-body);
  color: var(--color-text-muted);
`

export const SkeletonGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const SkeletonCard = styled.div`
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
`

export const SkeletonImage = styled.div`
  aspect-ratio: 4 / 3;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    #ede4d8 50%,
    var(--color-bg) 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`

export const SkeletonText = styled.div`
  height: 14px;
  margin: 1rem;
  border-radius: 6px;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    #ede4d8 50%,
    var(--color-bg) 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.4s ease-in-out infinite;

  &:last-child {
    width: 60%;
    margin-top: 0.5rem;
  }
`
