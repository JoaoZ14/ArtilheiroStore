import {
  QuickInfoGrid,
  QuickInfoItem,
  QuickInfoIcon,
  QuickInfoText,
} from './QuickInfo.styled'

const DEFAULT_ITEMS = [
  { icon: '◆', label: 'Material', text: '100% Poliéster' },
  { icon: '✈', label: 'Envio', text: 'Envio em até 48h' },
  { icon: '↔', label: 'Troca', text: 'Troca fácil em até 7 dias' },
]

export default function QuickInfo({ items = DEFAULT_ITEMS }) {
  return (
    <QuickInfoGrid>
      {items.map((item) => (
        <QuickInfoItem key={item.label}>
          <QuickInfoIcon aria-hidden>{item.icon}</QuickInfoIcon>
          <QuickInfoText>{item.text}</QuickInfoText>
        </QuickInfoItem>
      ))}
    </QuickInfoGrid>
  )
}
