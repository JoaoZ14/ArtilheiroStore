import { useState, useEffect } from 'react'
import { httpClient } from '../../services/api/httpClient'
import { MOCK_FEEDBACKS } from '../../data/mockData'
import {
  Section, Container, Header, Title, Subtitle,
  Grid, Card, CardImage, CardCaption, SkeletonCard,
} from './FeedbackSection.styled'

const USE_MOCK = import.meta.env.VITE_USE_MOCK_DATA === 'true'
const SKELETON_COUNT = 4

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(true)

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

  if (!loading && feedbacks.length === 0) return null

  return (
    <Section>
      <Container>
        <Header>
          <Title>O que nossos clientes dizem</Title>
          <Subtitle>Prints reais de quem já comprou e aprovou</Subtitle>
        </Header>

        <Grid>
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
              ))
          }
        </Grid>
      </Container>
    </Section>
  )
}
