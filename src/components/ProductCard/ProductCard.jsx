import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getDiscountPercentage } from '../../utils/price'
import {
  StyledProductCard,
  CardImageWrapper,
  CardImage,
  CardBadge,
  CardInfo,
  CardName,
  CardLiga,
  CardPrice,
  CardOriginalPrice,
  CardDiscountPercent,
} from './ProductCard.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

export default function ProductCard({ name, price, originalPrice, image, imageHover, badge, link, liga }) {
  const [isHover, setIsHover] = useState(false)
  const displayImage = imageHover && isHover ? imageHover : image
  const discountPercent = originalPrice ? getDiscountPercentage(originalPrice, price) : null

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
        {liga && <CardLiga>{liga}</CardLiga>}
        <CardPrice>
          {formatPrice(price)}
          {originalPrice && (
            <>
              <CardOriginalPrice>{formatPrice(originalPrice)}</CardOriginalPrice>
              {discountPercent != null && (
                <CardDiscountPercent>-{discountPercent}%</CardDiscountPercent>
              )}
            </>
          )}
        </CardPrice>
      </CardInfo>
    </StyledProductCard>
  )
}
