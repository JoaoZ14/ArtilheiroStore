export const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Times', path: '/times' },
  { label: 'Brasileirão', path: '/brasileirao' },
  { label: 'Europeus', path: '/europeus' },
  { label: 'Lançamentos', path: '/lancamentos' },
  { label: 'Promoções', path: '/promocoes' },
]

export const categories = [
  {
    id: 1,
    title: 'Camisas Nacionais',
    slug: 'nacionais',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    link: '/categoria/nacionais',
  },
  {
    id: 2,
    title: 'Camisas Europeias',
    slug: 'europeias',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80',
    link: '/categoria/europeias',
  },
  {
    id: 3,
    title: 'Retrô',
    slug: 'retro',
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&q=80',
    link: '/categoria/retro',
  },
  {
    id: 4,
    title: 'Promoções',
    slug: 'promocoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    link: '/promocoes',
  },
]

export const featuredProducts = [
  {
    id: 1,
    name: 'Flamengo',
    price: 299.9,
    originalPrice: 349.9,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    badge: 'Novo',
    link: '/produto/1',
  },
  {
    id: 2,
    name: 'Corinthians',
    price: 279.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80',
    badge: null,
    link: '/produto/2',
  },
  {
    id: 3,
    name: 'Real Madrid',
    price: 399.9,
    originalPrice: 449.9,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'Promo',
    link: '/produto/3',
  },
  {
    id: 4,
    name: 'Barcelona',
    price: 389.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    badge: 'Novo',
    link: '/produto/4',
  },
  {
    id: 5,
    name: 'Palmeiras',
    price: 269.9,
    originalPrice: 319.9,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80',
    badge: 'Promo',
    link: '/produto/5',
  },
  {
    id: 6,
    name: 'São Paulo',
    price: 289.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: null,
    link: '/produto/6',
  },
  {
    id: 7,
    name: 'Manchester United',
    price: 419.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    badge: 'Novo',
    link: '/produto/7',
  },
  {
    id: 8,
    name: 'Liverpool',
    price: 409.9,
    originalPrice: 459.9,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'Promo',
    link: '/produto/8',
  },
]

export const heroData = {
  title: 'Vista a Paixão do Seu Time',
  subtitle: 'Camisas oficiais dos maiores clubes do Brasil e do mundo.',
  ctaLabel: 'Comprar agora',
  ctaLink: '/produtos',
  image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
}

export const promoBannerData = {
  title: 'Até 40% OFF',
  subtitle: 'Em camisas selecionadas',
  ctaLabel: 'Ver ofertas',
  ctaLink: '/promocoes',
  image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80',
}

// Lista completa de produtos para PLP (com filtros: time, tamanho, preço, promoção)
export const allProducts = [
  {
    id: 1,
    name: 'Flamengo 2025/26',
    price: 299.9,
    originalPrice: 349.9,
    image: '/times/Brasileirao/camisa%20flamengo%2025-26.jpg',
    imageHover: '/times/Brasileirao/camisa%20flamengo%2025-26.jpg',
    badge: 'Novo',
    link: '/produto/1',
    team: 'Flamengo',
    league: 'brasileirao',
    category: 'nacionais',
    sizes: ['P', 'M', 'G', 'GG'],
    isPromo: false,
    salesCount: 120,
    createdAt: '2025-01-15',
  },
  {
    id: 2,
    name: 'Corinthians 2025/26',
    price: 279.9,
    originalPrice: null,
    image: '/times/Brasileirao/Corinthians%2025-26.jpg',
    imageHover: '/times/Brasileirao/Corinthians%2025-26.jpg',
    badge: 'Novo',
    link: '/produto/2',
    team: 'Corinthians',
    league: 'brasileirao',
    category: 'nacionais',
    sizes: ['P', 'M', 'G', 'GG', 'EG'],
    isPromo: false,
    salesCount: 95,
    createdAt: '2024-11-01',
  },
  {
    id: 3,
    name: 'Real Madrid',
    price: 399.9,
    originalPrice: 449.9,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'Promo',
    link: '/produto/3',
    team: 'Real Madrid',
    league: 'la-liga',
    category: 'europeias',
    sizes: ['M', 'G', 'GG'],
    isPromo: true,
    salesCount: 210,
    createdAt: '2024-09-10',
  },
  {
    id: 4,
    name: 'Barcelona',
    price: 389.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    badge: 'Novo',
    link: '/produto/4',
    team: 'Barcelona',
    league: 'la-liga',
    category: 'europeias',
    sizes: ['P', 'M', 'G'],
    isPromo: false,
    salesCount: 88,
    createdAt: '2025-01-20',
  },
  {
    id: 5,
    name: 'Palmeiras',
    price: 269.9,
    originalPrice: 319.9,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80',
    badge: 'Promo',
    link: '/produto/5',
    team: 'Palmeiras',
    league: 'brasileirao',
    category: 'nacionais',
    sizes: ['P', 'M', 'G', 'GG'],
    isPromo: true,
    salesCount: 156,
    createdAt: '2024-10-05',
  },
  {
    id: 6,
    name: 'São Paulo',
    price: 289.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: null,
    link: '/produto/6',
    team: 'São Paulo',
    league: 'brasileirao',
    category: 'nacionais',
    sizes: ['M', 'G', 'GG'],
    isPromo: false,
    salesCount: 72,
    createdAt: '2024-08-20',
  },
  {
    id: 7,
    name: 'Manchester United',
    price: 419.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    badge: 'Novo',
    link: '/produto/7',
    team: 'Manchester United',
    league: 'premier-league',
    category: 'europeias',
    sizes: ['P', 'M', 'G', 'GG'],
    isPromo: false,
    salesCount: 134,
    createdAt: '2025-01-10',
  },
  {
    id: 8,
    name: 'Liverpool',
    price: 409.9,
    originalPrice: 459.9,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'Promo',
    link: '/produto/8',
    team: 'Liverpool',
    league: 'premier-league',
    category: 'europeias',
    sizes: ['M', 'G'],
    isPromo: true,
    salesCount: 98,
    createdAt: '2024-12-01',
  },
  {
    id: 9,
    name: 'Santos',
    price: 259.9,
    originalPrice: 299.9,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1542291026-7ec264c27ff?w=600&q=80',
    badge: 'Promo',
    link: '/produto/9',
    team: 'Santos',
    league: 'brasileirao',
    category: 'nacionais',
    sizes: ['P', 'M', 'G', 'GG'],
    isPromo: true,
    salesCount: 64,
    createdAt: '2024-07-15',
  },
  {
    id: 10,
    name: 'Grêmio',
    price: 274.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    badge: null,
    link: '/produto/10',
    team: 'Grêmio',
    league: 'brasileirao',
    category: 'nacionais',
    sizes: ['M', 'G', 'GG'],
    isPromo: false,
    salesCount: 81,
    createdAt: '2024-09-01',
  },
  {
    id: 11,
    name: 'Chelsea',
    price: 394.9,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    imageHover: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'Novo',
    link: '/produto/11',
    team: 'Chelsea',
    league: 'premier-league',
    category: 'europeias',
    sizes: ['P', 'M', 'G'],
    isPromo: false,
    salesCount: 67,
    createdAt: '2025-01-25',
  },
  {
    id: 12,
    name: 'Flamengo 1994',
    price: 329.9,
    originalPrice: 369.9,
    image: '/times/Brasileirao/camisa%20flamengo%201994.jpg',
    imageHover: '/times/Brasileirao/camisa%20flamengo%201994.jpg',
    badge: 'Retrô',
    link: '/produto/12',
    team: 'Flamengo',
    league: 'brasileirao',
    category: 'retro',
    sizes: ['M', 'G', 'GG'],
    isPromo: true,
    salesCount: 145,
    createdAt: '2024-11-20',
  },
  {
    id: 13,
    name: 'Flamengo 2009',
    price: 289.9,
    originalPrice: 339.9,
    image: '/times/Brasileirao/camisa%20flamengo%202009.jpg',
    imageHover: '/times/Brasileirao/camisa%20flamengo%202009.jpg',
    badge: 'Retrô',
    link: '/produto/13',
    team: 'Flamengo',
    league: 'brasileirao',
    category: 'retro',
    sizes: ['P', 'M', 'G', 'GG'],
    isPromo: false,
    salesCount: 98,
    createdAt: '2024-10-01',
  },
]

// Detalhe do produto para PDP: galeria de imagens e estoque por tamanho
export function getProductDetail(id) {
  const product = allProducts.find((p) => p.id === Number(id))
  if (!product) return null
  const baseImage = product.image
  const baseHover = product.imageHover || product.image
  // Galeria: frente, costas, detalhe (reutiliza imagens existentes como placeholder)
  const gallery = [
    { src: baseImage, label: 'Frente' },
    { src: baseHover, label: 'Costas' },
    { src: baseImage, label: 'Detalhe do tecido' },
  ]
  // Estoque por tamanho (0 = indisponível). Tamanhos possíveis: P, M, G, GG, EG
  const allSizes = ['P', 'M', 'G', 'GG', 'EG']
  const availableSizes = product.sizes || ['P', 'M', 'G', 'GG']
  const sizeStock = {}
  allSizes.forEach((s, i) => {
    if (!availableSizes.includes(s)) {
      sizeStock[s] = 0
    } else {
      // Determinístico: alguns tamanhos sem estoque (ex: G sem estoque para id ímpar)
      const outOfStock = (product.id + i) % 4 === 0
      sizeStock[s] = outOfStock ? 0 : 5
    }
  })
  return {
    ...product,
    gallery,
    sizeStock,
    material: '100% Poliéster',
    shipping: 'Envio em até 48h',
    exchange: 'Troca fácil em até 7 dias',
  }
}

// Nomes das ligas para exibição (exportado para breadcrumb PDP)
export const LEAGUE_NAMES = {
  brasileirao: 'Brasileirão',
  'premier-league': 'Premier League',
  'la-liga': 'La Liga',
}

// Imagens dos times da Série A em public/times/Brasileirao/
const TEAM_IMAGES_BRASILEIRAO = {
  Flamengo: '/times/Brasileirao/flamengo%20logo.jpg',
  Corinthians: '/times/Brasileirao/corinthians%20logo.jpg',
  Palmeiras: '/times/Brasileirao/Palmeiras.jpg',
  'São Paulo': '/times/Brasileirao/SaoPaulo.jpg',
  Santos: '/times/Brasileirao/Santos.jpg',
  Grêmio: '/times/Brasileirao/Gremio.jpg',
}

// Times agrupados por liga para a página /times
function buildLeagues() {
  const byLeague = {}
  const seen = new Set()
  for (const p of allProducts) {
    const league = p.league || 'brasileirao'
    if (!byLeague[league]) byLeague[league] = []
    const key = `${league}-${p.team}`
    if (seen.has(key)) continue
    seen.add(key)
    const isBrasileirao = league === 'brasileirao'
    const teamImage = isBrasileirao ? TEAM_IMAGES_BRASILEIRAO[p.team] : null
    byLeague[league].push({
      name: p.team,
      image: teamImage || p.image,
      fallbackImage: teamImage ? p.image : null,
      link: `/produtos?time=${encodeURIComponent(p.team)}`,
    })
  }
  const order = ['brasileirao', 'premier-league', 'la-liga']
  return order
    .filter((id) => byLeague[id]?.length)
    .map((id) => ({
      id,
      name: LEAGUE_NAMES[id] || id,
      teams: byLeague[id].sort((a, b) => a.name.localeCompare(b.name)),
    }))
}

export const leagues = buildLeagues()

// Lista plana de times (mantida para compatibilidade)
export const teams = leagues.flatMap((l) => l.teams)

// Configuração da PLP por rota/slug (header da categoria + banner)
export const plpConfig = {
  nacionais: {
    title: 'Camisas Nacionais',
    subtitle: 'Os principais times do Brasil',
    bannerImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
    categorySlug: 'nacionais',
  },
  europeias: {
    title: 'Camisas Europeias',
    subtitle: 'Os maiores clubes da Europa',
    bannerImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80',
    categorySlug: 'europeias',
  },
  retro: {
    title: 'Camisas Retrô',
    subtitle: 'Clássicos que nunca saem de moda',
    bannerImage: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80',
    categorySlug: 'retro',
  },
  produtos: {
    title: 'Todos os Produtos',
    subtitle: 'Camisas oficiais dos maiores clubes',
    bannerImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
    categorySlug: null,
  },
  times: {
    title: 'Todos os Times',
    subtitle: 'Encontre a camisa do seu time',
    bannerImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80',
    categorySlug: null,
  },
  brasileirao: {
    title: 'Camisas do Brasileirão',
    subtitle: 'Times da Série A',
    bannerImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80',
    categorySlug: 'nacionais',
  },
  europeus: {
    title: 'Camisas Europeias',
    subtitle: 'Premier League, La Liga e mais',
    bannerImage: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80',
    categorySlug: 'europeias',
  },
  lancamentos: {
    title: 'Lançamentos',
    subtitle: 'As novidades que acabaram de chegar',
    bannerImage: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80',
    categorySlug: null,
    sortDefault: 'newest',
  },
  promocoes: {
    title: 'Promoções',
    subtitle: 'Ofertas imperdíveis em camisas oficiais',
    bannerImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&q=80',
    categorySlug: null,
    filterPromoOnly: true,
  },
}

export const footerData = {
  institutional: [
    { label: 'Sobre nós', path: '/sobre' },
    { label: 'Lojas', path: '/lojas' },
    { label: 'Trabalhe conosco', path: '/trabalhe-conosco' },
    { label: 'Contato', path: '/contato' },
  ],
  help: [
    { label: 'Central de ajuda', path: '/ajuda' },
    { label: 'Troca e devolução', path: '/troca-devolucao' },
    { label: 'Entregas', path: '/entregas' },
    { label: 'Formas de pagamento', path: '/pagamento' },
  ],
  account: [
    { label: 'Meus pedidos', path: '/pedidos' },
    { label: 'Meus favoritos', path: '/favoritos' },
    { label: 'Cadastre-se', path: '/cadastro' },
    { label: 'Login', path: '/login' },
  ],
  social: [
    { name: 'facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'instagram', url: 'https://instagram.com', icon: 'instagram' },
    { name: 'twitter', url: 'https://twitter.com', icon: 'twitter' },
  ],
  copyright: '© 2025 Artilheiro Store. Todos os direitos reservados.',
}
