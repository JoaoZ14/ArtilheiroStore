import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLayout from './AdminLayout'
import { adminService } from '../../services/api/adminService'
import {
  Toolbar, Table, TableHead, TableRow, OrderId, CustomerInfo,
  StatusBadge, EmptyRow, Pagination,
} from './AdminOrders.styled'

const STATUS_OPTIONS = [
  { value: '', label: 'Todos os status' },
  { value: 'PAYMENT_PENDING', label: 'Aguardando pagamento' },
  { value: 'PAYMENT_APPROVED', label: 'Pago' },
  { value: 'PAYMENT_IN_PROCESS', label: 'Em processamento' },
  { value: 'PAYMENT_REJECTED', label: 'Pagamento recusado' },
  { value: 'SHIPPED', label: 'Enviado' },
  { value: 'DELIVERED', label: 'Entregue' },
  { value: 'CANCELLED', label: 'Cancelado' },
]

const STATUS_LABELS = {
  PAYMENT_PENDING: 'Aguardando',
  PAYMENT_APPROVED: 'Pago',
  PAYMENT_REJECTED: 'Recusado',
  PAYMENT_IN_PROCESS: 'Em processo',
  CANCELLED: 'Cancelado',
  SHIPPED: 'Enviado',
  DELIVERED: 'Entregue',
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function formatCurrency(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0)
}

const LIMIT = 20

export default function AdminOrders() {
  const [orders, setOrders] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [status, setStatus] = useState('')
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const fetchOrders = useCallback(async () => {
    setLoading(true)
    try {
      const data = await adminService.getOrders({ status, search, page, limit: LIMIT })
      setOrders(data.orders)
      setTotal(data.total)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }, [page, status, search])

  useEffect(() => { fetchOrders() }, [fetchOrders])

  function handleFilterChange(setter) {
    return (e) => {
      setter(e.target.value)
      setPage(1)
    }
  }

  const totalPages = Math.ceil(total / LIMIT)

  return (
    <AdminLayout
      title="Pedidos"
      subtitle={`${total} pedido${total !== 1 ? 's' : ''} no total`}
    >
      <Toolbar>
        <input
          type="search"
          placeholder="Buscar por nome, e-mail ou código…"
          value={search}
          onChange={handleFilterChange(setSearch)}
        />
        <select value={status} onChange={handleFilterChange(setStatus)}>
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </Toolbar>

      <Table>
        <TableHead>
          <span>Código</span>
          <span>Cliente</span>
          <span>Data</span>
          <span>Total</span>
          <span>Status</span>
          <span>Itens</span>
        </TableHead>

        {loading && <EmptyRow>Carregando…</EmptyRow>}

        {!loading && orders.length === 0 && (
          <EmptyRow>Nenhum pedido encontrado.</EmptyRow>
        )}

        {!loading && orders.map((o) => (
          <TableRow key={o.id} onClick={() => navigate(`/admin/pedidos/${o.id}`)}>
            <OrderId>{o.id}</OrderId>
            <CustomerInfo>
              {o.customer_name}
              <small>{o.customer_email}</small>
            </CustomerInfo>
            <span>{formatDate(o.created_at)}</span>
            <span>{formatCurrency(o.total)}</span>
            <StatusBadge $status={o.status}>{STATUS_LABELS[o.status] || o.status}</StatusBadge>
            <span style={{ color: '#7A6B5D' }}>{o.item_count} it.</span>
          </TableRow>
        ))}
      </Table>

      {totalPages > 1 && (
        <Pagination>
          <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>← Anterior</button>
          <span>Página {page} de {totalPages}</span>
          <button onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages}>Próxima →</button>
        </Pagination>
      )}
    </AdminLayout>
  )
}
