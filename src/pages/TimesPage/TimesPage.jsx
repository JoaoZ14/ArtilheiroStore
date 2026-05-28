import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { heroData, MOCK_COLLECTIONS } from '../../data/mockData'
import { httpClient } from '../../services/api/httpClient'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'
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

function apiCollectionsToView(apiCollections) {
  return apiCollections.map((col) => ({
    id: col.slug || slugify(col.name),
    name: col.name,
    image: col.image ?? null,
    categoryLink: col.link ?? `/produtos?liga=${encodeURIComponent(col.name)}`,
    description: col.description ?? '',
  }))
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
    if (USE_MOCK) {
      setCollections(apiCollectionsToView(MOCK_COLLECTIONS))
      setIsLoading(false)
      return
    }

    let isMounted = true

    httpClient.get('/api/collections')
      .then((data) => {
        if (!isMounted) return
        setCollections(apiCollectionsToView(data))
      })
      .catch((err) => {
        console.error('Erro ao carregar coleções:', err)
        setCollections([])
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

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
