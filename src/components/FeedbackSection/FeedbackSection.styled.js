import styled from 'styled-components'

export const Section = styled.section`
  background: #FAF7F2;
  padding: 64px 0 72px;
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`

export const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;
`

export const Title = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 400;
  color: #3D3229;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`

export const Subtitle = styled.p`
  font-size: 0.95rem;
  color: #7A6B5D;
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.6;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  border: 1px solid #EDE3D8;
  box-shadow: 0 2px 8px rgba(61,50,41,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(61,50,41,0.12);
  }
`

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  display: block;
`

export const CardCaption = styled.p`
  padding: 10px 14px 12px;
  font-size: 0.8rem;
  color: #7A6B5D;
  line-height: 1.4;
  background: white;
`

export const SkeletonCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #EDE3D8;

  &::before {
    content: '';
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    background: linear-gradient(90deg, #F0E8DE 25%, #FAF7F2 50%, #F0E8DE 75%);
    background-size: 200% 100%;
    animation: shimmer 1.4s infinite;
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`
