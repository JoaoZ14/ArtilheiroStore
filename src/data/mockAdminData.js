/**
 * Dados falsos para desenvolvimento/demo (VITE_USE_MOCK_DATA=true)
 */

import { allProducts } from './mockData'

// ── Helpers ──────────────────────────────────────────────────────────────────

function daysAgo(n) {
  const d = new Date()
  d.setDate(d.getDate() - n)
  return d.toISOString()
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// ── Pedidos ──────────────────────────────────────────────────────────────────

export const MOCK_ORDERS = [
  {
    id: 'ART-2026-0001', customer_name: 'Ana Paula Ferreira', customer_email: 'ana.ferreira@email.com',
    customer_cpf: '12345678901', status: 'PAYMENT_APPROVED', total: 439.80, item_count: 2,
    created_at: daysAgo(0),
    address: { cep: '01310100', rua: 'Av. Paulista', numero: '1578', complemento: 'Apto 42', cidade: 'São Paulo', estado: 'SP' },
    items: [
      { productId: 1, productName: 'Chapéu de palha Aurora', size: 'M', quantity: 1, unitPrice: 189.90, productImage: null },
      { productId: 2, productName: 'Chapéu aba larga Campestre', size: 'G', quantity: 1, unitPrice: 249.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '128374651' }],
  },
  {
    id: 'ART-2026-0002', customer_name: 'Juliana Costa', customer_email: 'jucosta@hotmail.com',
    customer_cpf: '98765432100', status: 'PAYMENT_PENDING', total: 169.90, item_count: 1,
    created_at: daysAgo(0),
    address: { cep: '30130110', rua: 'Rua dos Carijós', numero: '78', complemento: '', cidade: 'Belo Horizonte', estado: 'MG' },
    items: [
      { productId: 5, productName: 'Chapéu palha Trançado', size: 'Único', quantity: 1, unitPrice: 169.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'pending', status_detail: 'waiting_transfer', mp_payment_id: '928374651' }],
  },
  {
    id: 'ART-2026-0003', customer_name: 'Mariana Souza', customer_email: 'mari.souza@gmail.com',
    customer_cpf: '11122233344', status: 'SHIPPED', total: 329.90, item_count: 1,
    created_at: daysAgo(1),
    address: { cep: '40020010', rua: 'Av. Sete de Setembro', numero: '450', complemento: '', cidade: 'Salvador', estado: 'BA' },
    items: [
      { productId: 3, productName: 'Chapéu feltro Montana', size: 'P', quantity: 1, unitPrice: 329.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '112233445' }],
  },
  {
    id: 'ART-2026-0004', customer_name: 'Fernanda Lima', customer_email: 'flima@yahoo.com.br',
    customer_cpf: '55566677788', status: 'DELIVERED', total: 559.80, item_count: 2,
    created_at: daysAgo(2),
    address: { cep: '90040060', rua: 'Rua dos Andradas', numero: '1001', complemento: 'Sala 5', cidade: 'Porto Alegre', estado: 'RS' },
    items: [
      { productId: 7, productName: 'Chapéu feltro Rosê', size: 'M', quantity: 1, unitPrice: 349.90, productImage: null },
      { productId: 11, productName: 'Pulseira trançada couro', size: 'Único', quantity: 1, unitPrice: 59.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '334455667' }],
  },
  {
    id: 'ART-2026-0005', customer_name: 'Camila Rodrigues', customer_email: 'camilar@outlook.com',
    customer_cpf: '22233344455', status: 'PAYMENT_REJECTED', total: 279.90, item_count: 1,
    created_at: daysAgo(2),
    address: { cep: '69010060', rua: 'Av. Eduardo Ribeiro', numero: '520', complemento: '', cidade: 'Manaus', estado: 'AM' },
    items: [
      { productId: 4, productName: 'Chapéu vintage Ranch', size: 'M', quantity: 1, unitPrice: 279.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'rejected', status_detail: 'cc_rejected_insufficient_amount', mp_payment_id: '445566778' }],
  },
  {
    id: 'ART-2026-0006', customer_name: 'Larissa Mendes', customer_email: 'lamendes@gmail.com',
    customer_cpf: '33344455566', status: 'PAYMENT_APPROVED', total: 209.80, item_count: 2,
    created_at: daysAgo(3),
    address: { cep: '80010000', rua: 'Rua XV de Novembro', numero: '200', complemento: 'Ap 10', cidade: 'Curitiba', estado: 'PR' },
    items: [
      { productId: 10, productName: 'Lenço xadrez country', size: 'Único', quantity: 1, unitPrice: 79.90, productImage: null },
      { productId: 9, productName: 'Cinta country couro', size: 'P', quantity: 1, unitPrice: 129.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'approved', status_detail: 'accredited', mp_payment_id: '556677889' }],
  },
  {
    id: 'ART-2026-0007', customer_name: 'Beatriz Alves', customer_email: 'bealves@gmail.com',
    customer_cpf: '44455566677', status: 'PAYMENT_APPROVED', total: 199.90, item_count: 1,
    created_at: daysAgo(4),
    address: { cep: '64000020', rua: 'Rua Álvaro Mendes', numero: '91', complemento: '', cidade: 'Teresina', estado: 'PI' },
    items: [
      { productId: 12, productName: 'Chapéu aba curta Primavera', size: 'M', quantity: 1, unitPrice: 199.90, productImage: null },
    ],
    payments: [{ method: 'bolbradesco', status: 'approved', status_detail: 'accredited', mp_payment_id: '667788990' }],
  },
  {
    id: 'ART-2026-0008', customer_name: 'Patrícia Nunes', customer_email: 'pnunes@email.com',
    customer_cpf: '66677788899', status: 'PAYMENT_APPROVED', total: 479.80, item_count: 2,
    created_at: daysAgo(5),
    address: { cep: '60140001', rua: 'Av. Dom Luís', numero: '300', complemento: '', cidade: 'Fortaleza', estado: 'CE' },
    items: [
      { productId: 2, productName: 'Chapéu aba larga Campestre', size: 'P', quantity: 1, unitPrice: 249.90, productImage: null },
      { productId: 6, productName: 'Chapéu aba média Country', size: 'M', quantity: 1, unitPrice: 219.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '778899001' }],
  },
  {
    id: 'ART-2026-0009', customer_name: 'Rafaela Torres', customer_email: 'rtorres@hotmail.com',
    customer_cpf: '77788899900', status: 'CANCELLED', total: 159.90, item_count: 1,
    created_at: daysAgo(6),
    address: { cep: '74010010', rua: 'Av. Goiás', numero: '812', complemento: '', cidade: 'Goiânia', estado: 'GO' },
    items: [
      { productId: 8, productName: 'Chapéu palha Leve', size: 'P', quantity: 1, unitPrice: 159.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'cancelled', status_detail: 'expired', mp_payment_id: '889900112' }],
  },
  {
    id: 'ART-2026-0010', customer_name: 'Isabela Carvalho', customer_email: 'isacarv@gmail.com',
    customer_cpf: '88899900011', status: 'DELIVERED', total: 639.70, item_count: 3,
    created_at: daysAgo(7),
    address: { cep: '49010480', rua: 'Av. Barão de Maruim', numero: '740', complemento: '', cidade: 'Aracaju', estado: 'SE' },
    items: [
      { productId: 1, productName: 'Chapéu de palha Aurora', size: 'Único', quantity: 1, unitPrice: 189.90, productImage: null },
      { productId: 9, productName: 'Cinta country couro', size: 'M', quantity: 2, unitPrice: 129.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '990011223' }],
  },
  {
    id: 'ART-2026-0011', customer_name: 'Gabriela Rocha', customer_email: 'grocha@gmail.com',
    customer_cpf: '99900011122', status: 'PAYMENT_APPROVED', total: 349.90, item_count: 1,
    created_at: daysAgo(9),
    address: { cep: '66050380', rua: 'Travessa Angustura', numero: '55', complemento: 'Bloco B', cidade: 'Belém', estado: 'PA' },
    items: [
      { productId: 7, productName: 'Chapéu feltro Rosê', size: 'P', quantity: 1, unitPrice: 349.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'approved', status_detail: 'accredited', mp_payment_id: '100112234' }],
  },
  {
    id: 'ART-2026-0012', customer_name: 'Carolina Matos', customer_email: 'carol.matos@email.com',
    customer_cpf: '10011122233', status: 'SHIPPED', total: 469.80, item_count: 2,
    created_at: daysAgo(10),
    address: { cep: '58010440', rua: 'Av. Epitácio Pessoa', numero: '1200', complemento: '', cidade: 'João Pessoa', estado: 'PB' },
    items: [
      { productId: 3, productName: 'Chapéu feltro Montana', size: 'G', quantity: 1, unitPrice: 329.90, productImage: null },
      { productId: 11, productName: 'Pulseira trançada couro', size: 'Único', quantity: 2, unitPrice: 59.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '211223345' }],
  },
  {
    id: 'ART-2026-0013', customer_name: 'Thaís Barbosa', customer_email: 'thaisb@outlook.com',
    customer_cpf: '21122233344', status: 'PAYMENT_APPROVED', total: 219.90, item_count: 1,
    created_at: daysAgo(12),
    address: { cep: '79002030', rua: 'Av. Afonso Pena', numero: '3000', complemento: '', cidade: 'Campo Grande', estado: 'MS' },
    items: [
      { productId: 6, productName: 'Chapéu aba média Country', size: 'G', quantity: 1, unitPrice: 219.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '322334456' }],
  },
  {
    id: 'ART-2026-0014', customer_name: 'Priscila Oliveira', customer_email: 'prioli@gmail.com',
    customer_cpf: '32233344455', status: 'PAYMENT_APPROVED', total: 309.80, item_count: 2,
    created_at: daysAgo(14),
    address: { cep: '65015010', rua: 'Av. Getúlio Vargas', numero: '88', complemento: '', cidade: 'São Luís', estado: 'MA' },
    items: [
      { productId: 5, productName: 'Chapéu palha Trançado', size: 'Único', quantity: 1, unitPrice: 169.90, productImage: null },
      { productId: 10, productName: 'Lenço xadrez country', size: 'Único', quantity: 1, unitPrice: 79.90, productImage: null },
    ],
    payments: [{ method: 'bolbradesco', status: 'approved', status_detail: 'accredited', mp_payment_id: '433445567' }],
  },
  {
    id: 'ART-2026-0015', customer_name: 'Vanessa Pereira', customer_email: 'vanessa.p@email.com',
    customer_cpf: '43344455566', status: 'DELIVERED', total: 829.60, item_count: 3,
    created_at: daysAgo(18),
    address: { cep: '29010060', rua: 'Av. Jerônimo Monteiro', numero: '1000', complemento: '', cidade: 'Vitória', estado: 'ES' },
    items: [
      { productId: 2, productName: 'Chapéu aba larga Campestre', size: 'M', quantity: 2, unitPrice: 249.90, productImage: null },
      { productId: 9, productName: 'Cinta country couro', size: 'G', quantity: 1, unitPrice: 129.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '544556678' }],
  },
  {
    id: 'ART-2026-0016', customer_name: 'Daniela Freitas', customer_email: 'dani.freitas@gmail.com',
    customer_cpf: '54455566677', status: 'PAYMENT_APPROVED', total: 499.90, item_count: 1,
    created_at: daysAgo(19),
    address: { cep: '88010001', rua: 'Rua Felipe Schmidt', numero: '200', complemento: '', cidade: 'Florianópolis', estado: 'SC' },
    items: [
      { productId: 16, productName: 'Bota feminina country', size: '37', quantity: 1, unitPrice: 499.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '655667789' }],
  },
  {
    id: 'ART-2026-0017', customer_name: 'Aline Castro', customer_email: 'alinecastro@hotmail.com',
    customer_cpf: '65566677788', status: 'SHIPPED', total: 359.80, item_count: 2,
    created_at: daysAgo(20),
    address: { cep: '51010000', rua: 'Av. Boa Viagem', numero: '3200', complemento: 'Apto 801', cidade: 'Recife', estado: 'PE' },
    items: [
      { productId: 14, productName: 'Chapéu palha Verão', size: 'M', quantity: 1, unitPrice: 179.90, productImage: null },
      { productId: 18, productName: 'Cinto bordado country', size: 'M', quantity: 2, unitPrice: 89.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'approved', status_detail: 'accredited', mp_payment_id: '766778890' }],
  },
  {
    id: 'ART-2026-0018', customer_name: 'Luciana Monteiro', customer_email: 'lumonteiro@gmail.com',
    customer_cpf: '76677788899', status: 'PAYMENT_PENDING', total: 319.90, item_count: 1,
    created_at: daysAgo(21),
    address: { cep: '77001010', rua: 'Av. Teotônio Segurado', numero: '500', complemento: '', cidade: 'Palmas', estado: 'TO' },
    items: [
      { productId: 13, productName: 'Chapéu feltro Caramelo', size: 'G', quantity: 1, unitPrice: 319.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'pending', status_detail: 'waiting_transfer', mp_payment_id: '877889901' }],
  },
  {
    id: 'ART-2026-0019', customer_name: 'Simone Figueiredo', customer_email: 'simone.fig@email.com',
    customer_cpf: '87788899900', status: 'DELIVERED', total: 719.70, item_count: 3,
    created_at: daysAgo(22),
    address: { cep: '69025010', rua: 'Av. Djalma Batista', numero: '1010', complemento: '', cidade: 'Manaus', estado: 'AM' },
    items: [
      { productId: 7, productName: 'Chapéu feltro Rosê', size: 'M', quantity: 1, unitPrice: 349.90, productImage: null },
      { productId: 15, productName: 'Chapéu aba extra Rodeo', size: 'G', quantity: 1, unitPrice: 289.90, productImage: null },
      { productId: 10, productName: 'Lenço xadrez country', size: 'Único', quantity: 1, unitPrice: 79.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '988990012' }],
  },
  {
    id: 'ART-2026-0020', customer_name: 'Tatiana Lopes', customer_email: 'tatilopes@outlook.com',
    customer_cpf: '98899900011', status: 'PAYMENT_APPROVED', total: 179.90, item_count: 1,
    created_at: daysAgo(23),
    address: { cep: '76801900', rua: 'Av. Carlos Gomes', numero: '75', complemento: '', cidade: 'Porto Velho', estado: 'RO' },
    items: [
      { productId: 14, productName: 'Chapéu palha Verão', size: 'Único', quantity: 1, unitPrice: 179.90, productImage: null },
    ],
    payments: [{ method: 'bolbradesco', status: 'approved', status_detail: 'accredited', mp_payment_id: '099001123' }],
  },
  {
    id: 'ART-2026-0021', customer_name: 'Renata Azevedo', customer_email: 'renata.az@gmail.com',
    customer_cpf: '09900011122', status: 'CANCELLED', total: 289.90, item_count: 1,
    created_at: daysAgo(24),
    address: { cep: '60175047', rua: 'Rua Silva Jatahy', numero: '150', complemento: '', cidade: 'Fortaleza', estado: 'CE' },
    items: [
      { productId: 15, productName: 'Chapéu aba extra Rodeo', size: 'P', quantity: 1, unitPrice: 289.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'cancelled', status_detail: 'expired', mp_payment_id: '100112233' }],
  },
  {
    id: 'ART-2026-0022', customer_name: 'Cristiane Borges', customer_email: 'crisborges@gmail.com',
    customer_cpf: '11012233344', status: 'PAYMENT_APPROVED', total: 449.80, item_count: 2,
    created_at: daysAgo(25),
    address: { cep: '30140071', rua: 'Rua da Bahia', numero: '1000', complemento: 'Sala 3', cidade: 'Belo Horizonte', estado: 'MG' },
    items: [
      { productId: 20, productName: 'Chapéu feltro Bordô', size: 'M', quantity: 1, unitPrice: 359.90, productImage: null },
      { productId: 11, productName: 'Pulseira trançada couro', size: 'Único', quantity: 1, unitPrice: 59.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '211223344' }],
  },
  {
    id: 'ART-2026-0023', customer_name: 'Elaine Martins', customer_email: 'elainemartins@email.com',
    customer_cpf: '22123344455', status: 'DELIVERED', total: 539.80, item_count: 2,
    created_at: daysAgo(26),
    address: { cep: '74815400', rua: 'Rua 3', numero: '250', complemento: '', cidade: 'Goiânia', estado: 'GO' },
    items: [
      { productId: 2, productName: 'Chapéu aba larga Campestre', size: 'G', quantity: 1, unitPrice: 249.90, productImage: null },
      { productId: 16, productName: 'Bota feminina country', size: '38', quantity: 1, unitPrice: 289.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '322334455' }],
  },
  {
    id: 'ART-2026-0024', customer_name: 'Sandra Duarte', customer_email: 'sduarte@yahoo.com.br',
    customer_cpf: '33234455566', status: 'PAYMENT_APPROVED', total: 309.80, item_count: 2,
    created_at: daysAgo(27),
    address: { cep: '69900834', rua: 'Rua Marechal Deodoro', numero: '60', complemento: '', cidade: 'Rio Branco', estado: 'AC' },
    items: [
      { productId: 17, productName: 'Chapéu mini floral', size: 'Único', quantity: 1, unitPrice: 149.90, productImage: null },
      { productId: 9, productName: 'Cinta country couro', size: 'M', quantity: 1, unitPrice: 129.90, productImage: null },
    ],
    payments: [{ method: 'pix', status: 'approved', status_detail: 'accredited', mp_payment_id: '433445566' }],
  },
  {
    id: 'ART-2026-0025', customer_name: 'Viviane Souza', customer_email: 'vivianes@gmail.com',
    customer_cpf: '44345566677', status: 'SHIPPED', total: 639.80, item_count: 2,
    created_at: daysAgo(29),
    address: { cep: '70040020', rua: 'Esplanada dos Ministérios', numero: '100', complemento: '', cidade: 'Brasília', estado: 'DF' },
    items: [
      { productId: 13, productName: 'Chapéu feltro Caramelo', size: 'M', quantity: 1, unitPrice: 319.90, productImage: null },
      { productId: 16, productName: 'Bota feminina country', size: '36', quantity: 1, unitPrice: 319.90, productImage: null },
    ],
    payments: [{ method: 'credit_card', status: 'approved', status_detail: 'accredited', mp_payment_id: '544556677' }],
  },
]

// ── Stats ─────────────────────────────────────────────────────────────────────

const approved = MOCK_ORDERS.filter((o) => o.status === 'PAYMENT_APPROVED' || o.status === 'SHIPPED' || o.status === 'DELIVERED')
const totalRevenue = approved.reduce((acc, o) => acc + o.total, 0)
const today = new Date().toDateString()
const ordersToday = MOCK_ORDERS.filter((o) => new Date(o.created_at).toDateString() === today).length

export const MOCK_STATS = {
  totalOrders: MOCK_ORDERS.length,
  approvedOrders: approved.length,
  pendingOrders: MOCK_ORDERS.filter((o) => o.status === 'PAYMENT_PENDING').length,
  ordersToday,
  totalRevenue,
  avgTicket: approved.length ? totalRevenue / approved.length : 0,
  activeProducts: 20,
  promoProducts: 7,
}

// ── Gráfico — últimos 30 dias ─────────────────────────────────────────────────

export function buildMockChart() {
  const map = {}
  MOCK_ORDERS.forEach((o) => {
    const date = new Date(o.created_at).toISOString().split('T')[0]
    if (!map[date]) map[date] = { date, count: 0, revenue: 0 }
    if (['PAYMENT_APPROVED', 'SHIPPED', 'DELIVERED'].includes(o.status)) {
      map[date].revenue += o.total
    }
    map[date].count += 1
  })
  return Object.values(map).sort((a, b) => a.date.localeCompare(b.date))
}

// ── Helpers para paginação/filtro mock ────────────────────────────────────────

export function getMockOrders({ status, search, page = 1, limit = 20 } = {}) {
  let list = [...MOCK_ORDERS]

  if (status) list = list.filter((o) => o.status === status)
  if (search) {
    const q = search.toLowerCase()
    list = list.filter(
      (o) =>
        o.customer_name.toLowerCase().includes(q) ||
        o.customer_email.toLowerCase().includes(q) ||
        o.id.toLowerCase().includes(q)
    )
  }

  const total = list.length
  const start = (Number(page) - 1) * Number(limit)
  const orders = list.slice(start, start + Number(limit))

  return { orders, total, page: Number(page), limit: Number(limit) }
}

export function getMockOrderDetail(id) {
  const o = MOCK_ORDERS.find((o) => o.id === id) ?? null
  if (!o) return null
  return {
    id: o.id,
    status: o.status,
    total: o.total,
    createdAt: o.created_at,
    updatedAt: null,
    customer: {
      name: o.customer_name,
      email: o.customer_email,
      cpf: o.customer_cpf,
    },
    address: o.address,
    items: o.items,
    payments: o.payments,
  }
}

// ── Categorias ────────────────────────────────────────────────────────────────

export const MOCK_ADMIN_CATEGORIES = [
  { id: 1, name: 'Chapéus de palha', slug: 'chapeus-palha', link: '/categoria/chapeus-palha', image: '/categorias/chapeu-palha.jpg', sortOrder: 1 },
  { id: 2, name: 'Chapéus aba larga', slug: 'chapeus-aba', link: '/categoria/chapeus-aba', image: '/categorias/chapeu-aba-larga.jpg', sortOrder: 2 },
  { id: 3, name: 'Clássicos & feltro', slug: 'chapeus-classicos', link: '/categoria/chapeus-classicos', image: '/categorias/chapeu-feltro.jpg', sortOrder: 3 },
  { id: 4, name: 'Artigos country', slug: 'country', link: '/country', image: '/categorias/cinta-country.jpg', sortOrder: 4 },
]

export function getMockCategories() {
  return MOCK_ADMIN_CATEGORIES
}

// ── Coleções ──────────────────────────────────────────────────────────────────

export const MOCK_ADMIN_COLLECTIONS = [
  { id: 1, name: 'Palha', slug: 'palha', image: '/categorias/chapeu-palha.jpg', description: 'Chapéus de palha natural com leveza e charme country para o dia a dia.', sortOrder: 1 },
  { id: 2, name: 'Aba larga', slug: 'aba-larga', image: '/categorias/chapeu-aba-larga.jpg', description: 'Aba ampla para máxima proteção solar com elegância western.', sortOrder: 2 },
  { id: 3, name: 'Feltro', slug: 'feltro', image: '/categorias/chapeu-feltro.jpg', description: 'Feltro premium com forma americana clássica para qualquer ocasião.', sortOrder: 3 },
  { id: 4, name: 'Clássicos', slug: 'classicos', image: '/categorias/chapeu-feltro.jpg', description: 'Modelos atemporais para momentos especiais e looks inesquecíveis.', sortOrder: 4 },
  { id: 5, name: 'Country', slug: 'country', image: '/categorias/cinta-country.jpg', description: 'Cintas, lenços, botas e acessórios para completar o look country.', sortOrder: 5 },
]

export function getMockCollections() {
  return MOCK_ADMIN_COLLECTIONS
}

// ── Feedbacks ─────────────────────────────────────────────────────────────────

const fbImg = (id) => `https://images.unsplash.com/photo-${id}?w=400&q=80&auto=format&fit=crop`

export const MOCK_ADMIN_FEEDBACKS = [
  { id: 1, imageUrl: fbImg('1496747611176-843222e1e57c'), caption: '"Simplesmente apaixonada! 😍" — Ana Paula, SP', active: true, displayOrder: 1 },
  { id: 2, imageUrl: fbImg('1588850561407-ed78c282e89b'), caption: '"Qualidade excelente, vale muito!" — Márcia, MG', active: true, displayOrder: 2 },
  { id: 3, imageUrl: fbImg('1515372039744-b8f02a3ae446'), caption: '"Já é meu terceiro pedido aqui 🤩" — Juliana, RJ', active: true, displayOrder: 3 },
  { id: 4, imageUrl: fbImg('1594633312681-425c7b97ccd1'), caption: '"Muito mais bonito do que na foto! ✨" — Fernanda, RS', active: false, displayOrder: 4 },
  { id: 5, imageUrl: fbImg('1521369909029-2afed882baee'), caption: '"Chapéu lindo, entrega rápida. Nota 10!" — Carolina, PR', active: true, displayOrder: 5 },
  { id: 6, imageUrl: fbImg('1469474968028-56623f02e42e'), caption: '"Perfeito para o rodeio! Recebi muitos elogios 🎉" — Beatriz, GO', active: true, displayOrder: 6 },
]

export function getMockFeedbacks() {
  return MOCK_ADMIN_FEEDBACKS
}

// ── Produtos (para painel admin) ──────────────────────────────────────────────

export function getMockAdminProducts({ search, category } = {}) {
  let list = [...allProducts]
  if (search) {
    const q = search.toLowerCase()
    list = list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.liga || '').toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    )
  }
  if (category) list = list.filter((p) => p.category === category)
  return list
}
