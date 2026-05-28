import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection'
import PromoBanner from '../../components/PromoBanner/PromoBanner'
import FeedbackSection from '../../components/FeedbackSection/FeedbackSection'
import Footer from '../../components/Footer/Footer'
import { PageWrap } from './LandingPage.styled'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <PageWrap>
        <main>
          <Hero />
          <CategoriesSection />
          <FeaturedSection />
          <PromoBanner />
          <FeedbackSection />
        </main>
        <Footer />
      </PageWrap>
    </>
  )
}
