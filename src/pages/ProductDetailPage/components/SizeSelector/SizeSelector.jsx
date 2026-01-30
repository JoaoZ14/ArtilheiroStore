import {
  SizeSection,
  SizeLabel,
  SizeGrid,
  SizeButton,
} from './SizeSelector.styled'

const SIZES_ORDER = ['P', 'M', 'G', 'GG', 'EG']

export default function SizeSelector({ sizeStock = {}, value, onChange }) {
  const sizes = SIZES_ORDER.filter((s) => sizeStock[s] !== undefined)

  return (
    <SizeSection>
      <SizeLabel>Tamanho</SizeLabel>
      <SizeGrid>
        {sizes.map((size) => {
          const stock = sizeStock[size] ?? 0
          const disabled = stock === 0
          const selected = value === size
          return (
            <SizeButton
              key={size}
              type="button"
              $selected={selected}
              $disabled={disabled}
              disabled={disabled}
              onClick={() => !disabled && onChange(size)}
              aria-pressed={selected}
              aria-label={`Tamanho ${size}${disabled ? ', sem estoque' : ''}`}
            >
              {size}
            </SizeButton>
          )
        })}
      </SizeGrid>
    </SizeSection>
  )
}
