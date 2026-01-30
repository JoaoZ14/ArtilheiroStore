import styled from 'styled-components'

export const SizeSection = styled.div`
  margin-bottom: 1.25rem;
`

export const SizeLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`

export const SizeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SizeButton = styled.button`
  min-width: 48px;
  height: 48px;
  padding: 0 0.75rem;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ $selected, $disabled }) =>
    $disabled ? '#9ca3af' : $selected ? '#fff' : '#1a1a1a'};
  background: ${({ $selected, $disabled }) =>
    $disabled ? '#f3f4f6' : $selected ? '#1a1a1a' : '#fff'};
  border: 2px solid
    ${({ $selected, $disabled }) =>
      $disabled ? '#e5e7eb' : $selected ? '#1a1a1a' : '#e5e7eb'};
  border-radius: 6px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #1a1a1a;
    background: ${({ $selected }) => ($selected ? '#1a1a1a' : '#f9fafb')};
  }

  &:focus-visible {
    outline: 2px solid #1a1a1a;
    outline-offset: 2px;
  }
`
