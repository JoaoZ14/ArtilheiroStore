import styled from 'styled-components'

export const ItemRow = styled.li`
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;

  &:last-child {
    border-bottom: none;
  }
`

export const ItemImageWrap = styled.div`
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 8px;
  overflow: hidden;
  background: #f3f4f6;
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ItemDetails = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ItemName = styled.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1a1a1a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ItemMeta = styled.span`
  font-size: 0.8125rem;
  color: #6b7280;
`

export const ItemPrice = styled.span`
  font-size: 0.9375rem;
  font-weight: 700;
  color: #1a1a1a;
`

export const ItemRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #6b7280;
  background: transparent;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #c41e3a;
    background: rgba(196, 30, 58, 0.08);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`
