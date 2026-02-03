/**
 * Dados de contato da Artilheiro Store.
 * Atualize com os canais oficiais da loja.
 */
export const contactData = {
  intro: 'Entre em contato conosco para dúvidas, sugestões ou parcerias. Nossa equipe está pronta para atender você.',

  email: {
    label: 'E-mail',
    value: 'contato@joaopossidonio.com',
    href: 'mailto:contato@joaopossidonio.com',
  },

  phone: {
    label: 'Telefone / WhatsApp',
    items: [
      { value: '(24) 98868-5043', href: 'https://wa.me/5524988685043' },
      { value: '(24) 99301-2170', href: 'https://wa.me/5524993012170' },
    ],
  },

  address: {
    label: 'Endereço',
    lines: [
      'Rua Raizel Cukier, 126',
      'Resende – RJ',
      'CEP 27537-278',
    ],
    href: null,
  },

  hours: {
    label: 'Horário de atendimento',
    lines: [
      'Segunda a sexta: 9h às 18h',
      'Sábado: 9h às 13h',
      'Domingo e feriados: fechado',
    ],
  },
}
