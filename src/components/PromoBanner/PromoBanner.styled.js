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
`

export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.2) 60%,
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
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

export const BannerSubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.25rem;
`

export const BannerCta = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
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
