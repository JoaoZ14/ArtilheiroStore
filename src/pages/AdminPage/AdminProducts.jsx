import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiAddLine } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { httpClient } from '../../services/api/httpClient'
import { adminService } from '../../services/api/adminService'
import {
  Toolbar, PrimaryBtn, Table, TableHead, TableRow, ProductThumb,
  ProductName, Badge, ActionBtn, ActionsCell, EmptyRow, Pagination,
} from './AdminProducts.styled'

function formatPrice(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0)
}

export default function AdminProducts() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    adminService.getCategories()
      .then(setCategories)
      .catch(console.error)
  }, [])

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const data = await adminService.getAdminProducts({ search, category })
      setProducts(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [search, category])

  useEffect(() => { fetchProducts() }, [fetchProducts])

  async function handleToggle(product) {
    try {
      await httpClient.patch(`/api/products/${product.id}/status`, { active: !product.active })
      fetchProducts()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <AdminLayout
      title="Produtos"
      subtitle={`${products.length} produto${products.length !== 1 ? 's' : ''} encontrado${products.length !== 1 ? 's' : ''}`}
    >
      <Toolbar>
        <input
          type="search"
          placeholder="Buscar por nome, categoria…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Todas as categorias</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>{c.name}</option>
          ))}
        </select>
        <PrimaryBtn onClick={() => navigate('/admin/produtos/novo')}>
          <RiAddLine size={16} /> Novo produto
        </PrimaryBtn>
      </Toolbar>

      <Table>
        <TableHead>
          <span>Foto</span>
          <span>Produto</span>
          <span>Categoria</span>
          <span>Preço</span>
          <span>Status</span>
          <span>Ações</span>
        </TableHead>

        {loading && <EmptyRow>Carregando…</EmptyRow>}

        {!loading && products.length === 0 && (
          <EmptyRow>Nenhum produto encontrado.</EmptyRow>
        )}

        {!loading && products.map((p) => (
          <TableRow key={p.id}>
            <ProductThumb
              src={p.image || '/favicon.jpg'}
              alt={p.name}
              onError={(e) => { e.target.src = '/favicon.jpg' }}
            />
            <ProductName>
              {p.name}
              <small>{p.liga || p.team}</small>
            </ProductName>
            <span>{p.category}</span>
            <span>
              {formatPrice(p.price)}
              {p.originalPrice && (
                <small style={{ display: 'block', color: '#9CA3AF', textDecoration: 'line-through', fontSize: '0.75rem' }}>
                  {formatPrice(p.originalPrice)}
                </small>
              )}
            </span>
            <span>
              {p.isPromo
                ? <Badge $type="promo">Promo</Badge>
                : p.active !== false
                  ? <Badge $type="active">Ativo</Badge>
                  : <Badge $type="inactive">Inativo</Badge>
              }
            </span>
            <ActionsCell>
              <ActionBtn $variant="edit" onClick={() => navigate(`/admin/produtos/${p.id}`)}>
                Editar
              </ActionBtn>
              <ActionBtn $variant="toggle" onClick={() => handleToggle(p)}>
                {p.active !== false ? 'Desativar' : 'Ativar'}
              </ActionBtn>
            </ActionsCell>
          </TableRow>
        ))}
      </Table>
    </AdminLayout>
  )
}
