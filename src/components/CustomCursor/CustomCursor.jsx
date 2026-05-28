import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TbHorseshoe } from 'react-icons/tb'
import { CursorRoot, PublicCursorStyles } from './CustomCursor.styled'

const TEXT_FIELD_SELECTOR =
  'textarea, [contenteditable="true"], input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="tel"], input[type="url"], input[type="number"], input:not([type])'

function isTextField(target) {
  if (!(target instanceof Element)) return false
  return Boolean(target.closest(TEXT_FIELD_SELECTOR))
}

export default function CustomCursor() {
  const { pathname } = useLocation()
  const isPublic = !pathname.startsWith('/admin')
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [visible, setVisible] = useState(false)
  const [overTextField, setOverTextField] = useState(false)

  useEffect(() => {
    if (!isPublic) {
      document.body.classList.remove('public-custom-cursor')
      return undefined
    }

    const canUseCustomCursor = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    ).matches

    if (!canUseCustomCursor) return undefined

    document.body.classList.add('public-custom-cursor')

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
      setOverTextField(isTextField(e.target))
    }

    const onLeave = () => setVisible(false)

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)

    return () => {
      document.body.classList.remove('public-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [isPublic])

  if (!isPublic) return null

  return (
    <>
      <PublicCursorStyles />
      {visible && !overTextField && (
        <CursorRoot style={{ left: pos.x, top: pos.y }} aria-hidden>
          <TbHorseshoe />
        </CursorRoot>
      )}
    </>
  )
}
