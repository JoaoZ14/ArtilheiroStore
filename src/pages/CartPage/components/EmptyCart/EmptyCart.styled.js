import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const EmptyWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1.5rem;
  min-height: 320px;
`

export const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #d1d5db;
  margin-bottom: 1.25rem;
`

export const EmptyTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

export const EmptyText = styled.p`
  font-size: 0.9375rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  max-width: 280px;
`

export const EmptyLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: #c41e3a;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #a01930;
  }

  &:focus-visible {
    outline: 2px solid #c41e3a;
    outline-offset: 2px;
  }
`
