import styled from 'styled-components'

export const SummaryCard = styled.aside`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  height: fit-content;

  @media (min-width: 768px) {
    position: sticky;
    top: calc(var(--navbar-height, 100px) + 1rem);
  }
`

export const SummaryHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  background: #fff;
  border: none;
  cursor: pointer;
  text-align: left;
  -webkit-tap-highlight-color: transparent;

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    cursor: default;
    pointer-events: none;
    border-bottom: 1px solid #e5e7eb;
  }
`

export const Chevron = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0)')};
  transition: transform 0.2s ease;

  @media (min-width: 768px) {
    display: none;
  }
`

export const SummaryBody = styled.div`
  padding: 0 1.25rem 1.25rem;
  max-height: ${({ $open }) => ($open ? '800px' : '0')};
  overflow: hidden;
  transition: max-height 0.3s ease;

  @media (min-width: 768px) {
    max-height: none;
    padding: 1.25rem;
  }
`

export const ItemList = styled.ul`
  list-style: none;
  margin: 0 0 1rem;
  padding: 0;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
`

export const ItemRow = styled.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.5rem 0;
  font-size: 0.875rem;
  color: #374151;
`

export const ItemThumb = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`

export const ItemThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ItemInfo = styled.div`
  flex: 1;
  min-width: 0;
`

export const ItemName = styled.span`
  display: block;
  font-weight: 500;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ItemMeta = styled.span`
  font-size: 0.8125rem;
  color: #6b7280;
`

export const ItemPrice = styled.span`
  font-weight: 600;
  color: #1a1a1a;
  flex-shrink: 0;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9375rem;
  color: #374151;
  margin-bottom: 0.5rem;
`

export const SummaryTotalRow = styled(SummaryRow)`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
  margin-bottom: 0;
`

export const FreightNote = styled.p`
  font-size: 0.8125rem;
  color: #6b7280;
  margin: 0 0 0.5rem;
`
