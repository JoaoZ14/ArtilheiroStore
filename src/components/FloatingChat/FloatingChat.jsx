import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { RiMessage3Line, RiCloseLine } from 'react-icons/ri'
import ChatWidget from '../ChatWidget/ChatWidget'
import { BRAND_NAME } from '../../constants/brand'
import { isGeminiConfigured } from '../../services/geminiChat'
import {
  FloatingRoot,
  ChatPanel,
  PanelHeader,
  PanelTitleGroup,
  PanelTitle,
  PanelSubtitle,
  IconButton,
  Fab,
} from './FloatingChat.styled'

export default function FloatingChat() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isAdmin = location.pathname.startsWith('/admin')
  const configured = isGeminiConfigured()

  useEffect(() => {
    if (!open) return undefined

    function onKeyDown(e) {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  if (!configured || isAdmin) return null

  return (
    <FloatingRoot aria-label="Assistente virtual">
      {open && (
        <ChatPanel role="dialog" aria-modal="true" aria-labelledby="floating-chat-title">
          <PanelHeader>
            <PanelTitleGroup>
              <PanelTitle id="floating-chat-title">Dúvidas?</PanelTitle>
              <PanelSubtitle>Assistente {BRAND_NAME}</PanelSubtitle>
            </PanelTitleGroup>
            <IconButton
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
            >
              <RiCloseLine size={22} />
            </IconButton>
          </PanelHeader>
          <ChatWidget autoFocus />
        </ChatPanel>
      )}

      <Fab
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Fechar assistente' : 'Abrir assistente de dúvidas'}
      >
        {open ? <RiCloseLine size={26} /> : <RiMessage3Line size={26} />}
      </Fab>
    </FloatingRoot>
  )
}
