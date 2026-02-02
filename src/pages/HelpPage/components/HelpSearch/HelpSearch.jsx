import { FiSearch } from 'react-icons/fi'
import { SearchWrap, SearchIconWrap, SearchInput } from './HelpSearch.styled'

export default function HelpSearch({ value, onChange, placeholder }) {
  return (
    <SearchWrap>
      <SearchIconWrap aria-hidden>
        <FiSearch size={18} strokeWidth={2} />
      </SearchIconWrap>
      <SearchInput
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={
          placeholder || 'Buscar por pedidos, pagamento, entrega...'
        }
        aria-label="Buscar na ajuda"
        autoComplete="off"
      />
    </SearchWrap>
  )
}
