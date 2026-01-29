import { Link } from 'react-router-dom'
import { StyledCategoryCard, CardImage, CardOverlay, CardTitle } from './CategoryCard.styled'

export default function CategoryCard({ title, image, link }) {
  return (
    <StyledCategoryCard as={Link} to={link}>
      <CardImage src={image} alt={title} />
      <CardOverlay />
      <CardTitle>{title}</CardTitle>
    </StyledCategoryCard>
  )
}
