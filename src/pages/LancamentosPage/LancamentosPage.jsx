import { useState, useEffect, useMemo } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductCardSkeleton from '../../components/ProductCardSkeleton/ProductCardSkeleton'
import ErrorState from '../../components/ErrorState/ErrorState'
import { useToast } from '../../context/ToastContext'
import { productService } from '../../services/api/productService'
import { heroData } from '../../data/mockData'
import { groupByRecency, getUniqueLigas } from './utils'
import {
  StyledLancamentosPage,
  PageHeader,
  HeaderImage,
  HeaderOverlay,
  HeaderContent,
  HeaderEyebrow,
  HeaderTitle,
  HeaderSubtitle,
  PageMain,
  FilterBar,
  FilterLabel,
  FilterChip,
  Spotlight,
  SpotlightImageWrap,
  SpotlightImage,
  SpotlightBadge,
  SpotlightBody,
  SpotlightLabel,
  SpotlightTitle,
  SpotlightMeta,
  SpotlightPrice,
  SpotlightCta,
  Section,
  SectionHeader,
  SectionTitle,
  SectionCount,
  HighlightRail,
  ProductsGrid,
  EmptyState,
  SkeletonGrid,
} from './LancamentosPage.styled'

function formatPrice(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}

function getProductLink(product) {
  return product.link || `/produto/${product.id}`
}

function ProductGrid({ products }) {
  return (
    <ProductsGrid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          image={product.image}
          imageHover={product.imageHover}
          badge={product.badge || 'Novo'}
          link={getProductLink(product)}
          liga={product.liga}
          freteGratis={product.frete_gratis ?? product.freteGratis}
        />
      ))}
    </ProductsGrid>
  )
}

function ReleaseSection({ title, products, animationDelay }) {
  if (products.length === 0) return null

  return (
    <Section style={{ animationDelay: animationDelay ?? '0s' }}>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        <SectionCount>
          {products.length} {products.length === 1 ? 'peça' : 'peças'}
        </SectionCount>
      </SectionHeader>
      <ProductGrid products={products} />
    </Section>
  )
}

export default function LancamentosPage() {
  const { showError } = useToast()
  const [allProducts, setAllProducts] = useState([])
  const [ligaFilter, setLigaFilter] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    let isMounted = true

    async function fetchProducts() {
      setIsLoading(true)
      setHasError(false)
      try {
        const data = await productService.getAll()
        if (isMounted) setAllProducts(data)
      } catch (error) {
        console.error('Erro ao carregar lançamentos:', error)
        if (isMounted) {
          setHasError(true)
          showError('Erro ao carregar lançamentos. Tente novamente.')
        }
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    fetchProducts()
    return () => {
      isMounted = false
    }
  }, [retryCount])

  const filteredProducts = useMemo(() => {
    if (!ligaFilter) return allProducts
    return allProducts.filter((p) => p.liga === ligaFilter)
  }, [allProducts, ligaFilter])

  const groups = useMemo(() => groupByRecency(filteredProducts), [filteredProducts])
  const ligas = useMemo(() => getUniqueLigas(allProducts), [allProducts])

  return (
    <StyledLancamentosPage>
      <Navbar />

      <PageHeader>
        <HeaderImage src={heroData.image} alt="" />
        <HeaderOverlay />
        <HeaderContent>
          <HeaderEyebrow>Novidades</HeaderEyebrow>
          <HeaderTitle>Lançamentos</HeaderTitle>
          <HeaderSubtitle>
            Os modelos que acabaram de chegar — em destaque, por coleção e por data.
          </HeaderSubtitle>
        </HeaderContent>
      </PageHeader>

      <PageMain>
        {hasError ? (
          <ErrorState onRetry={() => setRetryCount((c) => c + 1)} />
        ) : isLoading ? (
          <SkeletonGrid aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </SkeletonGrid>
        ) : filteredProducts.length === 0 ? (
          <EmptyState>
            {ligaFilter
              ? `Nenhum lançamento na coleção “${ligaFilter}”.`
              : 'Nenhum lançamento disponível no momento.'}
          </EmptyState>
        ) : (
          <>
            {ligas.length > 1 && (
              <FilterBar>
                <FilterLabel>Coleção:</FilterLabel>
                <FilterChip
                  type="button"
                  className={ligaFilter === '' ? 'active' : ''}
                  onClick={() => setLigaFilter('')}
                >
                  Todas
                </FilterChip>
                {ligas.map((liga) => (
                  <FilterChip
                    key={liga}
                    type="button"
                    className={ligaFilter === liga ? 'active' : ''}
                    onClick={() => setLigaFilter(ligaFilter === liga ? '' : liga)}
                  >
                    {liga}
                  </FilterChip>
                ))}
              </FilterBar>
            )}

            {groups.spotlight && (
              <Spotlight to={getProductLink(groups.spotlight)}>
                <SpotlightImageWrap>
                  <SpotlightImage
                    src={groups.spotlight.imageHover || groups.spotlight.image}
                    alt={groups.spotlight.name}
                  />
                  <SpotlightBadge>Destaque</SpotlightBadge>
                </SpotlightImageWrap>
                <SpotlightBody>
                  <SpotlightLabel>Último lançamento</SpotlightLabel>
                  <SpotlightTitle>{groups.spotlight.name}</SpotlightTitle>
                  {groups.spotlight.liga && (
                    <SpotlightMeta>{groups.spotlight.liga}</SpotlightMeta>
                  )}
                  <SpotlightPrice>{formatPrice(groups.spotlight.price)}</SpotlightPrice>
                  <SpotlightCta>Ver detalhes</SpotlightCta>
                </SpotlightBody>
              </Spotlight>
            )}

            {groups.highlights.length > 0 && (
              <Section>
                <SectionHeader>
                  <SectionTitle>Em destaque</SectionTitle>
                  <SectionCount>Deslize para ver mais</SectionCount>
                </SectionHeader>
                <HighlightRail>
                  {groups.highlights.map((product) => (
                    <ProductCard
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      image={product.image}
                      imageHover={product.imageHover}
                      badge={product.badge || 'Novo'}
                      link={getProductLink(product)}
                      liga={product.liga}
                      freteGratis={product.frete_gratis ?? product.freteGratis}
                    />
                  ))}
                </HighlightRail>
              </Section>
            )}

            <ReleaseSection
              title="Chegou esta semana"
              products={groups.thisWeek}
              animationDelay="0.2s"
            />
            <ReleaseSection title="Este mês" products={groups.thisMonth} animationDelay="0.25s" />
            <ReleaseSection
              title="Lançamentos anteriores"
              products={groups.earlier}
              animationDelay="0.3s"
            />
          </>
        )}
      </PageMain>

      <Footer />
    </StyledLancamentosPage>
  )
}
