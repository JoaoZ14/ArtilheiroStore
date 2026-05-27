import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledAbout = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
  display: flex;
  flex-direction: column;
`

export const AboutContainer = styled.div`
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
  margin-bottom: 2.5rem;
`

export const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-primary);
  margin: 0 0 0.25rem;
  line-height: 1.2;
  letter-spacing: 0.04em;

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

export const PageSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.65;
  font-weight: 500;
  max-width: 36rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const Section = styled.section`
  margin-bottom: 2.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`

export const SectionTitle = styled.h2`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  line-height: 1.3;
`

export const BodyText = styled.div`
  font-size: 1rem;
  color: #374151;
  line-height: 1.65;

  p {
    margin: 0 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ValueItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

export const ValueIconWrap = styled.span`
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background: var(--color-primary-soft);
  border-radius: 10px;

  & > svg {
    width: 18px;
    height: 18px;
  }
`

export const ValueContent = styled.div`
  min-width: 0;
`

export const ValueTitle = styled.h3`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
  line-height: 1.3;
`

export const ValueDesc = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
`

export const StepList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const StepItem = styled.li`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.9375rem;
  color: #374151;
  line-height: 1.5;

  &::before {
    content: attr(data-step);
    flex-shrink: 0;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    color: #1a1a1a;
    background: #e5e7eb;
    border-radius: 50%;
  }
`

export const CtaSection = styled.section`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
  text-align: center;
`

export const CtaText = styled.p`
  font-size: 0.9375rem;
  color: #374151;
  margin: 0 0 1.25rem;
  line-height: 1.5;
`

export const CtaButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 48px;
  height: 52px;
  max-width: 280px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #a01930;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    width: auto;
    padding: 0 1.5rem;
  }
`
