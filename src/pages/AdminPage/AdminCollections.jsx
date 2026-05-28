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

export default function AdminCollections() {
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchCollections = useCallback(async () => {
    setLoading(true)
    try {
      const data = await adminService.getCollections()
      setCollections(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchCollections() }, [fetchCollections])

  async function handleDelete(collection) {
    if (!confirm(`Excluir a coleção "${collection.name}"?`)) return
    try {
      await httpClient.delete(`/api/admin/collections/${collection.id}`)
      fetchCollections()
    } catch (err) {
      alert(err.message || 'Erro ao excluir coleção.')
    }
  }

  return (
    <AdminLayout
      title="Coleções"
      subtitle={`${collections.length} coleção${collections.length !== 1 ? 'ões' : ''} cadastrada${collections.length !== 1 ? 's' : ''}`}
    >
      <Toolbar>
        <span style={{ flex: 1, fontSize: '0.875rem', color: '#7A6B5D' }}>
          Coleções exibidas na página "Nossa coleção" e usadas nos produtos (campo Liga).
        </span>
        <PrimaryBtn onClick={() => navigate('/admin/colecoes/novo')}>
          <RiAddLine size={16} /> Nova coleção
        </PrimaryBtn>
      </Toolbar>

      <Table>
        <TableHead style={{ gridTemplateColumns: '60px 1fr 120px 1fr 80px' }}>
          <span>Foto</span>
          <span>Nome</span>
          <span>Slug</span>
          <span>Descrição</span>
          <span>Ações</span>
        </TableHead>

        {loading && <EmptyRow>Carregando…</EmptyRow>}

        {!loading && collections.length === 0 && (
          <EmptyRow>Nenhuma coleção cadastrada.</EmptyRow>
        )}

        {!loading && collections.map((col) => (
          <TableRow key={col.id} style={{ gridTemplateColumns: '60px 1fr 120px 1fr 80px' }}>
            <ProductThumb
              src={col.image || '/favicon.jpg'}
              alt={col.name}
              onError={(e) => { e.target.src = '/favicon.jpg' }}
            />
            <ProductName>
              {col.name}
              <small>Ordem: {col.sortOrder}</small>
            </ProductName>
            <span style={{ fontSize: '0.8rem', color: '#7A6B5D', fontFamily: 'monospace' }}>
              {col.slug}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#7A6B5D' }}>
              {col.description || '—'}
            </span>
            <ActionsCell>
              <ActionBtn $variant="edit" onClick={() => navigate(`/admin/colecoes/${col.id}`)}>
                Editar
              </ActionBtn>
              <ActionBtn $variant="toggle" onClick={() => handleDelete(col)}>
                Excluir
              </ActionBtn>
            </ActionsCell>
          </TableRow>
        ))}
      </Table>
    </AdminLayout>
  )
}
