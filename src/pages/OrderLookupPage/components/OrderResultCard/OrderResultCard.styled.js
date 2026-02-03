import styled from 'styled-components'

const STATUS_COLORS = {
  yellow: { bg: '#fef3c7', text: '#92400e', border: '#f59e0b' },
  green: { bg: '#d1fae5', text: '#065f46', border: '#10b981' },
  red: { bg: '#fee2e2', text: '#991b1b', border: '#ef4444' },
  blue: { bg: '#dbeafe', text: '#1e40af', border: '#3b82f6' },
  teal: { bg: '#ccfbf1', text: '#0f766e', border: '#14b8a6' },
}

export const ResultCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  margin-bottom: 1.5rem;
`

export const ResultHeader = styled.div`
  padding: 1.5rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  row-gap: 0.5rem;
`

export const OrderCode = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
`

export const StatusBadge = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  background: ${({ $variant }) => STATUS_COLORS[$variant]?.bg || '#f3f4f6'};
  color: ${({ $variant }) => STATUS_COLORS[$variant]?.text || '#374151'};
  border: 1px solid ${({ $variant }) => STATUS_COLORS[$variant]?.border || '#e5e7eb'};
`

export const ProgressBlock = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  background: #fafbfc;
`

export const ProgressTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin: 0 0 1rem;
`

export const Timeline = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TimelineItem = styled.li`
  display: flex;
  align-items: flex-start;
  position: relative;
`

export const TimelineLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2px;
`

export const TimelineDot = styled.span`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6rem;
  font-weight: 700;
  color: #fff;
  background: ${({ $state }) =>
    $state === 'done' ? '#22c55e' : $state === 'current' ? '#2563eb' : '#e5e7eb'};
  border: 2px solid
    ${({ $state }) =>
      $state === 'done' ? '#22c55e' : $state === 'current' ? '#2563eb' : '#d1d5db'};
  box-sizing: border-box;
  z-index: 1;
`

export const TimelineLine = styled.span`
  width: 2px;
  min-height: 28px;
  flex: 1;
  background: ${({ $done }) => ($done ? '#22c55e' : '#e5e7eb')};
  margin: 2px 0 0;
`

export const TimelineContent = styled.div`
  margin-left: 12px;
  padding-bottom: 4px;
  min-width: 0;
`

export const TimelineLabel = styled.span`
  font-size: 0.875rem;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active }) => ($active ? '#1e293b' : '#6b7280')};
  display: block;
  line-height: 1.35;
`

export const TimelineDate = styled.span`
  font-size: 0.75rem;
  color: #9ca3af;
  margin-top: 2px;
  display: block;
`

export const CancelledNote = styled.p`
  font-size: 0.8125rem;
  color: #b91c1c;
  font-weight: 500;
  margin: 0.75rem 0 0 26px;
`

export const ResultMeta = styled.div`
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #6b7280;
`

export const ResultMetaItem = styled.span``

export const ResultTotal = styled.span`
  font-weight: 700;
  font-size: 1rem;
  color: #111827;
`

export const InfoBlock = styled.div`
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  font-size: 0.875rem;
  color: #475569;
`

export const InfoLabel = styled.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-bottom: 0.35rem;
`

export const InfoText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: #1e293b;

  & + ${InfoLabel} {
    margin-top: 0.75rem;
  }
`

export const TrackingBlock = styled.div`
  padding: 1rem 1.5rem;
  background: #f8fafc;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
`

export const TrackingLabel = styled.span`
  font-size: 0.875rem;
  color: #475569;

  strong {
    color: #1e293b;
    font-weight: 600;
  }
`

export const TrackingLink = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  color: #0f766e;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
  &:focus-visible {
    outline: 2px solid #14b8a6;
    outline-offset: 2px;
  }
`

export const SectionTitle = styled.h3`
  font-size: 0.8125rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 0 0 0.75rem;
  padding: 1rem 1.5rem 0 1.5rem;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`

export const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 1.5rem 1.5rem;
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
