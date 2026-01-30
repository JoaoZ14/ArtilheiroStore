import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  StyledTeamCard,
  TeamCardImage,
  TeamCardName,
} from './TeamCard.styled'

export default function TeamCard({ name, image, link, fallbackImage }) {
  const [src, setSrc] = useState(image)

  const handleError = () => {
    if (fallbackImage) setSrc(fallbackImage)
  }

  return (
    <StyledTeamCard as={Link} to={link}>
      <TeamCardImage src={src} alt={name} onError={handleError} />
      <TeamCardName>{name}</TeamCardName>
    </StyledTeamCard>
  )
}
