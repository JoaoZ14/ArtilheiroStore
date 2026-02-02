import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import {
  FAQList,
  FAQItem,
  FAQButton,
  FAQChevron,
  FAQAnswerWrap,
  FAQAnswer,
} from './HelpFAQ.styled'

function formatAnswer(text) {
  const linkPattern = /\[([^\]]+)\]\((\/[^)]+)\)/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'text', value: text.slice(lastIndex, match.index) })
    }
    parts.push({ type: 'link', label: match[1], to: match[2] })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push({ type: 'text', value: text.slice(lastIndex) })
  }
  if (parts.length === 0) parts.push({ type: 'text', value: text })

  return parts
}

function AnswerContent({ answer }) {
  const parts = formatAnswer(answer)
  return (
    <>
      {parts.map((part, i) =>
        part.type === 'link' ? (
          <Link key={i} to={part.to}>
            {part.label}
          </Link>
        ) : (
          <span key={i}>{part.value}</span>
        )
      )}
    </>
  )
}

export default function HelpFAQ({ items, openId, onToggle }) {
  const contentRefs = useRef({})

  return (
    <FAQList role="list">
      {items.map((item) => {
        const isOpen = openId === item.id
        return (
          <FAQItem key={item.id} data-open={isOpen} role="listitem">
            <FAQButton
              type="button"
              onClick={() => onToggle(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              {item.question}
              <FAQChevron aria-hidden>
                <FiChevronDown size={16} strokeWidth={2} />
              </FAQChevron>
            </FAQButton>
            <FAQAnswerWrap
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              style={{
                maxHeight: isOpen ? contentRefs.current[item.id]?.scrollHeight ?? 200 : 0,
              }}
            >
              <FAQAnswer
                ref={(el) => {
                  if (el) contentRefs.current[item.id] = el
                }}
              >
                <AnswerContent answer={item.answer} />
              </FAQAnswer>
            </FAQAnswerWrap>
          </FAQItem>
        )
      })}
    </FAQList>
  )
}
