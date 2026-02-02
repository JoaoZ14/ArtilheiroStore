import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TeamCard from '../../components/TeamCard/TeamCard'
import { productService } from '../../services/api/productService'
import {
  StyledTimesPage,
  TimesHeader,
  TimesHeaderImage,
  TimesHeaderOverlay,
  TimesHeaderContent,
  TimesHeaderTitle,
  TimesHeaderSubtitle,
  TimesMain,
  SectionContainer,
  LeagueSection,
  LeagueTitle,
  TeamsGrid,
} from './TimesPage.styled'

// Imagens dos times brasileiros
const TEAM_IMAGES_BRASILEIRAO = {
  Flamengo: '/times/Brasileirao/flamengo%20logo.jpg',
  Corinthians: '/times/Brasileirao/corinthians%20logo.jpg',
  Palmeiras: '/times/Brasileirao/Palmeiras.jpg',
  'São Paulo': '/times/Brasileirao/SaoPaulo.jpg',
  Santos: '/times/Brasileirao/Santos.jpg',
  Grêmio: '/times/Brasileirao/Gremio.jpg',
}

function buildLeagues(products) {
  const byLiga = {}
  const seen = new Set()

  for (const p of products) {
    const liga = (p.liga || '').trim() || 'Outros'
    if (!byLiga[liga]) byLiga[liga] = []
    const key = `${liga}-${p.team}`
    if (seen.has(key)) continue
    seen.add(key)

    const isBrasileirao = /brasileirão|brasileirao/i.test(liga)
    const teamImage = isBrasileirao ? TEAM_IMAGES_BRASILEIRAO[p.team] : null

    byLiga[liga].push({
      name: p.team,
      image: teamImage || p.image,
      fallbackImage: teamImage ? p.image : null,
      link: `/produtos?time=${encodeURIComponent(p.team)}`,
    })
  }

  return Object.keys(byLiga)
    .sort((a, b) => a.localeCompare(b))
    .map((liga) => ({
      id: liga,
      name: liga,
      teams: byLiga[liga].sort((a, b) => a.name.localeCompare(b.name)),
    }))
}

export default function TimesPage() {
  const [leagues, setLeagues] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function fetchTeams() {
      try {
        const products = await productService.getAll()
        if (!isMounted) return
        const leaguesData = buildLeagues(products)
        setLeagues(leaguesData)
      } catch (error) {
        console.error('Erro ao carregar times:', error)
        setLeagues([])
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    fetchTeams()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <StyledTimesPage>
      <Navbar />
      <TimesHeader>
        <TimesHeaderImage
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80"
          alt=""
        />
        <TimesHeaderOverlay />
        <TimesHeaderContent>
          <TimesHeaderTitle>Escolha seu time</TimesHeaderTitle>
          <TimesHeaderSubtitle>
            Clique no time para ver as camisas disponíveis
          </TimesHeaderSubtitle>
        </TimesHeaderContent>
      </TimesHeader>

      <TimesMain>
        <SectionContainer>
          {isLoading ? (
            <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
              Carregando times...
            </p>
          ) : leagues.length === 0 ? (
            <p style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
              Nenhum time disponível no momento.
            </p>
          ) : (
            leagues.map((league) => (
            <LeagueSection key={league.id}>
              <LeagueTitle>{league.name}</LeagueTitle>
              <TeamsGrid>
                {league.teams.map((team) => (
                  <TeamCard
                    key={team.name}
                    name={team.name}
                    image={team.image}
                    link={team.link}
                    fallbackImage={team.fallbackImage ?? undefined}
                  />
                ))}
              </TeamsGrid>
            </LeagueSection>
            ))
          )}
        </SectionContainer>
      </TimesMain>

      <Footer />
    </StyledTimesPage>
  )
}
