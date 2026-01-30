import styled from 'styled-components'

export const QuickInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid #e5e7eb;
`

export const QuickInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #4b5563;
`

export const QuickInfoIcon = styled.span`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #6b7280;
`

export const QuickInfoText = styled.span`
  font-weight: 500;
  color: #374151;
`
