import styled from 'styled-components'

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 20px;
  align-items: start;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
`

export const Card = styled.div`
  background: white;
  border: 1px solid #E5DDD3;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
`

export const CardTitle = styled.h2`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #7A6B5D;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #E5DDD3;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 0;
  font-size: 0.875rem;
  border-bottom: 1px solid #F5EFE8;

  &:last-child { border-bottom: none; }

  span:first-child {
    color: #7A6B5D;
    font-weight: 500;
    flex-shrink: 0;
    margin-right: 16px;
  }

  span:last-child {
    color: #3D3229;
    font-weight: 600;
    text-align: right;
  }
`

export const ItemRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #F5EFE8;

  &:last-child { border-bottom: none; }

  img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: cover;
    background: #F5EFE8;
    flex-shrink: 0;
  }

  div {
    flex: 1;
    font-size: 0.875rem;

    strong { color: #3D3229; display: block; }
    small { color: #7A6B5D; }
  }

  span {
    font-weight: 700;
    color: #3D3229;
    font-size: 0.875rem;
    white-space: nowrap;
  }
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0 0;
  font-size: 1rem;
  font-weight: 700;
  color: #3D3229;
`

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background: ${({ $status }) => STATUS_BG[$status] || '#F3F4F6'};
  color: ${({ $status }) => STATUS_COLOR[$status] || '#6B7280'};
  margin-bottom: 16px;
`

const STATUS_BG = {
  PAYMENT_APPROVED: '#D1FAE5', PAYMENT_PENDING: '#FEF3C7',
  PAYMENT_REJECTED: '#FEE2E2', PAYMENT_IN_PROCESS: '#DBEAFE',
  CANCELLED: '#F3F4F6', SHIPPED: '#EDE9FE', DELIVERED: '#D1FAE5',
}
const STATUS_COLOR = {
  PAYMENT_APPROVED: '#065F46', PAYMENT_PENDING: '#92400E',
  PAYMENT_REJECTED: '#991B1B', PAYMENT_IN_PROCESS: '#1E40AF',
  CANCELLED: '#6B7280', SHIPPED: '#5B21B6', DELIVERED: '#065F46',
}

export const StatusSelect = styled.select`
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #E5DDD3;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: var(--font-body);
  background: white;
  color: #3D3229;
  outline: none;
  margin-bottom: 12px;
  cursor: pointer;
  &:focus { border-color: #9B7349; }
`

export const UpdateBtn = styled.button`
  width: 100%;
  padding: 11px;
  background: #9B7349;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
  &:hover:not(:disabled) { background: #82613D; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`

export const BackBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #7A6B5D;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0 0 20px;
  &:hover { color: #9B7349; }
`

export const SuccessMsg = styled.p`
  color: #065F46;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 8px;
`

export const ErrorMsg = styled.p`
  color: #991B1B;
  font-size: 0.8rem;
  text-align: center;
  margin-top: 8px;
`

export const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  flex-wrap: wrap;
`

export const ActionBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 7px;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  text-decoration: none;
  border: 1.5px solid #E5DDD3;
  background: white;
  color: #3D3229;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: #9B7349; color: #9B7349; }
`

export const CopyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 12px;
  border-radius: 7px;
  font-size: 0.78rem;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  border: 1.5px solid #E5DDD3;
  background: white;
  color: #3D3229;
  transition: border-color 0.15s, color 0.15s;
  &:hover { border-color: #9B7349; color: #9B7349; }
`

export const UpdatedAt = styled.p`
  font-size: 0.72rem;
  color: #7A6B5D;
  margin-top: 4px;
  margin-bottom: 16px;
`

/* ── Stepper de progresso ─────────────────────────────────────── */

export const Stepper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 20px;
`

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;

  &:not(:first-child)::before {
    content: '';
    position: absolute;
    top: 12px;
    right: 50%;
    width: 100%;
    height: 2px;
    background: ${({ $done }) => ($done ? '#9B7349' : '#E5DDD3')};
    z-index: 0;
  }
`

export const StepDot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.65rem;
  font-weight: 700;
  z-index: 1;
  background: ${({ $active, $done }) =>
    $active ? '#9B7349' : $done ? '#C8A97A' : '#E5DDD3'};
  color: ${({ $active, $done }) => ($active || $done ? 'white' : '#7A6B5D')};
  border: 2px solid ${({ $active }) => ($active ? '#9B7349' : 'transparent')};
`

export const StepLabel = styled.span`
  font-size: 0.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ $active }) => ($active ? '#9B7349' : '#7A6B5D')};
  margin-top: 4px;
  text-align: center;
`
