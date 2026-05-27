import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const StyledLancamentosPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: var(--navbar-height, 100px);
  background: var(--color-bg);
`

export const PageHeader = styled.header`
  position: relative;
  width: 100%;
  min-height: 240px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 300px;
  }
`

export const HeaderImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const HeaderOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(74, 63, 53, 0.88) 0%,
    rgba(74, 63, 53, 0.55) 50%,
    rgba(155, 115, 73, 0.35) 100%
  );
`

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  padding: 2.5rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  animation: ${fadeUp} 0.6s ease-out;

  @media (min-width: 768px) {
    padding: 3.5rem 2rem;
  }
`

export const HeaderEyebrow = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`

export const HeaderTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`

export const HeaderSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.92);
  max-width: 480px;
  margin: 0;
`

export const PageMain = styled.main`
  flex: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem 5rem;
  }
`

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  animation: ${fadeUp} 0.5s ease-out 0.1s both;
`

export const FilterLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  margin-right: 0.25rem;
`

export const FilterChip = styled.button`
  padding: 0.45rem 1rem;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--color-text-muted);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;

  &.active {
    color: #fff;
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:hover:not(.active) {
    border-color: var(--color-primary);
    color: var(--color-primary);
  }
`

export const Spotlight = styled(Link)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;
  margin-bottom: 2.5rem;
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  background: var(--color-surface);
  box-shadow: 0 4px 24px rgba(61, 50, 41, 0.1);
  animation: ${fadeUp} 0.55s ease-out 0.15s both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(61, 50, 41, 0.14);
  }

  &:hover img {
    transform: scale(1.03);
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.1fr 1fr;
    min-height: 360px;
  }
`

export const SpotlightImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg);

  @media (min-width: 768px) {
    aspect-ratio: auto;
    min-height: 360px;
  }
`

export const SpotlightImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`

export const SpotlightBadge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.35rem 0.75rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  background: var(--color-primary);
  border-radius: 6px;
`

export const SpotlightBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`

export const SpotlightLabel = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`

export const SpotlightTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.85rem;
  }
`

export const SpotlightMeta = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
`

export const SpotlightPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1.25rem;
`

export const SpotlightCta = styled.span`
  display: inline-flex;
  align-self: flex-start;
  padding: 0.65rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s ease;

  ${Spotlight}:hover & {
    background: var(--color-primary-hover);
  }
`

export const Section = styled.section`
  margin-bottom: 3rem;
  animation: ${fadeUp} 0.5s ease-out both;

  &:last-child {
    margin-bottom: 0;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;
`

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text);
`

export const SectionCount = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  white-space: nowrap;
`

export const HighlightRail = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 0.5rem;
  margin-bottom: 2.5rem;
  scrollbar-width: thin;

  & > * {
    flex: 0 0 min(280px, 78vw);
    scroll-snap-align: start;
  }

  @media (min-width: 768px) {
    & > * {
      flex: 0 0 260px;
    }
  }
`

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const EmptyState = styled.p`
  text-align: center;
  padding: 3rem 1rem;
  color: var(--color-text-muted);
  font-size: 1rem;
`

export const SkeletonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
