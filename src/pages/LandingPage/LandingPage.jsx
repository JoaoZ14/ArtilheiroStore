import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import FeaturedSection from '../../components/FeaturedSection/FeaturedSection'
import PromoBanner from '../../components/PromoBanner/PromoBanner'
import Footer from '../../components/Footer/Footer'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoriesSection />
        <FeaturedSection />
        <PromoBanner />
      </main>
      <Footer />
    </>
  )
}
