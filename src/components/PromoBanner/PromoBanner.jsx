import { Link } from 'react-router-dom'
import { promoBannerData } from '../../data/mockData'
import {
  StyledPromoBanner,
  BannerImage,
  BannerOverlay,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
  BannerCta,
} from './PromoBanner.styled'

export default function PromoBanner() {
  const { title, subtitle, ctaLabel, ctaLink, image } = promoBannerData

  return (
    <StyledPromoBanner>
      <BannerImage src={image} alt="" />
      <BannerOverlay />
      <BannerContent>
        <BannerTitle>{title}</BannerTitle>
        {subtitle && <BannerSubtitle>{subtitle}</BannerSubtitle>}
        <BannerCta as={Link} to={ctaLink}>
          {ctaLabel}
        </BannerCta>
      </BannerContent>
    </StyledPromoBanner>
  )
}
