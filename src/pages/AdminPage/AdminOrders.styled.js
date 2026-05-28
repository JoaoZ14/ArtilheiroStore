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

export const Table = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  overflow: hidden;
`

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 160px 110px 120px 80px;
  gap: 12px;
  padding: 12px 20px;
  background: #F5EFE8;
  border-bottom: 1px solid #E5DDD3;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #7A6B5D;

  @media (max-width: 900px) {
    grid-template-columns: 120px 1fr 110px 80px;
    & > :nth-child(3),
    & > :nth-child(5) { display: none; }
  }
`

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 160px 110px 120px 80px;
  gap: 12px;
  padding: 14px 20px;
  align-items: center;
  border-bottom: 1px solid #F0E8DE;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.1s;

  &:last-child { border-bottom: none; }
  &:hover { background: #FDFAF6; }

  @media (max-width: 900px) {
    grid-template-columns: 120px 1fr 110px 80px;
    & > :nth-child(3),
    & > :nth-child(5) { display: none; }
  }
`

export const OrderId = styled.span`
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  font-weight: 700;
  color: #9B7349;
`

export const CustomerInfo = styled.div`
  font-weight: 600;
  color: #3D3229;
  small {
    display: block;
    font-weight: 400;
    font-size: 0.75rem;
    color: #7A6B5D;
  }
`

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  background: ${({ $status }) => STATUS_BG[$status] || '#F3F4F6'};
  color: ${({ $status }) => STATUS_COLOR[$status] || '#6B7280'};
`

const STATUS_BG = {
  PAYMENT_APPROVED: '#D1FAE5',
  PAYMENT_PENDING: '#FEF3C7',
  PAYMENT_REJECTED: '#FEE2E2',
  PAYMENT_IN_PROCESS: '#DBEAFE',
  CANCELLED: '#F3F4F6',
  SHIPPED: '#EDE9FE',
  DELIVERED: '#D1FAE5',
}

const STATUS_COLOR = {
  PAYMENT_APPROVED: '#065F46',
  PAYMENT_PENDING: '#92400E',
  PAYMENT_REJECTED: '#991B1B',
  PAYMENT_IN_PROCESS: '#1E40AF',
  CANCELLED: '#6B7280',
  SHIPPED: '#5B21B6',
  DELIVERED: '#065F46',
}

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
