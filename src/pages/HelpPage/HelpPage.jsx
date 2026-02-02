import { useState, useMemo } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { helpFAQ } from './data'
import HelpSearch from './components/HelpSearch/HelpSearch'
import HelpFAQ from './components/HelpFAQ/HelpFAQ'
import HelpEmptyState from './components/HelpEmptyState/HelpEmptyState'
import {
  StyledHelp,
  HelpContainer,
  PageHeader,
  PageTitle,
  PageSubtitle,
  SearchSection,
  FAQSection,
  FAQSectionTitle,
} from './HelpPage.styled'

function filterFAQ(items, query) {
  const q = query.trim().toLowerCase()
  if (!q) return items
  return items.filter(
    (item) =>
      item.question.toLowerCase().includes(q) ||
      item.answer.toLowerCase().includes(q) ||
      (item.keywords && item.keywords.some((k) => k.toLowerCase().includes(q)))
  )
}

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [faqOpenId, setFaqOpenId] = useState(null)

  const filteredFAQ = useMemo(
    () => filterFAQ(helpFAQ, searchQuery),
    [searchQuery]
  )

  return (
    <StyledHelp>
      <Navbar />
      <HelpContainer>
        <PageHeader>
          <PageTitle>Ajuda</PageTitle>
          <PageSubtitle>
            Encontre respostas rápidas para as principais dúvidas
          </PageSubtitle>
        </PageHeader>

        <SearchSection aria-label="Buscar dúvidas">
          <HelpSearch
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Buscar por pedidos, pagamento, entrega..."
          />
        </SearchSection>

        <FAQSection aria-labelledby="faq-title">
          <FAQSectionTitle id="faq-title">
            Perguntas frequentes
          </FAQSectionTitle>
          {filteredFAQ.length === 0 ? (
            <HelpEmptyState />
          ) : (
            <HelpFAQ
              items={filteredFAQ}
              openId={faqOpenId}
              onToggle={setFaqOpenId}
            />
          )}
        </FAQSection>
      </HelpContainer>
      <Footer />
    </StyledHelp>
  )
}
