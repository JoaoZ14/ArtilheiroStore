import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RiUploadCloud2Line } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { httpClient } from '../../services/api/httpClient'
import { uploadToStorage } from '../../lib/uploadToStorage'
import {
  FormCard, FormGrid, Field, SectionTitle,
  ImagePreview, UploadBtn, FormFooter, SaveBtn, CancelBtn, ErrorMsg,
} from './AdminProductForm.styled'

const EMPTY_FORM = {
  name: '',
  slug: '',
  image: '',
  link: '',
  description: '',
  sortOrder: '0',
  active: true,
}

function toSlug(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

export default function AdminCollectionForm() {
  const { id } = useParams()
  const isEdit = Boolean(id) && id !== 'novo'
  const navigate = useNavigate()

  const [form, setForm] = useState(EMPTY_FORM)
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [slugTouched, setSlugTouched] = useState(false)

  useEffect(() => {
    if (!isEdit) return
    httpClient.get('/api/admin/collections')
      .then((list) => {
        const col = list.find((c) => String(c.id) === String(id))
        if (!col) return
        setForm({
          name: col.name || '',
          slug: col.slug || '',
          image: col.image || '',
          link: col.link || '',
          description: col.description || '',
          sortOrder: String(col.sortOrder ?? 0),
          active: col.active ?? true,
        })
        setSlugTouched(true)
      })
      .catch(console.error)
  }, [id, isEdit])

  function set(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function handleNameChange(value) {
    set('name', value)
    if (!slugTouched) {
      set('slug', toSlug(value))
    }
  }

  async function handleImageUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const url = await uploadToStorage(file, 'colecoes')
      set('image', url)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.name || !form.slug) {
      setError('Nome e slug são obrigatórios.')
      return
    }
    setSaving(true)
    const payload = {
      name: form.name,
      slug: form.slug,
      image: form.image || null,
      link: form.link || null,
      description: form.description || null,
      sortOrder: Number(form.sortOrder) || 0,
      active: form.active,
    }
    try {
      if (isEdit) {
        await httpClient.put(`/api/admin/collections/${id}`, payload)
      } else {
        await httpClient.post('/api/admin/collections', payload)
      }
      navigate('/admin/colecoes')
    } catch (err) {
      setError(err.message || 'Erro ao salvar coleção.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <AdminLayout
      title={isEdit ? 'Editar coleção' : 'Nova coleção'}
      subtitle={isEdit ? `ID: ${id}` : 'Preencha os dados da coleção'}
    >
      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <SectionTitle>Informações</SectionTitle>

            <Field>
              <label>Nome *</label>
              <input
                value={form.name}
                onChange={(e) => handleNameChange(e.target.value)}
                placeholder="Ex: Palha"
              />
              <small>Este nome é usado no campo "Liga" dos produtos.</small>
            </Field>

            <Field>
              <label>Slug *</label>
              <input
                value={form.slug}
                onChange={(e) => { setSlugTouched(true); set('slug', e.target.value) }}
                placeholder="Ex: palha"
              />
            </Field>

            <Field className="full">
              <label>Descrição</label>
              <textarea
                value={form.description}
                onChange={(e) => set('description', e.target.value)}
                placeholder="Ex: Palha natural com charme country e leveza no dia a dia."
                rows={3}
              />
            </Field>

            <Field className="full">
              <label>Link da coleção</label>
              <input
                value={form.link}
                onChange={(e) => set('link', e.target.value)}
                placeholder="Ex: /categoria/chapeus-palha"
              />
            </Field>

            <Field>
              <label>Ordem de exibição</label>
              <input
                type="number"
                min="0"
                value={form.sortOrder}
                onChange={(e) => set('sortOrder', e.target.value)}
              />
            </Field>

            <Field style={{ justifyContent: 'flex-end' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexDirection: 'row', textTransform: 'none', letterSpacing: 0, fontSize: '0.875rem', fontWeight: 400, color: '#3D3229' }}>
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) => set('active', e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: '#9B7349', cursor: 'pointer' }}
                />
                Coleção ativa
              </label>
            </Field>

            <SectionTitle>Imagem de capa</SectionTitle>

            <Field className="full">
              <label>Foto da coleção</label>
              <UploadBtn>
                <RiUploadCloud2Line size={16} />
                {uploading ? 'Enviando…' : 'Escolher arquivo'}
                <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
              </UploadBtn>
              <input
                value={form.image}
                onChange={(e) => set('image', e.target.value)}
                placeholder="Ou cole a URL aqui"
              />
              <ImagePreview>
                {form.image ? <img src={form.image} alt="preview" /> : <span>Sem imagem</span>}
              </ImagePreview>
            </Field>
          </FormGrid>

          {error && <ErrorMsg>{error}</ErrorMsg>}

          <FormFooter>
            <SaveBtn type="submit" disabled={saving || uploading}>
              {saving ? 'Salvando…' : isEdit ? 'Salvar alterações' : 'Criar coleção'}
            </SaveBtn>
            <CancelBtn type="button" onClick={() => navigate('/admin/colecoes')}>
              Cancelar
            </CancelBtn>
          </FormFooter>
        </form>
      </FormCard>
    </AdminLayout>
  )
}
