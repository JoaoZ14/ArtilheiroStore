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
