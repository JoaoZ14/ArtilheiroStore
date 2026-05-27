import styled from 'styled-components'

export const StyledCategoryCard = styled.article`
  position: relative;
  display: block;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: var(--color-bg);
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.2s ease;

  @media (min-width: 768px) {
    aspect-ratio: 4 / 5;
  }

  @media (max-width: 767px) {
    &:active {
      opacity: 0.94;
    }
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.45s ease;

  ${StyledCategoryCard}:hover & {
    transform: scale(1.03);
  }

  @media (hover: none) {
    ${StyledCategoryCard}:hover & {
      transform: none;
    }
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.08) 35%,
    transparent 65%
  );
  pointer-events: none;
`

export const CardTitle = styled.span`
  position: absolute;
  bottom: 0.85rem;
  left: 0.85rem;
  right: 0.85rem;
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #fff;
  line-height: 1.3;

  @media (min-width: 768px) {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
    font-size: 0.875rem;
  }
`
