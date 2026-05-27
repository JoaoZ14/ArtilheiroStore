import styled from 'styled-components'

const STATUS_COLORS = {
  yellow: { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' },
  green: { bg: '#d1fae5', text: '#065f46', border: '#10b981' },
  red: { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' },
  blue: { bg: '#dbeafe', text: '#1e40af', border: '#3b82f6' },
  teal: { bg: '#ccfbf1', text: '#0f766e', border: '#14b8a6' },
}

export const ExpandableCard = styled.article`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 0.75rem;
`

export const ExpandableHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  text-align: left;
  background: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #f9fafb;
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
  flex: 1;
`

export const HeaderItemThumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
`

export const HeaderItemThumb = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
  flex-shrink: 0;
`

export const HeaderItemThumbImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const HeaderItemInfo = styled.div`
  min-width: 0;
  flex: 1;
`

export const HeaderItemName = styled.span`
  display: block;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const HeaderItemMeta = styled.span`
  display: block;
  font-size: 0.8125rem;
  color: #6b7280;
  margin-top: 0.15rem;
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
`

export const HeaderTotal = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #111827;
`

export const StatusBadgeSmall = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: ${({ $variant }) => STATUS_COLORS[$variant]?.bg || '#f3f4f6'};
  color: ${({ $variant }) => STATUS_COLORS[$variant]?.text || '#374151'};
  border: 1px solid ${({ $variant }) => STATUS_COLORS[$variant]?.border || '#e5e7eb'};
  flex-shrink: 0;
`

export const Chevron = styled.span`
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  transition: transform 0.2s ease;

  &.expanded {
    transform: rotate(180deg);
  }
`

export const ExpandableBody = styled.div`
  border-top: 1px solid #e5e7eb;
  background: #fafbfc;
  padding: 0 1rem 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem 1.5rem;
  }
`
