import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RiUploadCloud2Line } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { httpClient } from '../../services/api/httpClient'
import { uploadToStorage } from '../../lib/uploadToStorage'
import {
  FormCard, FormGrid, Field, SectionTitle, CheckRow, SizesGrid, SizeToggle,
  ImagePreview, UploadBtn, FormFooter, SaveBtn, CancelBtn, ErrorMsg,
} from './AdminProductForm.styled'

const ALL_SIZES = ['Único', 'P', 'M', 'G', 'GG']

const EMPTY_FORM = {
  name: '', price: '', originalPrice: '',
  category: '', liga: '', team: '',
  badge: '', image: '', imageHover: '',
  sizes: ['M'], isPromo: false, freteGratis: false,
  material: '', shipping: 'Envio em até 5 dias úteis',
  exchange: 'Troca fácil em até 7 dias',
}

function buildSizeStock(sizes) {
  const stock = {}
  ALL_SIZES.forEach((s) => { stock[s] = sizes.includes(s) ? 5 : 0 })
  return stock
}

export default function AdminProductForm() {
  const { id } = useParams()
  const isEdit = Boolean(id) && id !== 'novo'
  const navigate = useNavigate()

  const [form, setForm] = useState(EMPTY_FORM)
  const [categories, setCategories] = useState([])
  const [collections, setCollections] = useState([])
  const [uploading, setUploading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    Promise.all([
      httpClient.get('/api/admin/categories'),
      httpClient.get('/api/admin/collections'),
    ])
      .then(([cats, cols]) => {
        setCategories(cats)
        setCollections(cols)
        if (!isEdit) {
          setForm((prev) => ({
            ...prev,
            category: cats[0]?.slug || '',
            liga: cols[0]?.name || '',
          }))
        }
      })
      .catch(console.error)
  }, [isEdit])

  useEffect(() => {
    if (!isEdit) return
    httpClient.get(`/api/products/${id}`)
      .then((p) => setForm({
        name: p.name || '',
        price: String(p.price || ''),
        originalPrice: String(p.originalPrice || ''),
        category: p.category || 'chapeus-palha',
        liga: p.liga || 'Palha',
        team: p.team || '',
        badge: p.badge || '',
        image: p.image || '',
        imageHover: p.imageHover || '',
        sizes: p.sizes || ['M'],
        isPromo: p.isPromo || false,
        freteGratis: p.frete_gratis || false,
        material: p.material || '',
        shipping: p.shipping || '',
        exchange: p.exchange || '',
      }))
      .catch(console.error)
  }, [id, isEdit])

  function set(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleSize(size) {
    setForm((prev) => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }))
  }

  async function handleImageUpload(e, field) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const url = await uploadToStorage(file, 'produtos')
      set(field, url)
    } catch (err) {
      setError(err.message)
    } finally {
      setUploading(false)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (!form.name || !form.price || !form.category) {
      setError('Nome, preço e categoria são obrigatórios.')
      return
    }

    setSaving(true)
    const payload = {
      ...form,
      price: Number(form.price),
      originalPrice: form.originalPrice ? Number(form.originalPrice) : null,
      sizeStock: buildSizeStock(form.sizes),
    }

    try {
      if (isEdit) {
        await httpClient.put(`/api/products/${id}`, payload)
      } else {
        await httpClient.post('/api/products', payload)
      }
      navigate('/admin/produtos')
    } catch (err) {
      setError(err.message || 'Erro ao salvar produto.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <AdminLayout
      title={isEdit ? 'Editar produto' : 'Novo produto'}
      subtitle={isEdit ? `ID: ${id}` : 'Preencha os dados do produto'}
    >
      <FormCard>
        <form onSubmit={handleSubmit}>
          <FormGrid>
            <SectionTitle>Informações básicas</SectionTitle>

            <Field className="full">
              <label>Nome do produto *</label>
              <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="Ex: Chapéu de palha Aurora" />
            </Field>

            <Field>
              <label>Preço (R$) *</label>
              <input type="number" min="0" step="0.01" value={form.price} onChange={(e) => set('price', e.target.value)} placeholder="189.90" />
            </Field>

            <Field>
              <label>Preço original (R$)</label>
              <input type="number" min="0" step="0.01" value={form.originalPrice} onChange={(e) => set('originalPrice', e.target.value)} placeholder="219.90 (opcional)" />
            </Field>

            <Field>
              <label>Categoria *</label>
              <select value={form.category} onChange={(e) => set('category', e.target.value)}>
                {categories.map((c) => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </Field>

            <Field>
              <label>Liga / coleção</label>
              <select value={form.liga} onChange={(e) => set('liga', e.target.value)}>
                {collections.map((col) => (
                  <option key={col.name} value={col.name}>{col.name}</option>
                ))}
              </select>
            </Field>

            <Field>
              <label>Linha / time</label>
              <input value={form.team} onChange={(e) => set('team', e.target.value)} placeholder="Ex: Linha Aurora" />
            </Field>

            <Field>
              <label>Badge (etiqueta)</label>
              <input value={form.badge} onChange={(e) => set('badge', e.target.value)} placeholder="Novo, Promo, Edição…" />
            </Field>

            <SectionTitle>Tamanhos disponíveis</SectionTitle>

            <Field className="full">
              <label>Selecione os tamanhos</label>
              <SizesGrid>
                {ALL_SIZES.map((s) => (
                  <SizeToggle key={s} type="button" $selected={form.sizes.includes(s)} onClick={() => toggleSize(s)}>
                    {s}
                  </SizeToggle>
                ))}
              </SizesGrid>
            </Field>

            <SectionTitle>Imagens</SectionTitle>

            <Field>
              <label>Imagem principal</label>
              <UploadBtn>
                <RiUploadCloud2Line size={16} />
                {uploading ? 'Enviando…' : 'Escolher arquivo'}
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'image')} disabled={uploading} />
              </UploadBtn>
              <input value={form.image} onChange={(e) => set('image', e.target.value)} placeholder="Ou cole a URL aqui" />
              <ImagePreview>
                {form.image ? <img src={form.image} alt="preview" /> : <span>Sem imagem</span>}
              </ImagePreview>
            </Field>

            <Field>
              <label>Imagem hover</label>
              <UploadBtn>
                <RiUploadCloud2Line size={16} />
                {uploading ? 'Enviando…' : 'Escolher arquivo'}
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 'imageHover')} disabled={uploading} />
              </UploadBtn>
              <input value={form.imageHover} onChange={(e) => set('imageHover', e.target.value)} placeholder="Ou cole a URL aqui" />
              <ImagePreview>
                {form.imageHover ? <img src={form.imageHover} alt="preview hover" /> : <span>Sem imagem</span>}
              </ImagePreview>
            </Field>

            <SectionTitle>Detalhes & opções</SectionTitle>

            <Field className="full">
              <label>Material</label>
              <input value={form.material} onChange={(e) => set('material', e.target.value)} placeholder="Ex: Palha natural trançada à mão" />
            </Field>

            <Field>
              <label>Informação de envio</label>
              <input value={form.shipping} onChange={(e) => set('shipping', e.target.value)} />
            </Field>

            <Field>
              <label>Política de troca</label>
              <input value={form.exchange} onChange={(e) => set('exchange', e.target.value)} />
            </Field>

            <Field className="full">
              <CheckRow>
                <input type="checkbox" checked={form.isPromo} onChange={(e) => set('isPromo', e.target.checked)} />
                Produto em promoção
              </CheckRow>
              <CheckRow>
                <input type="checkbox" checked={form.freteGratis} onChange={(e) => set('freteGratis', e.target.checked)} />
                Frete grátis
              </CheckRow>
            </Field>
          </FormGrid>

          {error && <ErrorMsg>{error}</ErrorMsg>}

          <FormFooter>
            <SaveBtn type="submit" disabled={saving || uploading}>
              {saving ? 'Salvando…' : isEdit ? 'Salvar alterações' : 'Criar produto'}
            </SaveBtn>
            <CancelBtn type="button" onClick={() => navigate('/admin/produtos')}>
              Cancelar
            </CancelBtn>
          </FormFooter>
        </form>
      </FormCard>
    </AdminLayout>
  )
}
