import { featuredProducts } from '../../data/mockData'
import ProductCard from '../ProductCard/ProductCard'
import { StyledSection, SectionContainer, SectionTitle, ProductsGrid } from './FeaturedSection.styled'

export default function FeaturedSection() {
  return (
    <StyledSection>
      <SectionContainer>
        <SectionTitle>Destaques da Semana</SectionTitle>
        <ProductsGrid>
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              imageHover={product.imageHover}
              badge={product.badge}
              link={product.link}
            />
          ))}
        </ProductsGrid>
      </SectionContainer>
    </StyledSection>
  )
}
