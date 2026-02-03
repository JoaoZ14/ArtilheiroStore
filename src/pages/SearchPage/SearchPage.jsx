import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductCardSkeleton from '../../components/ProductCardSkeleton/ProductCardSkeleton'
import { useToast } from '../../context/ToastContext'
import { productService } from '../../services/api/productService'
import {
  StyledSearch,
  SearchContainer,
  SearchTitle,
  ProductsGrid,
  EmptyWrap,
  EmptyTitle,
  EmptyText,
  BackLink,
} from './SearchPage.styled'

function filterProductsByTerm(products, term) {
  if (!term?.trim()) return []
  const q = term.trim().toLowerCase()
  return products.filter(
    (p) =>
      p.name?.toLowerCase().includes(q) ||
      p.team?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q) ||
      p.liga?.toLowerCase().includes(q)
  )
}

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const { showError } = useToast()
  const q = searchParams.get('q') ?? ''
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState([])

  const hasQuery = q.trim().length > 0

  useEffect(() => {
    if (!hasQuery) {
      setResults([])
      setIsLoading(false)
      return
    }

    let isMounted = true

    async function fetchAndSearch() {
      setIsLoading(true)

      try {
        const products = await productService.getAll()
        if (!isMounted) return

        const list = filterProductsByTerm(products, q)
        setResults(list)
      } catch (error) {
        if (!isMounted) return

        console.error('Erro ao buscar produtos:', error)
        setResults([])
        showError('Erro ao buscar produtos. Tente novamente.')
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchAndSearch()

    return () => {
      isMounted = false
    }
  }, [q, hasQuery, showError])

  if (!hasQuery) {
    return (
      <StyledSearch>
        <Navbar />
        <SearchContainer>
          <SearchTitle>Busca</SearchTitle>
          <EmptyWrap>
            <EmptyTitle>Digite algo para buscar</EmptyTitle>
            <EmptyText>
              Use o campo de busca no topo da página para encontrar camisas, times ou categorias.
            </EmptyText>
            <BackLink to="/produtos">Voltar para a loja</BackLink>
          </EmptyWrap>
        </SearchContainer>
        <Footer />
      </StyledSearch>
    )
  }

  return (
    <StyledSearch>
      <Navbar />
      <SearchContainer>
        <SearchTitle>Resultados para &apos;{q}&apos;</SearchTitle>

        {isLoading ? (
          <ProductsGrid>
            {Array.from({ length: 12 }, (_, i) => (
              <ProductCardSkeleton key={`skeleton-${i}`} />
            ))}
          </ProductsGrid>
        ) : results.length === 0 ? (
          <EmptyWrap>
            <EmptyTitle>Nenhum produto encontrado</EmptyTitle>
            <EmptyText>
              Não encontramos produtos para &quot;{q}&quot;. Tente outro termo ou navegue pela loja.
            </EmptyText>
            <BackLink to="/produtos">Voltar para a loja</BackLink>
          </EmptyWrap>
        ) : (
          <ProductsGrid>
            {results.map((product) => (
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
            ))}
          </ProductsGrid>
        )}
      </SearchContainer>
      <Footer />
    </StyledSearch>
  )
}
