import { useState } from 'react'
import { CtaButton } from './AddToCartButton.styled'

export default function AddToCartButton({ disabled, onAddToCart, children = 'Adicionar ao carrinho' }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = async () => {
    if (disabled || isLoading) return
    setIsLoading(true)
    try {
      await onAddToCart?.()
    } finally {
      setIsLoading(false)
    }
  }

  const isDisabled = disabled || isLoading

  return (
    <CtaButton
      type="button"
      $disabled={isDisabled}
      disabled={isDisabled}
      onClick={handleClick}
      aria-busy={isLoading}
    >
      {isLoading ? 'Adicionando...' : children}
    </CtaButton>
  )
}
