import { useState, useEffect } from 'react'
import { RiMoneyDollarCircleLine, RiShoppingCart2Line, RiTimeLine, RiAwardLine, RiPriceTag2Line, RiPercentLine } from 'react-icons/ri'
import AdminLayout from './AdminLayout'
import { adminService } from '../../services/api/adminService'
import {
  KpiGrid, KpiCard, KpiLabel, KpiValue, KpiIcon,
  ChartSection, ChartTitle, ChartWrap, ChartBar, ChartEmpty, ChartLegend,
} from './AdminDashboard.styled'

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0)
}

const KPI_CONFIG = [
  { key: 'totalRevenue', label: 'Receita total', color: '#9B7349', icon: RiMoneyDollarCircleLine, format: formatCurrency },
  { key: 'approvedOrders', label: 'Pedidos aprovados', color: '#10B981', icon: RiAwardLine },
  { key: 'pendingOrders', label: 'Aguardando pgto', color: '#F59E0B', icon: RiTimeLine },
  { key: 'ordersToday', label: 'Pedidos hoje', color: '#3B82F6', icon: RiShoppingCart2Line },
  { key: 'avgTicket', label: 'Ticket médio', color: '#8B5CF6', icon: RiPercentLine, format: formatCurrency },
  { key: 'activeProducts', label: 'Produtos ativos', color: '#6B7280', icon: RiPriceTag2Line },
]

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [chart, setChart] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      adminService.getStats(),
      adminService.getOrdersChart(),
    ])
      .then(([s, c]) => {
        setStats(s)
        setChart(c)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  const maxRevenue = Math.max(...chart.map((d) => d.revenue), 1)
  const totalChartRevenue = chart.reduce((a, d) => a + d.revenue, 0)
  const totalChartOrders = chart.reduce((a, d) => a + d.count, 0)

  return (
    <AdminLayout title="Dashboard" subtitle="Visão geral da loja">
      <KpiGrid>
        {KPI_CONFIG.map(({ key, label, color, icon: Icon, format }) => (
          <KpiCard key={key} $color={color}>
            <KpiIcon $color={color}>
              <Icon size={36} />
            </KpiIcon>
            <KpiLabel>{label}</KpiLabel>
            <KpiValue>
              {loading ? '—' : (format ? format(stats?.[key]) : (stats?.[key] ?? 0))}
            </KpiValue>
          </KpiCard>
        ))}
      </KpiGrid>

      <ChartSection>
        <ChartTitle>Receita — últimos 30 dias</ChartTitle>

        {!loading && chart.length === 0 ? (
          <ChartEmpty>Nenhum pedido nos últimos 30 dias.</ChartEmpty>
        ) : (
          <>
            <ChartWrap>
              {loading
                ? Array.from({ length: 30 }).map((_, i) => (
                    <ChartBar key={i} $pct={Math.random() * 60 + 5} style={{ opacity: 0.15 }} />
                  ))
                : chart.map((d) => (
                    <ChartBar
                      key={d.date}
                      $pct={Math.max((d.revenue / maxRevenue) * 100, 2)}
                      data-tip={`${d.date}: ${formatCurrency(d.revenue)} (${d.count} ped.)`}
                    />
                  ))}
            </ChartWrap>
            <ChartLegend>
              <span>Receita: <strong>{formatCurrency(totalChartRevenue)}</strong></span>
              <span>Pedidos: <strong>{totalChartOrders}</strong></span>
            </ChartLegend>
          </>
        )}
      </ChartSection>
    </AdminLayout>
  )
}
