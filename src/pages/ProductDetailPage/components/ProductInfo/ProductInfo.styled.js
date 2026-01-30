import styled from 'styled-components'

export const ProductInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProductBadge = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.5rem;
  letter-spacing: 0.02em;
`

export const ProductTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.3;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`

export const PriceBlock = styled.div`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const PriceCurrent = styled.span`
  font-size: 1.75rem;
  font-weight: 800;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

export const PriceOriginal = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: #9ca3af;
  text-decoration: line-through;
`

export const PromoBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
`

export const SelectorsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
`

export const QuantityCol = styled.div`
  flex-shrink: 0;
`

export const CtaWrap = styled.div`
  margin-top: 0.5rem;
  position: relative;
`

export const AddedFeedback = styled.span`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #059669;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
