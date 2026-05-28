import styled from 'styled-components'

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  input[type='search'] {
    flex: 1;
    min-width: 200px;
    padding: 10px 14px;
    border: 1.5px solid #E5DDD3;
    border-radius: 8px;
    font-size: 0.875rem;
    font-family: var(--font-body);
    background: white;
    outline: none;
    &:focus { border-color: #9B7349; }
  }

  select {
    padding: 10px 14px;
    border: 1.5px solid #E5DDD3;
    border-radius: 8px;
    font-size: 0.875rem;
    font-family: var(--font-body);
    background: white;
    outline: none;
    cursor: pointer;
    &:focus { border-color: #9B7349; }
  }
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

export const Table = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  overflow: hidden;
`

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 100px 120px 100px 120px;
  gap: 16px;
  padding: 12px 20px;
  background: #F5EFE8;
  border-bottom: 1px solid #E5DDD3;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7A6B5D;

  @media (max-width: 900px) {
    grid-template-columns: 60px 1fr 100px 80px;
    & > :nth-child(3),
    & > :nth-child(5) { display: none; }
  }
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 100px 120px 100px 120px;
  gap: 16px;
  padding: 14px 20px;
  align-items: center;
  border-bottom: 1px solid #F0E8DE;
  font-size: 0.875rem;
  transition: background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover { background: #FDFAF6; }

  @media (max-width: 900px) {
    grid-template-columns: 60px 1fr 100px 80px;
    & > :nth-child(3),
    & > :nth-child(5) { display: none; }
  }
`

export const ProductThumb = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  object-fit: cover;
  background: #F5EFE8;
`

export const ProductName = styled.div`
  font-weight: 600;
  color: #3D3229;
  
  small {
    display: block;
    font-weight: 400;
    font-size: 0.75rem;
    color: #7A6B5D;
    margin-top: 2px;
  }
`

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${({ $type }) =>
    $type === 'promo' ? '#FEF3C7' :
    $type === 'inactive' ? '#F3F4F6' :
    '#D1FAE5'};
  color: ${({ $type }) =>
    $type === 'promo' ? '#92400E' :
    $type === 'inactive' ? '#6B7280' :
    '#065F46'};
`

export const ActionBtn = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.775rem;
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
`

export const ActionsCell = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const EmptyRow = styled.div`
  padding: 48px;
  text-align: center;
  color: #7A6B5D;
  font-size: 0.875rem;
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
  font-size: 0.875rem;
  color: #7A6B5D;

  button {
    padding: 6px 14px;
    border: 1.5px solid #E5DDD3;
    border-radius: 6px;
    background: white;
    font-size: 0.875rem;
    cursor: pointer;
    &:hover:not(:disabled) { border-color: #9B7349; color: #9B7349; }
    &:disabled { opacity: 0.4; cursor: not-allowed; }
  }
`
