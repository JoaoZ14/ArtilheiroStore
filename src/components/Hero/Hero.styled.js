import styled from 'styled-components'

/* Proporção próxima a 1920x1080, com altura um pouco menor */
export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  aspect-ratio: 20 / 9;
  overflow: hidden;
`

export const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 45%,
    rgba(0, 0, 0, 0.1) 100%
  );
`

export const HeroCtaWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2.5rem;
  z-index: 2;

  @media (min-width: 768px) {
    bottom: 10rem;
    left: 20rem;
  }
`

export const HeroCta = styled.a`
  display: inline-block;
  padding: 0.65rem 1.25rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #1a1a1a;
  border: 2px solid #fff;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    background: #2f2f2f;
    color:rgb(255, 255, 255);
    transform: translateY(-1px);
  }
`
