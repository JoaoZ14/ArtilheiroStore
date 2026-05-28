import { useState, useRef, useEffect, useCallback } from 'react'
import { popularQuestions } from '../../pages/HelpPage/data'
import { BRAND_NAME } from '../../constants/brand'
import { sendChatMessage, isGeminiConfigured } from '../../services/geminiChat'
import {
  ChatBox,
  MessagesArea,
  MessageBubble,
  TypingIndicator,
  SuggestionsRow,
  SuggestionChip,
  InputRow,
  ChatInput,
  SendButton,
  ErrorBanner,
} from './ChatWidget.styled'

const WELCOME = `Olá! Sou o assistente da ${BRAND_NAME}. Posso ajudar com pedidos, pagamento, entrega e outras dúvidas da loja. Como posso ajudar?`

const INITIAL_MESSAGES = [{ role: 'assistant', content: WELCOME }]

export default function ChatWidget({ autoFocus = false }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const configured = isGeminiConfigured()

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, loading, scrollToBottom])

  useEffect(() => {
    if (autoFocus && configured) {
      inputRef.current?.focus()
    }
  }, [autoFocus, configured])

  const submitMessage = useCallback(
    async (text) => {
      const trimmed = text.trim()
      if (!trimmed || loading || !configured) return

      setError(null)
      const userMessage = { role: 'user', content: trimmed }
      let nextMessages
      setMessages((prev) => {
        nextMessages = [...prev, userMessage]
        return nextMessages
      })
      setInput('')
      setLoading(true)

      try {
        const reply = await sendChatMessage(nextMessages)
        setMessages((prev) => [...prev, { role: 'assistant', content: reply }])
      } catch (err) {
        const message =
          err?.message ||
          'Não foi possível obter resposta. Tente novamente em instantes.'
        setError(message)
        setMessages((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev))
        setInput(trimmed)
      } finally {
        setLoading(false)
        inputRef.current?.focus()
      }
    },
    [loading, configured]
  )

  function handleSubmit(e) {
    e.preventDefault()
    submitMessage(input)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submitMessage(input)
    }
  }

  if (!configured) return null

  return (
    <ChatBox>
      <MessagesArea role="log" aria-live="polite" aria-relevant="additions">
        {messages.map((msg, index) => (
          <MessageBubble key={index} $isUser={msg.role === 'user'}>
            {msg.content}
          </MessageBubble>
        ))}
        {loading && <TypingIndicator>Digitando…</TypingIndicator>}
        <div ref={messagesEndRef} />
      </MessagesArea>

      {error && <ErrorBanner role="alert">{error}</ErrorBanner>}

      {messages.length <= 1 && (
        <SuggestionsRow aria-label="Sugestões de perguntas">
          {popularQuestions.map((item) => (
            <SuggestionChip
              key={item.faqId}
              type="button"
              disabled={loading}
              onClick={() => submitMessage(item.label)}
            >
              {item.label}
            </SuggestionChip>
          ))}
        </SuggestionsRow>
      )}

      <InputRow onSubmit={handleSubmit}>
        <ChatInput
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Digite sua dúvida…"
          rows={1}
          disabled={loading}
          aria-label="Mensagem para o assistente"
        />
        <SendButton type="submit" disabled={loading || !input.trim()}>
          Enviar
        </SendButton>
      </InputRow>
    </ChatBox>
  )
}
