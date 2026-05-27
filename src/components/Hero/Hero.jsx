import { Link } from 'react-router-dom'
import { heroData } from '../../data/mockData'
import {
  StyledHero,
  HeroImage,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCta,
} from './Hero.styled'

export default function Hero() {
  const { title, subtitle, ctaLabel, ctaLink, image } = heroData

  return (
    <StyledHero>
      <HeroImage src={image} alt="Chapéus e acessórios western femininos" />
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroCta as={Link} to={ctaLink}>
          {ctaLabel}
        </HeroCta>
      </HeroContent>
    </StyledHero>
  )
}
