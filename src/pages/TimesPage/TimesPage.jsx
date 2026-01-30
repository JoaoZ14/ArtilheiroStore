import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import TeamCard from '../../components/TeamCard/TeamCard'
import { leagues } from '../../data/mockData'
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

export default function TimesPage() {
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
          {leagues.map((league) => (
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
          ))}
        </SectionContainer>
      </TimesMain>

      <Footer />
    </StyledTimesPage>
  )
}
