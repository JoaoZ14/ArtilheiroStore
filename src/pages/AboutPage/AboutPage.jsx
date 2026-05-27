import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { IconCheck, IconHat, IconBag, IconComment } from '../../components/icons/westernIcons'
import {
  StyledAbout,
  AboutContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  Section,
  SectionTitle,
  BodyText,
  ValuesGrid,
  ValueItem,
  ValueIconWrap,
  ValueContent,
  ValueTitle,
  ValueDesc,
  StepList,
  StepItem,
  CtaSection,
  CtaText,
  CtaButton,
} from './AboutPage.styled'

const values = [
  {
    icon: IconCheck,
    title: 'Qualidade artesanal',
    desc: 'Chapéus e acessórios selecionados com cuidado e acabamento delicado.',
  },
  {
    icon: IconHat,
    title: 'Estilo western feminino',
    desc: 'Peças que unem charme country e elegância no dia a dia.',
  },
  {
    icon: IconBag,
    title: 'Compra simples',
    desc: 'Do catálogo ao checkout, tudo claro e sem complicação.',
  },
  {
    icon: IconComment,
    title: 'Atendimento próximo',
    desc: 'Suporte humano quando você precisar de ajuda.',
  },
]

const steps = [
  'Escolha seu chapéu ou acessório no catálogo.',
  'Finalize a compra com seus dados e pagamento.',
  'Receba em casa com carinho e acompanhe o pedido.',
]

export default function AboutPage() {
  return (
    <StyledAbout>
      <Navbar />
      <AboutContainer>
        <PageHeader>
          <PageTitle>Sobre a Glamour Country</PageTitle>
          <PageSubtitle>
            Chapéus femininos e artigos country com leveza, charme e espírito western.
          </PageSubtitle>
        </PageHeader>

        <Section aria-labelledby="quem-somos-title">
          <SectionTitle id="quem-somos-title">Quem somos</SectionTitle>
          <BodyText>
            <p>
              A Glamour Country nasceu para a mulher que vive o lifestyle country com estilo. Somos uma
              loja de chapéus e acessórios country com foco em modelos femininos,
              delicados e cheios de personalidade.
            </p>
            <p>
              Nosso compromisso é oferecer peças que protegem do sol, completam o
              look e contam uma história — com transparência em cada etapa da
              compra.
            </p>
          </BodyText>
        </Section>

        <Section aria-labelledby="valores-title">
          <SectionTitle id="valores-title">O que valorizamos</SectionTitle>
          <ValuesGrid>
            {values.map(({ icon: Icon, title, desc }) => (
              <ValueItem key={title}>
                <ValueIconWrap aria-hidden>
                  <Icon size={20} />
                </ValueIconWrap>
                <ValueContent>
                  <ValueTitle>{title}</ValueTitle>
                  <ValueDesc>{desc}</ValueDesc>
                </ValueContent>
              </ValueItem>
            ))}
          </ValuesGrid>
        </Section>

        <Section aria-labelledby="como-funciona-title">
          <SectionTitle id="como-funciona-title">Como funciona</SectionTitle>
          <StepList>
            {steps.map((text, i) => (
              <StepItem key={text} data-step={i + 1}>
                {text}
              </StepItem>
            ))}
          </StepList>
        </Section>

        <CtaSection>
          <CtaText>Pronta para encontrar seu próximo chapéu?</CtaText>
          <CtaButton to="/chapeus">Ver chapéus</CtaButton>
        </CtaSection>
      </AboutContainer>
      <Footer />
    </StyledAbout>
  )
}
