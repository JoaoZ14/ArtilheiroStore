import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiAddLine, RiImageLine } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { httpClient } from '../../services/api/httpClient'
import { adminService } from '../../services/api/adminService'
import {
  Toolbar, PrimaryBtn, Grid, FeedbackCard, CardThumb,
  CardBody, CardCaption, CardMeta, Badge, Actions, ActionBtn, EmptyState,
} from './AdminFeedbacks.styled'

export default function AdminFeedbacks() {
  const [feedbacks, setFeedbacks] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchFeedbacks = useCallback(async () => {
    setLoading(true)
    try {
      const data = await adminService.getFeedbacks()
      setFeedbacks(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchFeedbacks() }, [fetchFeedbacks])

  async function handleToggle(fb) {
    try {
      await httpClient.patch(`/api/admin/feedbacks/${fb.id}/status`, { active: !fb.active })
      fetchFeedbacks()
    } catch (err) {
      console.error(err)
    }
  }

  async function handleDelete(fb) {
    if (!window.confirm(`Remover este print de feedback?`)) return
    try {
      await httpClient.delete(`/api/admin/feedbacks/${fb.id}`)
      fetchFeedbacks()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AdminLayout
      title="Feedbacks"
      subtitle={`${feedbacks.length} print${feedbacks.length !== 1 ? 's' : ''} cadastrado${feedbacks.length !== 1 ? 's' : ''}`}
    >
      <Toolbar>
        <PrimaryBtn onClick={() => navigate('/admin/feedbacks/novo')}>
          <RiAddLine size={16} /> Novo feedback
        </PrimaryBtn>
      </Toolbar>

      {loading && (
        <Grid>
          {Array.from({ length: 4 }, (_, i) => (
            <FeedbackCard key={i} style={{ background: '#F5EFE8', minHeight: 280 }} />
          ))}
        </Grid>
      )}

      {!loading && feedbacks.length === 0 && (
        <EmptyState>
          <RiImageLine size={40} style={{ opacity: 0.3, marginBottom: 12 }} />
          <p>Nenhum print de feedback cadastrado ainda.</p>
          <p style={{ marginTop: 4 }}>Clique em "Novo feedback" para adicionar o primeiro.</p>
        </EmptyState>
      )}

      {!loading && feedbacks.length > 0 && (
        <Grid>
          {feedbacks.map((fb) => (
            <FeedbackCard key={fb.id} $inactive={!fb.active}>
              <CardThumb
                src={fb.imageUrl}
                alt={fb.caption || 'Feedback de cliente'}
                onError={(e) => { e.target.src = '/favicon.jpg' }}
              />
              <CardBody>
                {fb.caption && <CardCaption>{fb.caption}</CardCaption>}
                <CardMeta>
                  <Badge $active={fb.active}>{fb.active ? 'Ativo' : 'Inativo'}</Badge>
                  <span style={{ fontSize: '0.7rem', color: '#9CA3AF' }}>#{fb.displayOrder}</span>
                </CardMeta>
                <Actions>
                  <ActionBtn $variant="edit" onClick={() => navigate(`/admin/feedbacks/${fb.id}`)}>
                    Editar
                  </ActionBtn>
                  <ActionBtn $variant="toggle" onClick={() => handleToggle(fb)}>
                    {fb.active ? 'Desativar' : 'Ativar'}
                  </ActionBtn>
                  <ActionBtn $variant="delete" onClick={() => handleDelete(fb)}>
                    Excluir
                  </ActionBtn>
                </Actions>
              </CardBody>
            </FeedbackCard>
          ))}
        </Grid>
      )}
    </AdminLayout>
  )
}
