import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { contactData } from './data'
import {
  StyledContact,
  ContactContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  IntroText,
  ContactSection,
  ContactSectionTitle,
  ContactCardList,
  ContactCard,
  ContactCardLink,
  ContactCardBlock,
  ContactCardContent,
  ContactCardLabel,
  ContactCardValue,
  ContactCardLines,
  ContactPhoneList,
  ContactPhoneItem,
  ContactIcon,
} from './ContactPage.styled'

const IconEmail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const IconPhone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconAddress = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconClock = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export default function ContactPage() {
  const { intro, email, phone, address, hours } = contactData

  return (
    <StyledContact>
      <Navbar />
      <ContactContainer>
        <PageHeader>
          <PageTitle>Contato</PageTitle>
          <PageSubtitle>
            Dúvidas, sugestões ou parcerias? Fale com a gente.
          </PageSubtitle>
        </PageHeader>

        {intro && <IntroText>{intro}</IntroText>}

        <ContactSection aria-labelledby="contact-section-title">
          <ContactSectionTitle id="contact-section-title">
            Como nos encontrar
          </ContactSectionTitle>
          <ContactCardList>
            <ContactCard>
              <ContactCardLink href={email.href} rel="noopener noreferrer">
                <ContactIcon aria-hidden>
                  <IconEmail />
                </ContactIcon>
                <ContactCardContent>
                  <ContactCardLabel>{email.label}</ContactCardLabel>
                  <ContactCardValue>{email.value}</ContactCardValue>
                </ContactCardContent>
              </ContactCardLink>
            </ContactCard>

            <ContactCard>
              <ContactCardBlock>
                <ContactIcon aria-hidden>
                  <IconPhone />
                </ContactIcon>
                <ContactCardContent>
                  <ContactCardLabel>{phone.label}</ContactCardLabel>
                  <ContactPhoneList>
                    {phone.items.map((item) => (
                      <ContactPhoneItem
                        key={item.value}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir WhatsApp: ${item.value}`}
                      >
                        {item.value}
                      </ContactPhoneItem>
                    ))}
                  </ContactPhoneList>
                </ContactCardContent>
              </ContactCardBlock>
            </ContactCard>

            <ContactCard $plain>
              <ContactCardBlock>
                <ContactIcon aria-hidden>
                  <IconAddress />
                </ContactIcon>
                <ContactCardContent>
                  <ContactCardLabel>{address.label}</ContactCardLabel>
                  <ContactCardLines>
                    {address.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </ContactCardLines>
                </ContactCardContent>
              </ContactCardBlock>
            </ContactCard>

            <ContactCard $plain>
              <ContactCardBlock>
                <ContactIcon aria-hidden>
                  <IconClock />
                </ContactIcon>
                <ContactCardContent>
                  <ContactCardLabel>{hours.label}</ContactCardLabel>
                  <ContactCardLines>
                    {hours.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </ContactCardLines>
                </ContactCardContent>
              </ContactCardBlock>
            </ContactCard>
          </ContactCardList>
        </ContactSection>
      </ContactContainer>
      <Footer />
    </StyledContact>
  )
}
