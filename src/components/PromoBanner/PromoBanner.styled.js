import styled from 'styled-components'

export const StyledPromoBanner = styled.section`
  position: relative;
  width: 100%;
  min-height: 280px;
  overflow: hidden;

  @media (min-width: 768px) {
    min-height: 320px;
  }
`

export const BannerImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
`

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(74, 63, 53, 0.65) 0%,
    rgba(74, 63, 53, 0.25) 55%,
    transparent 100%
  );
`

export const BannerContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 280px;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    min-height: 320px;
    padding: 3rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
    padding-left: 3rem;
  }
`

export const BannerTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

export const BannerSubtitle = styled.p`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.25rem;
  max-width: 28rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`

export const BannerCta = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border-radius: 24px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: var(--color-primary-hover);
    transform: translateY(-1px);
  }
`
