import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { httpClient } from '../../services/api/httpClient'
import { adminService } from '../../services/api/adminService'
import {
  Toolbar, PrimaryBtn, Table, TableHead, TableRow,
  ProductThumb, ProductName, Badge, ActionBtn, ActionsCell, EmptyRow,
} from './AdminProducts.styled'

export default function AdminCategories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    try {
      const data = await adminService.getCategories()
      setCategories(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchCategories() }, [fetchCategories])

  async function handleDelete(category) {
    if (!confirm(`Excluir a categoria "${category.name}"?`)) return
    try {
      await httpClient.delete(`/api/admin/categories/${category.id}`)
      fetchCategories()
    } catch (err) {
      alert(err.message || 'Erro ao excluir categoria.')
    }
  }

  return (
    <AdminLayout
      title="Categorias"
      subtitle={`${categories.length} categoria${categories.length !== 1 ? 's' : ''} cadastrada${categories.length !== 1 ? 's' : ''}`}
    >
      <Toolbar>
        <span style={{ flex: 1, fontSize: '0.875rem', color: '#7A6B5D' }}>
          Categorias exibidas na seção de destaques da home.
        </span>
        <PrimaryBtn onClick={() => navigate('/admin/categorias/novo')}>
          <RiAddLine size={16} /> Nova categoria
        </PrimaryBtn>
      </Toolbar>

      <Table>
        <TableHead style={{ gridTemplateColumns: '60px 1fr 140px 120px 80px' }}>
          <span>Foto</span>
          <span>Nome</span>
          <span>Slug</span>
          <span>Link</span>
          <span>Ações</span>
        </TableHead>

        {loading && <EmptyRow>Carregando…</EmptyRow>}

        {!loading && categories.length === 0 && (
          <EmptyRow>Nenhuma categoria cadastrada.</EmptyRow>
        )}

        {!loading && categories.map((cat) => (
          <TableRow key={cat.id} style={{ gridTemplateColumns: '60px 1fr 140px 120px 80px' }}>
            <ProductThumb
              src={cat.image || '/favicon.jpg'}
              alt={cat.name}
              onError={(e) => { e.target.src = '/favicon.jpg' }}
            />
            <ProductName>
              {cat.name}
              <small>Ordem: {cat.sortOrder}</small>
            </ProductName>
            <span style={{ fontSize: '0.8rem', color: '#7A6B5D', fontFamily: 'monospace' }}>
              {cat.slug}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#7A6B5D' }}>{cat.link}</span>
            <ActionsCell>
              <ActionBtn $variant="edit" onClick={() => navigate(`/admin/categorias/${cat.id}`)}>
                Editar
              </ActionBtn>
              <ActionBtn $variant="toggle" onClick={() => handleDelete(cat)}>
                Excluir
              </ActionBtn>
            </ActionsCell>
          </TableRow>
        ))}
      </Table>
    </AdminLayout>
  )
}
