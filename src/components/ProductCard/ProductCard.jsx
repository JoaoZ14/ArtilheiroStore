import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  StyledProductCard,
  CardImageWrapper,
  CardImage,
  CardBadge,
  CardInfo,
  CardName,
  CardPrice,
  CardOriginalPrice,
} from './ProductCard.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function ProductCard({ name, price, originalPrice, image, imageHover, badge, link }) {
  const [isHover, setIsHover] = useState(false)
  const displayImage = imageHover && isHover ? imageHover : image

  return (
    <StyledProductCard
      as={Link}
      to={link}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CardImageWrapper>
        <CardImage src={displayImage} alt={name} />
        {badge && (
          <CardBadge
            $type={
              badge === 'Promo' ? 'promo' : badge === 'Retrô' ? 'retro' : 'new'
            }
          >
            {badge}
          </CardBadge>
        )}
      </CardImageWrapper>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardPrice>
          {formatPrice(price)}
          {originalPrice && <CardOriginalPrice>{formatPrice(originalPrice)}</CardOriginalPrice>}
        </CardPrice>
      </CardInfo>
    </StyledProductCard>
  )
}
