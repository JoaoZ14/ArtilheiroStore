import { useMemo, useState, useEffect } from 'react'
import { useParams, useLocation, useSearchParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ProductCard from '../../components/ProductCard/ProductCard'
import { allProducts, plpConfig } from '../../data/mockData'
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

export default function ProductListingPage() {
  const params = useParams()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()
  const plpKey = getPlpKey(params, pathname)
  const config = plpConfig[plpKey] || plpConfig.times

  const timeFromUrl = searchParams.get('time') || ''

  const [sort, setSort] = useState(config.sortDefault || 'bestseller')
  const [filters, setFilters] = useState({
    team: timeFromUrl,
    size: '',
    promoOnly: config.filterPromoOnly || false,
    priceMin: '',
    priceMax: '',
  })
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (timeFromUrl) {
      setFilters((prev) => ({ ...prev, team: timeFromUrl }))
    }
  }, [timeFromUrl])

  const teams = useMemo(() => getUniqueTeams(allProducts), [])

  const filteredProducts = useMemo(
    () => filterAndSortProducts(allProducts, filters, sort, plpKey),
    [filters, sort, plpKey]
  )

  const setFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <StyledPLP>
      <Navbar />
      <PLPHeader>
        <PLPHeaderImage src={config.bannerImage} alt="" />
        <PLPHeaderOverlay />
        <PLPHeaderContent>
          <PLPHeaderTitle>{config.title}</PLPHeaderTitle>
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
            <Toolbar>
              <ResultCount>
                {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''}
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

            <ProductsGrid>
              {filteredProducts.map((product) => (
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

            {filteredProducts.length === 0 && (
              <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
                Nenhum produto encontrado com os filtros selecionados. Tente alterar os filtros.
              </p>
            )}
          </PLPContent>
        </PLPLayout>
      </PLPMain>

      <Footer />
    </StyledPLP>
  )
}
