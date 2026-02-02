import { StyledHero, HeroImage, HeroOverlay } from './Hero.styled'

const HERO_BG_IMAGE = '/Design%20sem%20nome%20(5).png'

export default function Hero() {
  return (
    <StyledHero>
      <HeroImage src={HERO_BG_IMAGE} alt="" />
      <HeroOverlay />
    </StyledHero>
  )
}
