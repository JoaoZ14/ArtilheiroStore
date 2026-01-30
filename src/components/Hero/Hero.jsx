import { Link } from 'react-router-dom'
import { heroData } from '../../data/mockData'
import { StyledHero, HeroImage, HeroOverlay, HeroCtaWrapper, HeroCta } from './Hero.styled'

const HERO_BG_IMAGE = '/Design%20sem%20nome%20(5).png'

export default function Hero() {
  const { ctaLabel, ctaLink } = heroData

  return (
    <StyledHero>
      <HeroImage src={HERO_BG_IMAGE} alt="" />
      <HeroOverlay />
      <HeroCtaWrapper>
        <HeroCta as={Link} to={ctaLink}>
          {ctaLabel}
        </HeroCta>
      </HeroCtaWrapper>
    </StyledHero>
  )
}
