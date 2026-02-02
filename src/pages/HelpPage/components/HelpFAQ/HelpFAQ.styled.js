import styled from 'styled-components'

export const FAQList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid #f0f0f0;
`

export const FAQItem = styled.li`
  border-bottom: 1px solid #f0f0f0;
`

export const FAQButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.875rem 0;
  font-size: 0.9375rem;
  font-weight: 500;
  color: #1a1a1a;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #374151;
  }

  &:focus-visible {
    outline: 1px solid #6b7280;
    outline-offset: 2px;
  }
`

export const FAQChevron = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  transition: transform 0.2s ease;

  ${FAQItem}[data-open="true"] & {
    transform: rotate(180deg);
  }
`

export const FAQAnswerWrap = styled.div`
  overflow: hidden;
  transition: max-height 0.2s ease;
`

export const FAQAnswer = styled.div`
  padding: 0 0 0.875rem;
  font-size: 0.9375rem;
  color: #4b5563;
  line-height: 1.55;

  a {
    color: #374151;
    text-decoration: underline;

    &:hover {
      color: #1a1a1a;
    }
  }
`
