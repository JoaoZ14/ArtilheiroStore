import styled from 'styled-components'

export const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  background: #fafafa;
`

export const MessagesArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-height: 0;
`

export const MessageBubble = styled.div`
  align-self: ${({ $isUser }) => ($isUser ? 'flex-end' : 'flex-start')};
  max-width: 88%;
  padding: 0.625rem 0.875rem;
  border-radius: 10px;
  font-size: 0.875rem;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-word;
  background: ${({ $isUser }) => ($isUser ? '#1a1a1a' : '#fff')};
  color: ${({ $isUser }) => ($isUser ? '#fff' : '#1a1a1a')};
  border: ${({ $isUser }) => ($isUser ? 'none' : '1px solid #e5e7eb')};
`

export const TypingIndicator = styled.div`
  align-self: flex-start;
  font-size: 0.8125rem;
  color: #9ca3af;
  padding: 0.25rem 0;
`

export const SuggestionsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0 1rem 0.75rem;
  flex-shrink: 0;
`

export const SuggestionChip = styled.button`
  font-size: 0.75rem;
  color: #374151;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;

  &:hover:not(:disabled) {
    border-color: #9ca3af;
    background: #f9fafb;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const InputRow = styled.form`
  display: flex;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px solid #e5e7eb;
  background: #fff;
  flex-shrink: 0;
`

export const ChatInput = styled.textarea`
  flex: 1;
  resize: none;
  min-height: 42px;
  max-height: 100px;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  font-family: inherit;
  color: #1a1a1a;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  line-height: 1.4;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: #9ca3af;
  }

  &:disabled {
    background: #f3f4f6;
    cursor: not-allowed;
  }
`

export const SendButton = styled.button`
  align-self: flex-end;
  flex-shrink: 0;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #fff;
  background: #1a1a1a;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover:not(:disabled) {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

export const ErrorBanner = styled.div`
  margin: 0 1rem 0.75rem;
  padding: 0.625rem 0.75rem;
  font-size: 0.8125rem;
  color: #b91c1c;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  line-height: 1.4;
  flex-shrink: 0;
`
