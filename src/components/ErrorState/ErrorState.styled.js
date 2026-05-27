import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ErrorWrap = styled.div`
  text-align: center;
  padding: 4rem 1.5rem;
  max-width: 400px;
  margin: 0 auto;
`

export const ErrorIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: #fef2f2;
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  line-height: 1;
`

export const ErrorTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`

export const ErrorText = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`

export const ErrorActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
`

export const RetryButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, opacity 0.2s;

  &:hover:not(:disabled) {
    background: var(--color-primary-hover);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const BackLink = styled(Link)`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
