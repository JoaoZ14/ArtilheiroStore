import styled from 'styled-components'

export const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(61, 50, 41, 0.05);
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 8px 24px rgba(61, 50, 41, 0.08);
    transform: translateY(-2px);
    border-color: var(--color-primary-soft);
  }

  @media (max-width: 767px) {
    &:active {
      opacity: 0.96;
    }
  }
`

export const CardImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: var(--color-bg);
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.35s ease, transform 0.4s ease;

  ${StyledProductCard}:hover & {
    transform: scale(1.03);
  }
`

export const CardBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-text);
  border-radius: 20px;
  background: ${({ $type }) =>
    $type === 'promo'
      ? 'var(--color-primary-soft)'
      : $type === 'retro' || $type === 'edicao'
        ? '#EDE4D8'
        : 'rgba(255, 255, 255, 0.92)'};
  border: 1px solid var(--color-border);
`

export const CardInfo = styled.div`
  padding: 1rem 1rem 1.1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`

export const CardName = styled.span`
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.25;
`

export const CardLiga = styled.span`
  font-size: 0.78rem;
  color: var(--color-text-muted);
  line-height: 1.2;
`

export const CardPrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.15rem;
`

export const CardOriginalPrice = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--color-text-muted);
  text-decoration: line-through;
`

export const CardDiscountPercent = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent);
  margin-left: 0.25rem;
`

export const FreteGratisText = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  color: #7A8F6E;
  line-height: 1.2;
`
