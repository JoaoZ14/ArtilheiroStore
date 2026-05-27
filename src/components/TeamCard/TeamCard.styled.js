import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledTeamCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  text-decoration: none;
  color: inherit;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(61, 50, 41, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(61, 50, 41, 0.1);
    border-color: var(--color-primary-soft);
  }

  &:hover span[data-overlay] {
    opacity: 1;
  }

  &:hover span[data-cta] {
    color: var(--color-primary);
  }
`

export const CardImageWrap = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-bg);
`

export const TeamCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;

  ${StyledTeamCard}:hover & {
    transform: scale(1.06);
  }
`

export const CardOverlay = styled.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(74, 63, 53, 0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`

export const CardBody = styled.div`
  padding: 1rem 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const TeamCardName = styled.span`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--color-text);
  line-height: 1.25;
`

export const CardCta = styled.span`
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--color-text-muted);
  transition: color 0.2s ease;
`
