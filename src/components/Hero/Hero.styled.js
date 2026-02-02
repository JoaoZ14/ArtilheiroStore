import styled from 'styled-components'

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 45%,
    rgba(0, 0, 0, 0.1) 100%
  );
`

