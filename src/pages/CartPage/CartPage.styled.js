import styled from 'styled-components'

export const StyledCartPage = styled.main`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: var(--navbar-height, 100px);
`

export const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;

  @media (min-width: 768px) {
    padding: 1.5rem 1.5rem 4rem;
  }
`

export const CartHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const CartTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`

export const ContinueLink = styled.a`
  font-size: 0.9375rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  transition: color 0.2s ease;
  align-self: flex-start;

  &:hover {
    color: #c41e3a;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`

export const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  align-items: start;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 340px;
    gap: 2rem;
  }
`

export const CartListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
`

export const SummaryWrap = styled.div`
  @media (max-width: 767px) {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;
    background: #fff;
    border-top: 1px solid #e5e7eb;
    box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.06);
    z-index: 10;
  }
`
