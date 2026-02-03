import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { entregasPageData } from './data'
import {
  StyledEntregas,
  EntregasContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  IntroText,
  Section,
  SectionTitle,
  SectionContent,
} from './EntregasPage.styled'

export default function EntregasPage() {
  const { intro, sections } = entregasPageData

  return (
    <StyledEntregas>
      <Navbar />
      <EntregasContainer>
        <PageHeader>
          <PageTitle>Entregas</PageTitle>
          <PageSubtitle>
            Informações sobre envio e prazos para todo o Brasil.
          </PageSubtitle>
        </PageHeader>

        {intro && <IntroText>{intro}</IntroText>}

        {sections.map((sec) => (
          <Section key={sec.id} aria-labelledby={`entregas-${sec.id}`}>
            <SectionTitle id={`entregas-${sec.id}`}>{sec.title}</SectionTitle>
            <SectionContent>
              {sec.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SectionContent>
          </Section>
        ))}
      </EntregasContainer>
      <Footer />
    </StyledEntregas>
  )
}
