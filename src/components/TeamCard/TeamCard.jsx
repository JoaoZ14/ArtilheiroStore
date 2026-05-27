import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  StyledTeamCard,
  CardImageWrap,
  TeamCardImage,
  CardOverlay,
  CardBody,
  TeamCardName,
  CardCta,
} from './TeamCard.styled'

export default function TeamCard({ name, image, link, fallbackImage }) {
  const [src, setSrc] = useState(image)

  const handleError = () => {
    if (fallbackImage) setSrc(fallbackImage)
  }

  return (
    <StyledTeamCard as={Link} to={link}>
      <CardImageWrap>
        <TeamCardImage src={src} alt={name} onError={handleError} />
        <CardOverlay data-overlay>Explorar</CardOverlay>
      </CardImageWrap>
      <CardBody>
        <TeamCardName>{name}</TeamCardName>
        <CardCta data-cta>Ver linha →</CardCta>
      </CardBody>
    </StyledTeamCard>
  )
}
