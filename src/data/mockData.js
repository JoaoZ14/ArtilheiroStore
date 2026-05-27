/** Placeholders Unsplash — URLs testadas (auto=format evita 404 em vários IDs) */
const unsplash = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`

const IMG = {
  // Opção A: chapéus e acessórios (sem modelo)
  hero: '/hero/glamour-country-hero-hats.jpg',
  // Opção B: com modelo — troque a linha acima por: '/hero/glamour-country-hero.jpg',
  hat1: unsplash('1588850561407-ed78c282e89b'),
  hat2: unsplash('1515372039744-b8f02a3ae446'),
  hat3: unsplash('1594633312681-425c7b97ccd1'),
  hat4: unsplash('1521369909029-2afed882baee'),
  field: unsplash('1469474968028-56623f02e42e', 1200),
  belt: unsplash('1551028719-00167b16eac5'),
  scarf: unsplash('1601924994987-69e26d50dc26'),
  boots: unsplash('1542291026-7eec264c27ff'),
  woman: unsplash('1496747611176-843222e1e57c'),
  categoriaPalha: '/categorias/chapeu-palha.jpg',
  categoriaAbaLarga: '/categorias/chapeu-aba-larga.jpg',
  categoriaFeltro: '/categorias/chapeu-feltro.jpg',
  categoriaCountry: '/categorias/cinta-country.jpg',
  promoPrefooter: '/banners/promo-prefooter.jpg',
}

/** Imagens e links das coleções de chapéus (página Nossa coleção) */
/** Ordem fixa das coleções de chapéus na página Nossa coleção */
export const HAT_COLLECTION_ORDER = ['Palha', 'Aba larga', 'Feltro', 'Clássicos']

export const COLLECTION_COVERS = {
  Palha: {
    image: IMG.categoriaPalha,
    link: '/categoria/chapeus-palha',
    description: 'Palha natural com charme country e leveza no dia a dia.',
  },
  'Aba larga': {
    image: IMG.categoriaAbaLarga,
    link: '/categoria/chapeus-aba',
    description: 'Aba ampla para proteção solar com elegância western.',
  },
  Feltro: {
    image: IMG.categoriaFeltro,
    link: '/categoria/chapeus-classicos',
    description: 'Feltro premium com forma americana clássica.',
  },
  Clássicos: {
    image: IMG.categoriaFeltro,
    link: '/categoria/chapeus-classicos',
    description: 'Modelos atemporais para momentos especiais.',
  },
}

export const navLinks = [
  { label: 'Início', path: '/' },
  { label: 'Chapéus', path: '/chapeus' },
  { label: 'Artigos country', path: '/country' },
  { label: 'Lançamentos', path: '/lancamentos' },
  { label: 'Promoções', path: '/promocoes' },
]

export const categories = [
  {
    id: 1,
    title: 'Chapéus de palha',
    slug: 'chapeus-palha',
    image: IMG.categoriaPalha,
    link: '/categoria/chapeus-palha',
  },
  {
    id: 2,
    title: 'Chapéus aba larga',
    slug: 'chapeus-aba',
    image: IMG.categoriaAbaLarga,
    link: '/categoria/chapeus-aba',
  },
  {
    id: 3,
    title: 'Clássicos & feltro',
    slug: 'chapeus-classicos',
    image: IMG.categoriaFeltro,
    link: '/categoria/chapeus-classicos',
  },
  {
    id: 4,
    title: 'Artigos country',
    slug: 'country',
    image: IMG.categoriaCountry,
    link: '/country',
  },
]

export const heroData = {
  title: 'Elegância country',
  subtitle: 'Chapéus e acessórios femininos com charme country e leveza.',
  ctaLabel: 'Ver chapéus',
  ctaLink: '/chapeus',
  image: IMG.hero,
}

export const promoBannerData = {
  title: 'Country, estilo e delicadeza',
  subtitle: 'Peças pensadas para a mulher que vive o lifestyle country com charme.',
  ctaLabel: 'Explorar coleção',
  ctaLink: '/chapeus',
  image: IMG.promoPrefooter,
}

export const allProducts = [
  {
    id: 1,
    name: 'Chapéu de palha Aurora',
    price: 189.9,
    originalPrice: 219.9,
    image: IMG.hat2,
    imageHover: IMG.woman,
    badge: 'Novo',
    link: '/produto/1',
    team: 'Linha Aurora',
    league: 'palha',
    liga: 'Palha',
    category: 'chapeus-palha',
    sizes: ['Único', 'P', 'M'],
    isPromo: false,
    salesCount: 84,
    createdAt: '2025-04-10',
    freteGratis: true,
  },
  {
    id: 2,
    name: 'Chapéu aba larga Campestre',
    price: 249.9,
    originalPrice: null,
    image: IMG.hat1,
    imageHover: IMG.hat4,
    badge: 'Novo',
    link: '/produto/2',
    team: 'Linha Campestre',
    league: 'aba-larga',
    liga: 'Aba larga',
    category: 'chapeus-aba',
    sizes: ['P', 'M', 'G'],
    isPromo: false,
    salesCount: 62,
    createdAt: '2025-03-22',
    freteGratis: true,
  },
  {
    id: 3,
    name: 'Chapéu feltro Montana',
    price: 329.9,
    originalPrice: 379.9,
    image: IMG.hat3,
    imageHover: IMG.hat1,
    badge: 'Promo',
    link: '/produto/3',
    team: 'Linha Montana',
    league: 'feltro',
    liga: 'Feltro',
    category: 'chapeus-classicos',
    sizes: ['P', 'M', 'G'],
    isPromo: true,
    salesCount: 41,
    createdAt: '2025-02-15',
  },
  {
    id: 4,
    name: 'Chapéu vintage Ranch',
    price: 279.9,
    originalPrice: null,
    image: IMG.hat4,
    imageHover: IMG.hat3,
    badge: null,
    link: '/produto/4',
    team: 'Linha Ranch',
    league: 'classicos',
    liga: 'Clássicos',
    category: 'chapeus-classicos',
    sizes: ['Único', 'M'],
    isPromo: false,
    salesCount: 55,
    createdAt: '2025-01-08',
  },
  {
    id: 5,
    name: 'Chapéu palha Trançado',
    price: 169.9,
    originalPrice: 199.9,
    image: IMG.hat2,
    imageHover: IMG.field,
    badge: 'Promo',
    link: '/produto/5',
    team: 'Linha Trançado',
    league: 'palha',
    liga: 'Palha',
    category: 'chapeus-palha',
    sizes: ['Único'],
    isPromo: true,
    salesCount: 98,
    createdAt: '2025-04-01',
    freteGratis: true,
  },
  {
    id: 6,
    name: 'Chapéu aba média Country',
    price: 219.9,
    originalPrice: null,
    image: IMG.hat1,
    imageHover: IMG.woman,
    badge: null,
    link: '/produto/6',
    team: 'Linha Country',
    league: 'aba-larga',
    liga: 'Aba larga',
    category: 'chapeus-aba',
    sizes: ['P', 'M', 'G'],
    isPromo: false,
    salesCount: 37,
    createdAt: '2024-12-20',
  },
  {
    id: 7,
    name: 'Chapéu feltro Rosê',
    price: 349.9,
    originalPrice: null,
    image: IMG.hat3,
    imageHover: IMG.hat4,
    badge: 'Novo',
    link: '/produto/7',
    team: 'Linha Rosê',
    league: 'feltro',
    liga: 'Feltro',
    category: 'chapeus-classicos',
    sizes: ['P', 'M'],
    isPromo: false,
    salesCount: 29,
    createdAt: '2025-04-18',
  },
  {
    id: 8,
    name: 'Chapéu palha Leve',
    price: 159.9,
    originalPrice: 189.9,
    image: IMG.hat2,
    imageHover: IMG.hat1,
    badge: 'Promo',
    link: '/produto/8',
    team: 'Linha Leve',
    league: 'palha',
    liga: 'Palha',
    category: 'chapeus-palha',
    sizes: ['Único', 'P'],
    isPromo: true,
    salesCount: 71,
    createdAt: '2024-11-10',
  },
  {
    id: 9,
    name: 'Cinta country couro',
    price: 129.9,
    originalPrice: 149.9,
    image: IMG.categoriaCountry,
    imageHover: IMG.categoriaCountry,
    badge: 'Promo',
    link: '/produto/9',
    team: 'Acessórios',
    league: 'country',
    liga: 'Country',
    category: 'country',
    sizes: ['P', 'M', 'G'],
    isPromo: true,
    salesCount: 45,
    createdAt: '2025-03-05',
  },
  {
    id: 10,
    name: 'Lenço xadrez country',
    price: 79.9,
    originalPrice: null,
    image: IMG.scarf,
    imageHover: IMG.scarf,
    badge: null,
    link: '/produto/10',
    team: 'Acessórios',
    league: 'country',
    liga: 'Country',
    category: 'country',
    sizes: ['Único'],
    isPromo: false,
    salesCount: 52,
    createdAt: '2025-02-28',
  },
  {
    id: 11,
    name: 'Pulseira trançada couro',
    price: 59.9,
    originalPrice: null,
    image: IMG.belt,
    imageHover: IMG.field,
    badge: 'Novo',
    link: '/produto/11',
    team: 'Acessórios',
    league: 'country',
    liga: 'Country',
    category: 'country',
    sizes: ['Único'],
    isPromo: false,
    salesCount: 33,
    createdAt: '2025-04-12',
  },
  {
    id: 12,
    name: 'Chapéu aba curta Primavera',
    price: 199.9,
    originalPrice: 229.9,
    image: IMG.hat4,
    imageHover: IMG.hat2,
    badge: 'Edição',
    link: '/produto/12',
    team: 'Linha Primavera',
    league: 'aba-larga',
    liga: 'Aba larga',
    category: 'chapeus-aba',
    sizes: ['P', 'M', 'G'],
    isPromo: false,
    salesCount: 28,
    createdAt: '2025-04-20',
    freteGratis: true,
  },
]

export function getProductDetail(id) {
  const product = allProducts.find((p) => p.id === Number(id))
  if (!product) return null
  const baseImage = product.image
  const baseHover = product.imageHover || product.image
  const gallery = [
    { src: baseImage, label: 'Vista principal' },
    { src: baseHover, label: 'Detalhe' },
    { src: IMG.field, label: 'Estilo country' },
  ]
  const allSizes = ['Único', 'P', 'M', 'G', 'GG']
  const availableSizes = product.sizes || ['Único', 'M', 'G']
  const sizeStock = {}
  allSizes.forEach((s, i) => {
    if (!availableSizes.includes(s)) {
      sizeStock[s] = 0
    } else {
      const outOfStock = (product.id + i) % 4 === 0
      sizeStock[s] = outOfStock ? 0 : 5
    }
  })
  return {
    ...product,
    gallery,
    sizeStock,
    material: product.category?.startsWith('chapeus')
      ? 'Palha natural ou feltro premium (conforme modelo)'
      : 'Couro legítimo e fibras naturais',
    shipping: 'Envio em até 5 dias úteis',
    exchange: 'Troca fácil em até 7 dias',
  }
}

export const COLLECTION_NAMES = {
  palha: 'Palha',
  'aba-larga': 'Aba larga',
  feltro: 'Feltro',
  classicos: 'Clássicos',
  country: 'Artigos country',
}

function buildCollections() {
  const byLeague = {}
  const seen = new Set()
  for (const p of allProducts) {
    const league = p.league || 'palha'
    if (!byLeague[league]) byLeague[league] = []
    const key = `${league}-${p.team}`
    if (seen.has(key)) continue
    seen.add(key)
    byLeague[league].push({
      name: p.team,
      image: p.image,
      fallbackImage: p.imageHover || null,
      link: `/produtos?time=${encodeURIComponent(p.team)}`,
    })
  }
  const order = ['palha', 'aba-larga', 'feltro', 'classicos', 'country']
  return order
    .filter((id) => byLeague[id]?.length)
    .map((id) => ({
      id,
      name: COLLECTION_NAMES[id] || id,
      teams: byLeague[id].sort((a, b) => a.name.localeCompare(b.name)),
    }))
}

export const leagues = buildCollections()
export const teams = leagues.flatMap((l) => l.teams)

export const plpConfig = {
  'chapeus-palha': {
    title: 'Chapéus de palha',
    subtitle: 'Leves, frescos e cheios de charme para o seu dia a dia country',
    bannerImage: IMG.categoriaPalha,
    categorySlug: 'chapeus-palha',
  },
  'chapeus-aba': {
    title: 'Chapéus aba larga',
    subtitle: 'Proteção solar com elegância western',
    bannerImage: IMG.categoriaAbaLarga,
    categorySlug: 'chapeus-aba',
  },
  'chapeus-classicos': {
    title: 'Clássicos & feltro',
    subtitle: 'Forma americana clássica em feltro premium',
    bannerImage: IMG.categoriaFeltro,
    categorySlug: 'chapeus-classicos',
  },
  country: {
    title: 'Artigos country',
    subtitle: 'Cintas, lenços e acessórios para completar o look',
    bannerImage: IMG.categoriaCountry,
    categorySlug: 'country',
  },
  produtos: {
    title: 'Todos os produtos',
    subtitle: 'Chapéus femininos e artigos com espírito country',
    bannerImage: IMG.hero,
    categorySlug: null,
  },
  chapeus: {
    title: 'Nossa coleção',
    subtitle: 'Chapéus femininos por linha e estilo country',
    bannerImage: IMG.hero,
    categorySlug: null,
    filterHatsOnly: true,
  },
  times: {
    title: 'Coleções',
    subtitle: 'Explore por linha e estilo',
    bannerImage: IMG.hero,
    categorySlug: null,
  },
  lancamentos: {
    title: 'Lançamentos',
    subtitle: 'Novidades que acabaram de chegar',
    bannerImage: IMG.hero,
    categorySlug: null,
    sortDefault: 'newest',
  },
  promocoes: {
    title: 'Promoções',
    subtitle: 'Ofertas especiais em chapéus e acessórios country',
    bannerImage: IMG.field,
    categorySlug: null,
    filterPromoOnly: true,
  },
}

export const footerData = {
  institutional: [
    { label: 'Sobre nós', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ],
  help: [
    { label: 'Central de ajuda', path: '/ajuda' },
    { label: 'Troca e devolução', path: '/troca-devolucao' },
    { label: 'Entregas', path: '/entregas' },
    { label: 'Formas de pagamento', path: '/pagamento' },
  ],
  account: [{ label: 'Meus pedidos', path: '/pedido/consultar' }],
  social: [
    { name: 'facebook', url: 'https://facebook.com', icon: 'facebook' },
    { name: 'instagram', url: 'https://instagram.com', icon: 'instagram' },
  ],
  copyright: '© 2025 Glamour Country. Todos os direitos reservados.',
}

/** Compatibilidade com FeaturedSection antigo */
export const featuredProducts = allProducts.slice(0, 8)
