import styled from 'styled-components'

export const StyledProductCard = styled.article`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`

export const CardImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f5f5f5;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;

  ${StyledProductCard}:hover & {
    opacity: 1;
  }
`

export const CardBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  border-radius: 4px;
  background: ${({ $type }) => ($type === 'promo' ? '#c41e3a' : '#1a1a1a')};
`

export const CardInfo = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

export const CardName = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #1a1a1a;
`

export const CardPrice = styled.span`
  font-size: 1.1rem;
  font-weight: 700;
  color: #c41e3a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const CardOriginalPrice = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: #999;
  text-decoration: line-through;
`
