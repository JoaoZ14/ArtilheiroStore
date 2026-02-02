import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: #d1d5db;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`

export const CardIcon = styled.span`
  font-size: 1.75rem;
  line-height: 1;
  flex-shrink: 0;
`

export const CardContent = styled.div`
  flex: 1;
  min-width: 0;
`

export const CardTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 0.25rem;
`

export const CardDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  line-height: 1.45;
  margin: 0;
`
