import { useMemo, useState, useEffect } from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductCardSkeleton from '../../components/ProductCardSkeleton/ProductCardSkeleton'
import ErrorState from '../../components/ErrorState/ErrorState'
import { useToast } from '../../context/ToastContext'
import { productService } from '../../services/api/productService'
import { plpConfig } from '../../data/mockData'
import {
  StyledPLP,
  PLPHeader,
  PLPHeaderImage,
  PLPHeaderOverlay,
  PLPHeaderContent,
  PLPHeaderTitle,
  PLPHeaderSubtitle,
  PLPMain,
  PLPLayout,
  PLPSidebar,
  FilterSection,
  FilterTitle,
  FilterOption,
  FilterChip,
  FilterSelect,
  PriceRange,
  PriceInput,
  PLPContent,
  Toolbar,
  ResultCount,
  SortWrapper,
  SortLabel,
  SortSelect,
  ProductsGrid,
  MobileFilterToggle,
  SidebarWrapper,
} from './ProductListingPage.styled'

const SORT_OPTIONS = [
  { value: 'bestseller', label: 'Mais vendidos' },
  { value: 'price_asc', label: 'Menor preço' },
  { value: 'price_desc', label: 'Maior preço' },
  { value: 'newest', label: 'Lançamentos' },
]

const SIZES = ['P', 'M', 'G', 'GG', 'EG']

function getPlpKey(params, pathname) {
  const slug = params.slug
  if (slug) return slug
  const segment = pathname.replace(/^\//, '').split('/')[0]
  return segment || 'times'
}

function filterAndSortProducts(products, filters, sort, plpKey) {
  const config = plpConfig[plpKey]
  let list = [...products]

  if (config?.categorySlug) {
    list = list.filter((p) => p.category === config.categorySlug)
  }
  if (config?.filterPromoOnly) {
    list = list.filter((p) => p.isPromo)
  }

  if (filters.liga) {
    const ligaLower = filters.liga.toLowerCase()
    list = list.filter((p) => (p.liga || '').toLowerCase() === ligaLower)
  }
  if (filters.team) {
    list = list.filter((p) => p.team === filters.team)
  }
  if (filters.size) {
    list = list.filter((p) => p.sizes?.includes(filters.size))
  }
  if (filters.promoOnly) {
    list = list.filter((p) => p.isPromo)
  }
  if (filters.priceMin != null && filters.priceMin !== '') {
    const min = Number(filters.priceMin)
    if (!Number.isNaN(min)) list = list.filter((p) => p.price >= min)
  }
  if (filters.priceMax != null && filters.priceMax !== '') {
    const max = Number(filters.priceMax)
    if (!Number.isNaN(max)) list = list.filter((p) => p.price <= max)
  }

  if (sort === 'bestseller') {
    list.sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
  } else if (sort === 'price_asc') {
    list.sort((a, b) => a.price - b.price)
  } else if (sort === 'price_desc') {
    list.sort((a, b) => b.price - a.price)
  } else if (sort === 'newest') {
    list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  return list
}

function getUniqueTeams(products) {
  const teams = [...new Set(products.map((p) => p.team).filter(Boolean))]
  return teams.sort((a, b) => a.localeCompare(b))
}

function getUniqueLigas(products) {
  const ligas = [...new Set(products.map((p) => p.liga).filter(Boolean))]
  return ligas.sort((a, b) => a.localeCompare(b))
}

function filterProductsBySearchTerm(products, term) {
  if (!term?.trim()) return products
  const q = term.trim().toLowerCase()
  return products.filter(
    (p) =>
      p.name?.toLowerCase().includes(q) ||
      p.team?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q) ||
      p.liga?.toLowerCase().includes(q)
  )
}

export default function ProductListingPage() {
  const params = useParams()
  const { pathname } = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const { showError } = useToast()
  const plpKey = getPlpKey(params, pathname)
  const config = plpConfig[plpKey] || plpConfig.times

  const timeFromUrl = searchParams.get('time') || ''
  const ligaFromUrl = searchParams.get('liga') || ''
  const searchQuery = searchParams.get('q') ?? ''

  const [sort, setSort] = useState(config.sortDefault || 'bestseller')
  const [filters, setFilters] = useState({
    liga: ligaFromUrl,
    team: timeFromUrl,
    size: '',
    promoOnly: config.filterPromoOnly || false,
    priceMin: '',
    priceMax: '',
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [retryCount, setRetryCount] = useState(0)

  // Sincroniza filtros time/liga com a URL: ao ir para Lancamentos (sem params), limpa time e liga
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      team: timeFromUrl,
      liga: ligaFromUrl,
    }))
  }, [timeFromUrl, ligaFromUrl])

  // Ao trocar de categoria (ex.: clicar em Lançamentos), limpa todos os filtros e aplica config da página
  useEffect(() => {
    setSort(config.sortDefault || 'bestseller')
    setFilters({
      liga: ligaFromUrl,
      team: timeFromUrl,
      size: '',
      promoOnly: config.filterPromoOnly || false,
      priceMin: '',
      priceMax: '',
    })
  }, [plpKey])

  // Buscar produtos da API (com filtros server-side: liga, team, search)
  useEffect(() => {
    let isMounted = true

    async function fetchProducts() {
      setIsLoading(true)
      setHasError(false)
      try {
        const apiParams = {}
        if (filters.liga) apiParams.liga = filters.liga
        if (filters.team) apiParams.team = filters.team
        if (searchQuery.trim()) apiParams.search = searchQuery.trim()
        const data = await productService.getAll(apiParams)

        if (!isMounted) return
        setAllProducts(data)
        const baseList = filterProductsBySearchTerm(data, searchQuery)
        const list = filterAndSortProducts(baseList, filters, sort, plpKey)
        setProducts(list)
      } catch (error) {
        if (!isMounted) return
        console.error('Erro ao carregar produtos:', error)
        setHasError(true)
        setProducts([])
        showError('Erro ao carregar produtos. Tente novamente.')
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    fetchProducts()
    return () => { isMounted = false }
  }, [retryCount, filters.liga, filters.team, searchQuery])

  // Aplicar filtros e ordenação quando mudarem
  useEffect(() => {
    if (allProducts.length === 0) return
    
    const baseList = filterProductsBySearchTerm(allProducts, searchQuery)
    const list = filterAndSortProducts(baseList, filters, sort, plpKey)
    setProducts(list)
  }, [filters, sort, plpKey, searchQuery, allProducts])

  const handleRetry = () => {
    setHasError(false)
    setRetryCount((c) => c + 1)
  }

  const teams = useMemo(() => getUniqueTeams(allProducts), [allProducts])
  const ligas = useMemo(() => getUniqueLigas(allProducts), [allProducts])

  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
    if (key === 'liga') {
      setSearchParams((prev) => {
        const p = new URLSearchParams(prev)
        if (value) p.set('liga', value)
        else p.delete('liga')
        return p
      }, { replace: true })
    }
  }

  return (
    <StyledPLP>
      <Navbar />
      <PLPHeader>
        <PLPHeaderImage src={config.bannerImage} alt="" />
        <PLPHeaderOverlay />
        <PLPHeaderContent>
          <PLPHeaderTitle>
            {searchQuery.trim() ? `Resultados para '${searchQuery.trim()}'` : config.title}
          </PLPHeaderTitle>
          <PLPHeaderSubtitle>{config.subtitle}</PLPHeaderSubtitle>
        </PLPHeaderContent>
      </PLPHeader>

      <PLPMain>
        <PLPLayout>
          <PLPSidebar>
            <MobileFilterToggle
              type="button"
              onClick={() => setSidebarOpen((o) => !o)}
              aria-expanded={sidebarOpen}
            >
              Filtros {sidebarOpen ? '▲' : '▼'}
            </MobileFilterToggle>
            <SidebarWrapper $open={sidebarOpen}>
              <FilterSection>
                <FilterTitle>Liga</FilterTitle>
                <FilterSelect
                  value={filters.liga}
                  onChange={(e) => setFilter('liga', e.target.value)}
                  aria-label="Filtrar por liga"
                >
                  <option value="">Todas</option>
                  {ligas.map((liga) => (
                    <option key={liga} value={liga}>
                      {liga}
                    </option>
                  ))}
                </FilterSelect>
              </FilterSection>

              <FilterSection>
                <FilterTitle>Time</FilterTitle>
                <div>
                  {teams.map((team) => (
                    <FilterOption key={team}>
                      <input
                        type="radio"
                        name="team"
                        checked={filters.team === team}
                        onChange={() => setFilter('team', filters.team === team ? '' : team)}
                      />
                      {team}
                    </FilterOption>
                  ))}
                </div>
              </FilterSection>

              <FilterSection>
                <FilterTitle>Tamanho</FilterTitle>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                  {SIZES.map((s) => (
                    <FilterChip
                      key={s}
                      type="button"
                      className={filters.size === s ? 'active' : ''}
                      onClick={() => setFilter('size', filters.size === s ? '' : s)}
                    >
                      {s}
                    </FilterChip>
                  ))}
                </div>
              </FilterSection>

              <FilterSection>
                <FilterTitle>Preço</FilterTitle>
                <PriceRange>
                  <PriceInput
                    type="number"
                    placeholder="Mín. R$"
                    min="0"
                    step="10"
                    value={filters.priceMin}
                    onChange={(e) => setFilter('priceMin', e.target.value)}
                  />
                  <PriceInput
                    type="number"
                    placeholder="Máx. R$"
                    min="0"
                    step="10"
                    value={filters.priceMax}
                    onChange={(e) => setFilter('priceMax', e.target.value)}
                  />
                </PriceRange>
              </FilterSection>

              {!config.filterPromoOnly && (
                <FilterSection>
                  <FilterTitle>Promoção</FilterTitle>
                  <FilterOption>
                    <input
                      type="checkbox"
                      checked={filters.promoOnly}
                      onChange={(e) => setFilter('promoOnly', e.target.checked)}
                    />
                    Apenas em promoção
                  </FilterOption>
                </FilterSection>
              )}
            </SidebarWrapper>
          </PLPSidebar>

          <PLPContent>
            {hasError ? (
              <ErrorState onRetry={handleRetry} />
            ) : (
              <>
                {!isLoading && (
                  <Toolbar>
                    <ResultCount>
                      {products.length} produto{products.length !== 1 ? 's' : ''}
                    </ResultCount>
                    <SortWrapper>
                      <SortLabel htmlFor="plp-sort">Ordenar:</SortLabel>
                      <SortSelect
                        id="plp-sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        aria-label="Ordenação"
                      >
                        {SORT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </SortSelect>
                    </SortWrapper>
                  </Toolbar>
                )}

                {isLoading ? (
                  <ProductsGrid>
                    {Array.from({ length: 12 }, (_, i) => (
                      <ProductCardSkeleton key={`skeleton-${i}`} />
                    ))}
                  </ProductsGrid>
                ) : (
                  <>
                    <ProductsGrid>
                      {products.map((product) => (
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
                        />
                      ))}
                    </ProductsGrid>

                    {products.length === 0 && (
                      <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                        Nenhum produto encontrado com os filtros selecionados. Tente alterar os filtros.
                      </p>
                    )}
                  </>
                )}
              </>
            )}
          </PLPContent>
        </PLPLayout>
      </PLPMain>

      <Footer />
    </StyledPLP>
  )
}
