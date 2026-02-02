import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {
  StyledStatic,
  StaticContainer,
  StaticTitle,
  StaticContent,
} from './StaticPage.styled'

export default function StaticPage({ title, paragraphs }) {
  return (
    <StyledStatic>
      <Navbar />
      <StaticContainer>
        <StaticTitle>{title}</StaticTitle>
        <StaticContent>
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </StaticContent>
      </StaticContainer>
      <Footer />
    </StyledStatic>
  )
}
