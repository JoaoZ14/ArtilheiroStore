import styled from 'styled-components'

export const StyledCategoryCard = styled.article`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px rgba(61, 50, 41, 0.05);

  @media (min-width: 768px) {
    aspect-ratio: 3 / 2;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${StyledCategoryCard}:hover & {
    transform: scale(1.05);
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(74, 63, 53, 0.55) 0%,
    rgba(74, 63, 53, 0.15) 45%,
    transparent 100%
  );
`

export const CardTitle = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    font-size: 1.35rem;
    bottom: 1.25rem;
    left: 1.25rem;
  }
`
