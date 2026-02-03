import { SiMercadopago } from 'react-icons/si'
import { FaCreditCard, FaQrcode } from 'react-icons/fa'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { paymentPageData } from './data'
import {
  StyledPayment,
  PaymentContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  IntroText,
  ProcessorNote,
  ProcessorNoteIcon,
  ProcessorNoteContent,
  ProcessorNoteTitle,
  ProcessorNoteText,
  SectionTitle,
  MethodList,
  MethodCard,
  MethodCardIcon,
  MethodCardBody,
  MethodCardTitle,
  MethodCardContent,
} from './PaymentPage.styled'

const METHOD_ICONS = {
  card: FaCreditCard,
  pix: FaQrcode,
}

export default function PaymentPage() {
  const { intro, processorNote, methods } = paymentPageData

  return (
    <StyledPayment>
      <Navbar />
      <PaymentContainer>
        <PageHeader>
          <PageTitle>Formas de pagamento</PageTitle>
          <PageSubtitle>
            Cartão e PIX. Escolha a opção que preferir na hora da compra.
          </PageSubtitle>
        </PageHeader>

        {intro && <IntroText>{intro}</IntroText>}

        <ProcessorNote aria-labelledby="processor-note-title">
          <ProcessorNoteIcon aria-hidden>
            <SiMercadopago />
          </ProcessorNoteIcon>
          <ProcessorNoteContent>
            <ProcessorNoteTitle id="processor-note-title">
              {processorNote.title}
            </ProcessorNoteTitle>
            <ProcessorNoteText>{processorNote.text}</ProcessorNoteText>
          </ProcessorNoteContent>
        </ProcessorNote>

        <section aria-labelledby="payment-methods-title">
          <SectionTitle id="payment-methods-title">
            Opções disponíveis
          </SectionTitle>
          <MethodList>
            {methods.map((method) => {
              const Icon = METHOD_ICONS[method.id]
              return (
                <MethodCard key={method.id}>
                  <MethodCardIcon aria-hidden>
                    {Icon ? <Icon /> : null}
                  </MethodCardIcon>
                  <MethodCardBody>
                    <MethodCardTitle>{method.title}</MethodCardTitle>
                    <MethodCardContent>
                      {method.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </MethodCardContent>
                  </MethodCardBody>
                </MethodCard>
              )
            })}
          </MethodList>
        </section>
      </PaymentContainer>
      <Footer />
    </StyledPayment>
  )
}
