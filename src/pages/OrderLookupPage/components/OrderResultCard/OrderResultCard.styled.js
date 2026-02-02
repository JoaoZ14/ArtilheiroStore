import styled from 'styled-components'

const STATUS_COLORS = {
  yellow: { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' },
  green: { bg: '#d1fae5', text: '#065f46', border: '#10b981' },
  red: { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' },
}

export const ResultCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 1.5rem;
`

export const ResultHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  row-gap: 0.5rem;
`

export const OrderCode = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: #1a1a1a;
`

export const StatusBadge = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
  background: ${({ $variant }) => STATUS_COLORS[$variant]?.bg || '#f3f4f6'};
  color: ${({ $variant }) => STATUS_COLORS[$variant]?.text || '#374151'};
  border: 1px solid ${({ $variant }) => STATUS_COLORS[$variant]?.border || '#e5e7eb'};
`

export const ResultMeta = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
`

export const ResultMetaItem = styled.span``

export const ResultTotal = styled.span`
  font-weight: 700;
  color: #1a1a1a;
`

export const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`

export const ItemRow = styled.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  font-size: 0.875rem;
  color: #374151;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`

export const ItemThumb = styled.div`
  width: 56px;
  height: 56px;
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
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.2rem;
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
