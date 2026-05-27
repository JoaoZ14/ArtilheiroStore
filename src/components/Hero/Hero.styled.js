import styled from 'styled-components'

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
  min-height: 300px;

  @media (min-width: 768px) {
    min-height: max(480px, 52vh);
  }
`

export const HeroImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;

  @media (max-width: 767px) {
    opacity: 0.55;
  }
`

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(250, 247, 242, 0.88) 0%,
    rgba(250, 247, 242, 0.78) 50%,
    rgba(250, 247, 242, 0.65) 100%
  );

  @media (min-width: 768px) {
    background: linear-gradient(
      to right,
      rgba(250, 247, 242, 0.92) 0%,
      rgba(250, 247, 242, 0.5) 42%,
      transparent 72%
    );
  }
`

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: inherit;
  padding: 2rem 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
    max-width: 560px;
    margin: 0;
    margin-right: auto;
  }
`

export const HeroTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2.25rem;
  font-weight: 400;
  text-transform: uppercase;
  color: var(--color-primary);
  line-height: 1.15;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`

export const HeroSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  max-width: 400px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

export const HeroCta = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`
