import styled from 'styled-components'

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  min-height: 70vh;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 85vh;
  }
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
    to bottom,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    min-height: 85vh;
    padding: 3rem 2rem;
    align-items: flex-start;
    text-align: left;
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 3rem;
  }
`

export const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.75rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
    max-width: 500px;
  }

  @media (min-width: 992px) {
    font-size: 3.5rem;
  }
`

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  max-width: 400px;

  @media (min-width: 768px) {
    font-size: 1.15rem;
    margin-bottom: 2rem;
  }
`

export const HeroCta = styled.a`
  display: inline-block;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #c41e3a;
  border-radius: 6px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #a01830;
    transform: translateY(-1px);
  }
`
