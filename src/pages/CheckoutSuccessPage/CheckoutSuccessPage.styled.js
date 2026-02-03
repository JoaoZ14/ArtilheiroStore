import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledSuccess = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`

export const SuccessContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem 1rem calc(4rem + var(--safe-area-bottom, 0px));
  text-align: center;
  min-width: 0;
`

export const SuccessCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 2.5rem 1.5rem;
`

export const SuccessIcon = styled.div`
  width: 72px;
  height: 72px;
  margin: 0 auto 1.5rem;
  background: #dcfce7;
  color: #16a34a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  line-height: 1;
`

export const SuccessTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 1.75rem;
  }
`

export const SuccessText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`

export const OrderInfo = styled.dl`
  text-align: left;
  background: #f9fafb;
  border-radius: 8px;
  padding: 1.25rem 1rem;
  margin-bottom: 1.5rem;
  display: grid;
  gap: 0.75rem;
`

export const OrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

export const OrderTerm = styled.dt`
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  margin: 0;
`

export const OrderValue = styled.dd`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`

export const OrderDetailsWrap = styled.div`
  margin-top: 1.5rem;
  text-align: left;
`

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  min-width: 200px;
  min-height: 48px;
  height: 52px;
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  background: #c41e3a;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #a01930;
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    width: 100%;
    max-width: none;
  }
`
