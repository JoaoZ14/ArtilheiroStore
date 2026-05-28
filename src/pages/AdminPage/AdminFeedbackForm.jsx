import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RiUploadCloud2Line } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { httpClient } from '../../services/api/httpClient'
import { uploadToStorage } from '../../lib/uploadToStorage'
import {
  FormCard, FormGrid, Field, ImageArea, ImagePreview,
  UploadBtn, FormFooter, SaveBtn, CancelBtn, ErrorMsg,
} from './AdminFeedbackForm.styled'

const EMPTY_FORM = { imageUrl: '', caption: '', displayOrder: '0' }

export default function AdminFeedbackForm() {
  const { id } = useParams()
  const isEdit = Boolean(id) && id !== 'novo'
  const navigate = useNavigate()

  const [form, setForm] = useState(EMPTY_FORM)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!isEdit) return
    httpClient.get('/api/admin/feedbacks')
      .then((list) => {
        const found = list.find((fb) => String(fb.id) === id)
        if (found) {
          setForm({
            imageUrl: found.imageUrl || '',
            caption: found.caption || '',
            displayOrder: String(found.displayOrder ?? 0),
          })
        }
      })
      .catch(() => setError('Não foi possível carregar o feedback.'))
  }, [isEdit, id])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const url = await uploadToStorage(file, 'feedbacks')
      setForm((prev) => ({ ...prev, imageUrl: url }))
    } catch (err) {
      setError(err.message || 'Erro ao fazer upload da imagem.')
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.imageUrl) {
      setError('Selecione uma imagem para o feedback.')
      return
    }
    setSaving(true)
    setError('')
    try {
      const payload = {
        imageUrl: form.imageUrl,
        caption: form.caption || null,
        displayOrder: Number(form.displayOrder) || 0,
      }
      if (isEdit) {
        await httpClient.put(`/api/admin/feedbacks/${id}`, payload)
      } else {
        await httpClient.post('/api/admin/feedbacks', payload)
      }
      navigate('/admin/feedbacks')
    } catch (err) {
      setError(err.message || 'Erro ao salvar. Tente novamente.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <AdminLayout
      title={isEdit ? 'Editar Feedback' : 'Novo Feedback'}
      subtitle="Print de avaliação de cliente"
    >
      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <ImageArea>
              <label style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#3D3229' }}>
                Imagem do print *
              </label>
              <ImagePreview>
                {form.imageUrl
                  ? <img src={form.imageUrl} alt="Preview" />
                  : <span>Nenhuma imagem selecionada</span>
                }
              </ImagePreview>
              <UploadBtn>
                <RiUploadCloud2Line size={16} />
                {uploading ? 'Enviando…' : 'Selecionar imagem'}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </UploadBtn>
              <small style={{ color: '#7A6B5D', fontSize: '0.75rem' }}>
                JPG, PNG ou WEBP. Proporção recomendada: 4:5 (estilo print de celular).
              </small>
            </ImageArea>

            <Field>
              <label htmlFor="caption">Legenda <span style={{ fontWeight: 400, textTransform: 'none' }}>(opcional)</span></label>
              <textarea
                id="caption"
                name="caption"
                value={form.caption}
                onChange={handleChange}
                placeholder="Ex: Cliente satisfeita com o chapéu que recebeu 💛"
              />
              <small>Texto exibido abaixo da imagem na vitrine.</small>
            </Field>

            <Field>
              <label htmlFor="displayOrder">Ordem de exibição</label>
              <input
                id="displayOrder"
                name="displayOrder"
                type="number"
                min="0"
                value={form.displayOrder}
                onChange={handleChange}
              />
              <small>Números menores aparecem primeiro. Use 0, 1, 2…</small>
            </Field>

            {error && <ErrorMsg>{error}</ErrorMsg>}
          </FormGrid>

          <FormFooter>
            <SaveBtn type="submit" disabled={saving || uploading}>
              {saving ? 'Salvando…' : isEdit ? 'Salvar alterações' : 'Cadastrar feedback'}
            </SaveBtn>
            <CancelBtn type="button" onClick={() => navigate('/admin/feedbacks')}>
              Cancelar
            </CancelBtn>
          </FormFooter>
        </form>
      </FormCard>
    </AdminLayout>
  )
}
