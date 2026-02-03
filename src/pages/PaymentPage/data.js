/**
 * Conteúdo da página Formas de pagamento.
 */
export const paymentPageData = {
  intro:
    'Aceitamos cartão de crédito, débito e PIX. Todas as transações são processadas de forma segura.',

  processorNote: {
    title: 'Processamento de pagamento',
    text: 'Os pagamentos são processados pelo Mercado Pago. Seus dados são criptografados e não armazenamos informações completas do cartão em nossos servidores. O Mercado Pago é uma solução segura e amplamente utilizada no Brasil.',
  },

  methods: [
    {
      id: 'card',
      title: 'Cartão de crédito ou débito',
      paragraphs: [
        'Você pode pagar com cartão de crédito ou débito no checkout. Os dados são informados na própria página de finalização da compra.',
        'Parcelamento: oferecemos opções de parcelamento em várias vezes. Quando houver parcelamento com juros, os juros são por conta do comprador — ou seja, o valor das parcelas já inclui os encargos da operadora/bandeira, e você vê o total antes de confirmar o pagamento.',
        'O pagamento com cartão é processado pelo Mercado Pago, em ambiente seguro. A aprovação é feita em instantes e você recebe a confirmação por e-mail.',
      ],
    },
    {
      id: 'pix',
      title: 'PIX',
      paragraphs: [
        'Pagamento instantâneo via PIX. No checkout você gera um QR Code ou o código PIX (copia e cola) e paga pelo app do seu banco.',
        'A confirmação costuma ser em segundos. Assim que o pagamento for identificado, você recebe a confirmação por e-mail e o pedido segue para processamento.',
      ],
    },
  ],
}
