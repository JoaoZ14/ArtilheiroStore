import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {
  heroData,
  COLLECTION_COVERS,
  HAT_COLLECTION_ORDER,
} from '../../data/mockData'
import { productService } from '../../services/api/productService'
import {
  StyledTimesPage,
  TimesHeader,
  TimesHeaderImage,
  TimesHeaderOverlay,
  TimesHeaderContent,
  TimesHeaderEyebrow,
  TimesHeaderTitle,
  TimesHeaderSubtitle,
  HeaderCta,
  TimesMain,
  SectionContainer,
  LeagueSection,
  CollectionFeatured,
  CollectionFeaturedImage,
  CollectionFeaturedOverlay,
  CollectionFeaturedContent,
  LeagueTitle,
  CollectionDescription,
  FeaturedCta,
  StatusMessage,
  SkeletonGrid,
  SkeletonCard,
  SkeletonImage,
  SkeletonText,
} from './TimesPage.styled'

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
}

function buildCollections(products) {
  const linesByLiga = {}

  for (const p of products) {
    if (!p.category?.startsWith('chapeus')) continue
    const liga = (p.liga || '').trim()
    if (!liga) continue
    if (!linesByLiga[liga]) linesByLiga[liga] = []
    const key = `${liga}-${p.team}`
    if (linesByLiga[liga].some((item) => item.name === p.team)) continue
    linesByLiga[liga].push({
      name: p.team,
      link: `/produtos?time=${encodeURIComponent(p.team)}`,
    })
  }

  return HAT_COLLECTION_ORDER.map((liga) => {
    const cover = COLLECTION_COVERS[liga]
    return {
      id: slugify(liga),
      name: liga,
      image: cover?.image ?? null,
      categoryLink: cover?.link ?? `/produtos?liga=${encodeURIComponent(liga)}`,
      description: cover?.description ?? '',
      lines: (linesByLiga[liga] || []).sort((a, b) => a.name.localeCompare(b.name)),
    }
  })
}

function CollectionsSkeleton() {
  return (
    <SkeletonGrid aria-hidden="true">
      {Array.from({ length: 3 }, (_, i) => (
        <SkeletonCard key={i}>
          <SkeletonImage />
          <SkeletonText />
        </SkeletonCard>
      ))}
    </SkeletonGrid>
  )
}

export default function TimesPage() {
  const [collections, setCollections] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchCollections() {
      try {
        const products = await productService.getAll()
        if (!isMounted) return
        setCollections(buildCollections(products))
      } catch (error) {
        console.error('Erro ao carregar coleções:', error)
        setCollections(buildCollections([]))
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    fetchCollections()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <StyledTimesPage>
      <Navbar />
      <TimesHeader>
        <TimesHeaderImage src={heroData.image} alt="Chapéus country Glamour Country" />
        <TimesHeaderOverlay />
        <TimesHeaderContent>
          <TimesHeaderEyebrow>Glamour Country</TimesHeaderEyebrow>
          <TimesHeaderTitle>Nossa coleção</TimesHeaderTitle>
          <TimesHeaderSubtitle>
            Chapéus femininos por estilo country. Escolha a classificação e encontre o
            seu modelo.
          </TimesHeaderSubtitle>
          <HeaderCta to="/produtos">Ver todos os chapéus</HeaderCta>
        </TimesHeaderContent>
      </TimesHeader>

      <TimesMain>
        <SectionContainer>
          {isLoading ? (
            <CollectionsSkeleton />
          ) : (
            collections.map((collection) => (
              <LeagueSection
                key={collection.id}
                id={`coleção-${collection.id}`}
                aria-labelledby={`titulo-${collection.id}`}
              >
                <CollectionFeatured to={collection.categoryLink}>
                  {collection.image && (
                    <CollectionFeaturedImage
                      src={collection.image}
                      alt={`Chapéus ${collection.name}`}
                    />
                  )}
                  <CollectionFeaturedOverlay />
                  <CollectionFeaturedContent>
                    <LeagueTitle id={`titulo-${collection.id}`}>
                      {collection.name}
                    </LeagueTitle>
                    {collection.description && (
                      <CollectionDescription>{collection.description}</CollectionDescription>
                    )}
                    <FeaturedCta>Ver coleção →</FeaturedCta>
                  </CollectionFeaturedContent>
                </CollectionFeatured>

              </LeagueSection>
            ))
          )}
        </SectionContainer>
      </TimesMain>

      <Footer />
    </StyledTimesPage>
  )
}
