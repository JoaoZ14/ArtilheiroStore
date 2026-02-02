import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {
  HiOutlineBadgeCheck,
  HiOutlineEye,
  HiOutlineShoppingBag,
  HiOutlineChat,
} from 'react-icons/hi'
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
    icon: HiOutlineBadgeCheck,
    title: 'Qualidade dos produtos',
    desc: 'Trabalhamos com camisas originais e materiais que duram.',
  },
  {
    icon: HiOutlineEye,
    title: 'Transparência',
    desc: 'Processo claro desde a escolha até a entrega do pedido.',
  },
  {
    icon: HiOutlineShoppingBag,
    title: 'Experiência simples',
    desc: 'Compra objetiva, sem complicação, do catálogo ao checkout.',
  },
  {
    icon: HiOutlineChat,
    title: 'Atendimento direto',
    desc: 'Suporte honesto e objetivo quando você precisar.',
  },
]

const steps = [
  'Escolha sua camisa no catálogo.',
  'Finalize a compra com os dados e pagamento.',
  'Acompanhe seu pedido até a entrega.',
]

export default function AboutPage() {
  return (
    <StyledAbout>
      <Navbar />
      <AboutContainer>
        <PageHeader>
          <PageTitle>Sobre a Artilheiro Store</PageTitle>
          <PageSubtitle>
            Camisas de times com foco em qualidade, autenticidade e experiência
            de compra.
          </PageSubtitle>
        </PageHeader>

        <Section aria-labelledby="quem-somos-title">
          <SectionTitle id="quem-somos-title">Quem somos</SectionTitle>
          <BodyText>
            <p>
              A Artilheiro Store é uma loja especializada em camisas tailandesas de
              times do Brasil e do mundo. Existimos para quem busca produto
              original, confiança na compra e um processo simples, do catálogo
              até a entrega.
            </p>
            <p>
              Nosso foco é conectar você às camisas que representam sua paixão,
              com transparência no processo e atendimento direto quando
              precisar.
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
          <CtaText>Pronto para encontrar sua próxima camisa?</CtaText>
          <CtaButton to="/produtos">Ver produtos</CtaButton>
        </CtaSection>
      </AboutContainer>
      <Footer />
    </StyledAbout>
  )
}
