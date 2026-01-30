import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledCategoryCard, CardImage, CardOverlay, CardTitle } from './CategoryCard.styled'

export default function CategoryCard({ title, image, link, fallbackImage }) {
  const [src, setSrc] = useState(image)

  const handleError = () => {
    if (fallbackImage) setSrc(fallbackImage)
  }

  return (
    <StyledCategoryCard as={Link} to={link}>
      <CardImage src={src} alt={title} onError={handleError} />
      <CardOverlay />
      <CardTitle>{title}</CardTitle>
    </StyledCategoryCard>
  )
}
