import styled from 'styled-components'

export const ItemCard = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media (min-width: 640px) {
    grid-template-columns: 100px 1fr auto auto auto;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem;
  }
`

export const ItemImageLink = styled.a`
  display: block;
  width: 100%;
  aspect-ratio: 1;
  max-width: 100px;
  border-radius: 6px;
  overflow: hidden;
  background: #f5f5f5;
  margin: 0 auto;

  @media (min-width: 640px) {
    margin: 0;
    max-width: 100px;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`

export const ItemName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.3;
`

export const ItemMeta = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`

export const ItemPrice = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #374151;
`

export const ItemQuantityWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`

export const ItemSubtotal = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: right;

  @media (min-width: 640px) {
    min-width: 80px;
    text-align: right;
  }
`

export const ItemRemoveButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: #6b7280;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s ease, background 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: #c41e3a;
    background: rgba(196, 30, 58, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  grid-column: 1 / -1;

  @media (min-width: 640px) {
    grid-column: auto;
    justify-content: flex-end;
    gap: 1rem;
  }
`
