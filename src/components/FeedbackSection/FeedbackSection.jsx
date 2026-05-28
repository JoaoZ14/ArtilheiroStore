import { useState, useEffect, useRef } from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { httpClient } from '../../services/api/httpClient'
import { MOCK_FEEDBACKS } from '../../data/mockData'
import {
  Section, Container, Header, Title, Subtitle,
  CarouselWrap, NavBtn, Track, Card, CardImage, CardCaption, SkeletonCard,
} from './FeedbackSection.styled'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'
const SKELETON_COUNT = 5
const SCROLL_STEP = 160

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(true)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const trackRef = useRef(null)

  useEffect(() => {
    if (USE_MOCK) {
      setFeedbacks(MOCK_FEEDBACKS.filter((fb) => fb.active))
      setLoading(false)
      return
    }
    httpClient.get('/api/feedbacks')
      .then((data) => setFeedbacks(data))
      .catch(() => setFeedbacks([]))
      .finally(() => setLoading(false))
  }, [])

  function updateNavState() {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrev(scrollLeft > 4)
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4)
  }

  useEffect(() => {
    if (loading) return
    const el = trackRef.current
    if (!el) return
    updateNavState()
    el.addEventListener('scroll', updateNavState, { passive: true })
    window.addEventListener('resize', updateNavState)
    return () => {
      el.removeEventListener('scroll', updateNavState)
      window.removeEventListener('resize', updateNavState)
    }
  }, [loading, feedbacks.length])

  function scrollBy(delta) {
    trackRef.current?.scrollBy({ left: delta, behavior: 'smooth' })
  }

  if (!loading && feedbacks.length === 0) return null

  return (
    <Section>
      <Container>
        <Header>
          <Title>O que nossos clientes dizem</Title>
          <Subtitle>Prints reais de quem já comprou e aprovou</Subtitle>
        </Header>

        <CarouselWrap>
          <NavBtn
            type="button"
            aria-label="Ver feedbacks anteriores"
            disabled={!canPrev}
            onClick={() => scrollBy(-SCROLL_STEP)}
          >
            <RiArrowLeftSLine size={22} />
          </NavBtn>

          <Track ref={trackRef}>
            {loading
              ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                  <SkeletonCard key={i} aria-hidden="true" />
                ))
              : feedbacks.map((fb) => (
                  <Card key={fb.id}>
                    <CardImage
                      src={fb.imageUrl}
                      alt={fb.caption || 'Feedback de cliente'}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                    {fb.caption && <CardCaption>{fb.caption}</CardCaption>}
                  </Card>
                ))}
          </Track>

          <NavBtn
            type="button"
            aria-label="Ver próximos feedbacks"
            disabled={!canNext}
            onClick={() => scrollBy(SCROLL_STEP)}
          >
            <RiArrowRightSLine size={22} />
          </NavBtn>
        </CarouselWrap>
      </Container>
    </Section>
  )
}
