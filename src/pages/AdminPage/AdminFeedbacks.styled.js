import styled from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
`

export const PrimaryBtn = styled.button`
  padding: 10px 20px;
  background: #9B7349;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: background 0.15s;
  &:hover { background: #82613D; }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`

export const FeedbackCard = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  opacity: ${({ $inactive }) => ($inactive ? '0.55' : '1')};
  transition: box-shadow 0.15s;

  &:hover {
    box-shadow: 0 4px 16px rgba(61,50,41,0.1);
  }
`

export const CardThumb = styled.img`
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  background: #F5EFE8;
  display: block;
`

export const CardBody = styled.div`
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const CardCaption = styled.p`
  font-size: 0.78rem;
  color: #7A6B5D;
  line-height: 1.4;
  flex: 1;
`

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.68rem;
  font-weight: 600;
  background: ${({ $active }) => ($active ? '#D1FAE5' : '#F3F4F6')};
  color: ${({ $active }) => ($active ? '#065F46' : '#6B7280')};
`

export const Actions = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`

export const ActionBtn = styled.button`
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.72rem;
  font-weight: 600;
  border: 1.5px solid;
  cursor: pointer;
  transition: all 0.15s;

  ${({ $variant }) => $variant === 'edit' && `
    border-color: #9B7349;
    color: #9B7349;
    background: transparent;
    &:hover { background: #9B7349; color: white; }
  `}
  ${({ $variant }) => $variant === 'toggle' && `
    border-color: #E5DDD3;
    color: #7A6B5D;
    background: transparent;
    &:hover { border-color: #9B7349; color: #9B7349; }
  `}
  ${({ $variant }) => $variant === 'delete' && `
    border-color: #FCA5A5;
    color: #DC2626;
    background: transparent;
    &:hover { background: #DC2626; color: white; border-color: #DC2626; }
  `}
`

export const EmptyState = styled.div`
  padding: 64px;
  text-align: center;
  color: #7A6B5D;
  font-size: 0.875rem;
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
`
