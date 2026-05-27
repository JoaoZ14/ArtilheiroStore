import styled from 'styled-components'

export const StyledOrderLookup = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`

export const LookupContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  min-width: 0;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.35rem;
`

export const PageDescription = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0 0 1.5rem;
  line-height: 1.45;
`

export const MessageCard = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  text-align: center;
`

export const MessageTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.5rem;
`

export const MessageText = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin: 0;
`

export const TabGroup = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
`

export const TabButton = styled.button`
  padding: 0.75rem 1rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #6b7280;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #374151;
  }

  &.active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
`

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`
