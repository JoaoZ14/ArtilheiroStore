import styled from 'styled-components'

export const Section = styled.section`
  background: #FAF7F2;
  padding: 48px 0 56px;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 28px;
`

export const Title = styled.h2`
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 400;
  color: #3D3229;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 1.45rem;
  }
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  color: #7A6B5D;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.5;
`

export const CarouselWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const NavBtn = styled.button`
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #EDE3D8;
  background: white;
  color: #3D3229;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  box-shadow: 0 1px 4px rgba(61, 50, 41, 0.08);

  &:hover:not(:disabled) {
    background: #F5EFE8;
    border-color: #C4A882;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const Track = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 4px 2px 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Card = styled.div`
  flex: 0 0 auto;
  width: 132px;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  border: 1px solid #EDE3D8;
  box-shadow: 0 2px 6px rgba(61, 50, 41, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(61, 50, 41, 0.1);
  }

  @media (min-width: 768px) {
    width: 148px;
  }
`

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 9 / 16;
  object-fit: cover;
  object-position: top center;
  display: block;
`

export const CardCaption = styled.p`
  padding: 6px 8px 8px;
  font-size: 0.7rem;
  color: #7A6B5D;
  line-height: 1.3;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: white;
`

export const SkeletonCard = styled.div`
  flex: 0 0 auto;
  width: 132px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #EDE3D8;

  &::before {
    content: '';
    display: block;
    width: 100%;
    aspect-ratio: 9 / 16;
    background: linear-gradient(90deg, #F0E8DE 25%, #FAF7F2 50%, #F0E8DE 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  @media (min-width: 768px) {
    width: 148px;
  }
`
