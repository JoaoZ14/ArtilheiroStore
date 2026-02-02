import styled from 'styled-components'

export const SearchWrap = styled.div`
  position: relative;
  width: 100%;
`

export const SearchIconWrap = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  pointer-events: none;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  font-size: 0.9375rem;
  color: #1a1a1a;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  transition: border-color 0.15s ease;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #9ca3af;
  }
`
