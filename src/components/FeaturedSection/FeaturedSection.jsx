import { useState, useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton'
import ErrorState from '../ErrorState/ErrorState'
import { productService } from '../../services/api/productService'
import { StyledSection, SectionContainer, SectionTitle, ProductsGrid } from './FeaturedSection.styled'

const RECENT_LIMIT = 8

function fetchRecentProducts() {
  return productService.getAll()
}

export default function FeaturedSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const loadProducts = async () => {
    setLoading(true)
    setError(false)
    try {
      const data = await fetchRecentProducts()
      const sortedProducts = [...data]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, RECENT_LIMIT)
      setProducts(sortedProducts)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  if (error) {
    return (
      <StyledSection>
        <SectionContainer>
          <ErrorState
            message="Não foi possível carregar os produtos mais recentes"
            onRetry={loadProducts}
          />
        </SectionContainer>
      </StyledSection>
    )
  }

  return (
    <StyledSection>
      <SectionContainer>
        <SectionTitle>Produtos mais recentes</SectionTitle>
        <ProductsGrid>
          {loading ? (
            Array.from({ length: RECENT_LIMIT }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                imageHover={product.imageHover}
                badge={product.badge}
                link={product.link}
                liga={product.liga}
                freteGratis={product.frete_gratis ?? product.freteGratis}
              />
            ))
          )}
        </ProductsGrid>
      </SectionContainer>
    </StyledSection>
  )
}
