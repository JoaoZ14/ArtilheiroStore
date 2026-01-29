import styled from 'styled-components'

export const StyledCategoryCard = styled.article`
  position: relative;
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: 768px) {
    aspect-ratio: 3 / 2;
  }
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${StyledCategoryCard}:hover & {
    transform: scale(1.06);
  }
`

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    transparent 100%
  );
`

export const CardTitle = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);

  @media (min-width: 768px) {
    font-size: 1.25rem;
    bottom: 1.25rem;
    left: 1.25rem;
  }
`
