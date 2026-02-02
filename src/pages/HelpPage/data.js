/** Seções no estilo documentação: título + itens (link ou faqId) */
export const helpDocSections = [
  {
    id: 'pedidos',
    title: 'Pedidos',
    items: [
      { label: 'Acompanhar pedido', link: '/pedido/consultar' },
      { label: 'Status do pedido', link: '/pedido/consultar' },
      { label: 'Cancelamento', faqId: 'faq-3' },
      { label: 'Histórico de compras', link: '/pedidos' },
    ],
  },
  {
    id: 'pagamento',
    title: 'Pagamento',
    items: [
      { label: 'Formas de pagamento', link: '/pagamento' },
      { label: 'Pagamento recusado', faqId: 'faq-2' },
      { label: 'Reembolso', faqId: 'faq-4' },
      { label: 'Estorno', faqId: 'faq-4' },
    ],
  },
  {
    id: 'entrega',
    title: 'Entrega',
    items: [
      { label: 'Prazos', faqId: 'faq-6' },
      { label: 'Rastreamento', faqId: 'faq-7' },
      { label: 'Problemas na entrega', link: '/entregas' },
    ],
  },
  {
    id: 'conta',
    title: 'Conta',
    items: [
      { label: 'Dados pessoais', link: '/cadastro' },
      { label: 'Segurança', link: '/login' },
      { label: 'Senha e acesso', faqId: 'faq-8' },
    ],
  },
]

export const helpFAQ = [
  {
    id: 'faq-1',
    sectionId: 'pedidos',
    question: 'Como acompanhar meu pedido?',
    answer:
      'Você pode acompanhar seu pedido acessando a área "Consultar pedido" com seu e-mail e o código do pedido. Lá você verá o status atualizado e o histórico de movimentações.',
    keywords: ['pedido', 'acompanhar', 'rastreio', 'status', 'código'],
  },
  {
    id: 'faq-2',
    sectionId: 'pagamentos',
    question: 'Meu pagamento foi recusado, o que fazer?',
    answer:
      'Confira se os dados do cartão estão corretos e se há limite disponível. Tente outra forma de pagamento (Pix, boleto ou outro cartão). Se o problema persistir, entre em contato conosco.',
    keywords: ['pagamento', 'recusado', 'cartão', 'erro', 'negado'],
  },
  {
    id: 'faq-3',
    sectionId: 'pedidos',
    question: 'Posso cancelar um pedido?',
    answer:
      'Sim. Enquanto o pedido não tiver sido enviado, você pode solicitar o cancelamento pelo e-mail de confirmação ou entrando em contato. Após o envio, consulte a política de troca e devolução.',
    keywords: ['cancelar', 'pedido', 'cancelamento'],
  },
  {
    id: 'faq-4',
    sectionId: 'pagamentos',
    question: 'Como solicitar reembolso?',
    answer:
      'O reembolso é processado após a devolução do produto ou em caso de cancelamento antes do envio. O valor volta na mesma forma de pagamento em até alguns dias úteis.',
    keywords: ['reembolso', 'estorno', 'devolução', 'dinheiro'],
  },
  {
    id: 'faq-5',
    sectionId: 'produtos',
    question: 'Como trocar um produto?',
    answer:
      'Entre em contato em até 7 dias após o recebimento e informe o motivo. Após a aprovação, você receberá as instruções para envio. Confira a página Troca e devolução para o passo a passo.',
    keywords: ['troca', 'trocar', 'produto', 'tamanho', 'devolução'],
  },
  {
    id: 'faq-6',
    sectionId: 'entrega',
    question: 'Qual o prazo de entrega?',
    answer:
      'O prazo varia conforme sua região. Após a confirmação do pagamento, o pedido é preparado e enviado em até 2 dias úteis. O prazo total costuma ser de 5 a 15 dias úteis. Consulte a página Entregas para a tabela completa.',
    keywords: ['prazo', 'entrega', 'envio', 'dias', 'demora'],
  },
  {
    id: 'faq-7',
    sectionId: 'entrega',
    question: 'Como rastrear minha entrega?',
    answer:
      'O código de rastreio é enviado por e-mail quando o pedido é despachado. Use esse código no site dos Correios ou da transportadora para acompanhar em tempo real.',
    keywords: ['rastreio', 'rastrear', 'código', 'correios', 'transportadora'],
  },
  {
    id: 'faq-8',
    sectionId: 'conta-seguranca',
    question: 'Esqueci minha senha, como recuperar?',
    answer:
      'Na tela de login, clique em "Esqueci minha senha" e informe o e-mail cadastrado. Você receberá um link para criar uma nova senha. Se não receber o e-mail, verifique a pasta de spam.',
    keywords: ['senha', 'esqueci', 'recuperar', 'login', 'acesso'],
  },
]

/** Dúvidas frequentes: texto + faqId para abrir o accordion */
export const popularQuestions = [
  { label: 'Como acompanhar meu pedido?', faqId: 'faq-1' },
  { label: 'Meu pagamento foi recusado', faqId: 'faq-2' },
  { label: 'Cancelamento de pedido', faqId: 'faq-3' },
  { label: 'Troca ou devolução', faqId: 'faq-5' },
  { label: 'Prazo de entrega', faqId: 'faq-6' },
]

export const popularFAQIds = ['faq-1', 'faq-2', 'faq-3', 'faq-5', 'faq-6']
