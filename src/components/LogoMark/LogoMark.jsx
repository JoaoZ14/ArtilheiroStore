import { BRAND_NAME, LOGO_SRC } from '../../constants/brand'
import { StyledLogoMark, LogoImage } from './LogoMark.styled'

export default function LogoMark({ className, $footer = false }) {
  return (
    <StyledLogoMark className={className} aria-label={BRAND_NAME}>
      <LogoImage src={LOGO_SRC} alt={BRAND_NAME} $footer={$footer} />
    </StyledLogoMark>
  )
}
