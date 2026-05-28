import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.EMAIL_FROM || 'Glamour Country <onboarding@resend.dev>'

const STATUS_CONFIG = {
  PAYMENT_APPROVED: {
    subject: '✅ Pedido confirmado — Glamour Country',
    heading: 'Pagamento confirmado!',
    message: 'Ótima notícia! Seu pagamento foi aprovado e seu pedido já está sendo preparado.',
    color: '#065F46',
    badge: '#D1FAE5',
  },
  SHIPPED: {
    subject: '📦 Seu pedido foi enviado — Glamour Country',
    heading: 'Pedido enviado!',
    message: 'Seu pedido saiu para entrega. Fique de olho no rastreamento para acompanhar a chegada.',
    color: '#1E40AF',
    badge: '#DBEAFE',
  },
  DELIVERED: {
    subject: '🎉 Pedido entregue — Glamour Country',
    heading: 'Pedido entregue!',
    message: 'Seu pedido foi entregue com sucesso. Esperamos que você aproveite muito!',
    color: '#065F46',
    badge: '#D1FAE5',
  },
  CANCELLED: {
    subject: '❌ Pedido cancelado — Glamour Country',
    heading: 'Pedido cancelado',
    message: 'Seu pedido foi cancelado. Se tiver dúvidas ou precisar de ajuda, entre em contato conosco.',
    color: '#991B1B',
    badge: '#FEE2E2',
  },
}

function formatCurrency(v) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(v || 0)
}

function buildItemsHtml(items) {
  if (!items?.length) return ''
  return items.map((item) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #F0E8DE; font-size: 14px; color: #3D3229;">
        ${item.productName || `Produto #${item.productId}`}
        <span style="color: #7A6B5D; font-size: 12px;"> · ${item.size || ''} · Qtd: ${item.quantity}</span>
      </td>
      <td style="padding: 10px 0; border-bottom: 1px solid #F0E8DE; text-align: right; font-size: 14px; font-weight: 600; color: #3D3229; white-space: nowrap;">
        ${formatCurrency(item.unitPrice * item.quantity)}
      </td>
    </tr>
  `).join('')
}

function buildEmailHtml({ orderId, customerName, status, total, items, config }) {
  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light">
  <title>${config.subject}</title>
  <link href="https://fonts.googleapis.com/css2?family=Rye&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0; padding:0; background-color:#FAF7F2; font-family:'Nunito',Arial,sans-serif; -webkit-font-smoothing:antialiased;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAF7F2; padding:40px 16px;">
  <tr><td align="center">
  <table role="presentation" width="100%" style="max-width:580px;">

    <!-- ══ HEADER ══ -->
    <tr>
      <td style="background-color:#3D3229; border-radius:16px 16px 0 0; padding:36px 40px 32px; text-align:center;">
        <p style="margin:0 0 6px; font-family:'Nunito',Arial,sans-serif; font-size:10px; font-weight:700; letter-spacing:0.25em; text-transform:uppercase; color:#C8A97A;">
          ✦ &nbsp; Glamour Country &nbsp; ✦
        </p>
        <h1 style="margin:0; font-family:'Rye',Georgia,serif; font-size:26px; font-weight:400; color:#FFFFFF; letter-spacing:0.03em; line-height:1.3;">
          ${config.heading}
        </h1>
        <div style="width:48px; height:2px; background:#9B7349; margin:16px auto 0;"></div>
      </td>
    </tr>

    <!-- ══ CORPO ══ -->
    <tr>
      <td style="background-color:#FFFFFF; border-left:1px solid #E5DDD3; border-right:1px solid #E5DDD3; padding:32px 40px 24px;">

        <!-- Badge do pedido -->
        <div style="text-align:center; margin-bottom:24px;">
          <span style="display:inline-block; background-color:${config.badge}; color:${config.color}; padding:7px 20px; border-radius:20px; font-size:12px; font-weight:700; letter-spacing:0.06em; text-transform:uppercase;">
            Pedido ${orderId}
          </span>
        </div>

        <!-- Saudação -->
        <p style="margin:0 0 8px; font-size:16px; color:#3D3229; line-height:1.7; text-align:center;">
          Olá, <strong>${customerName}</strong>!
        </p>
        <p style="margin:0 0 28px; font-size:15px; color:#7A6B5D; line-height:1.7; text-align:center;">
          ${config.message}
        </p>

        ${items?.length ? `
        <!-- Divisor de seção -->
        <div style="border-top:1px solid #E5DDD3; margin-bottom:20px;"></div>

        <!-- Label da seção -->
        <p style="margin:0 0 12px; font-size:10px; font-weight:700; text-transform:uppercase; letter-spacing:0.12em; color:#9B7349;">
          Itens do pedido
        </p>

        <!-- Tabela de itens -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${buildItemsHtml(items)}
          <tr>
            <td colspan="2" style="padding-top:4px;">
              <div style="border-top:1px solid #E5DDD3; margin:8px 0;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:4px 0; font-size:15px; font-weight:700; color:#3D3229;">Total</td>
            <td style="padding:4px 0; text-align:right; font-size:15px; font-weight:700; color:#9B7349;">${formatCurrency(total)}</td>
          </tr>
        </table>
        ` : ''}

      </td>
    </tr>

    <!-- ══ FOOTER ══ -->
    <tr>
      <td style="background-color:#F5EFE8; border:1px solid #E5DDD3; border-top:none; border-radius:0 0 16px 16px; padding:24px 40px; text-align:center;">
        <p style="margin:0 0 6px; font-size:13px; color:#7A6B5D; line-height:1.6;">
          Dúvidas? Responda este e-mail ou acesse nosso site.
        </p>
        <p style="margin:0; font-size:12px; color:#B8A99A;">
          © ${new Date().getFullYear()} <span style="color:#9B7349; font-weight:700;">Glamour Country</span> — Obrigado pela sua compra!
        </p>
      </td>
    </tr>

  </table>
  </td></tr>
</table>

</body>
</html>`
}

/**
 * Envia e-mail de atualização de status ao cliente.
 * Retorna silenciosamente em caso de erro para não bloquear a operação principal.
 */
export async function sendStatusEmail({ orderId, customerName, customerEmail, status, total, items }) {
  const config = STATUS_CONFIG[status]
  if (!config) return

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_sua_api_key_aqui') {
    console.warn('[Mailer] RESEND_API_KEY não configurada — e-mail não enviado.')
    return
  }

  try {
    const html = buildEmailHtml({ orderId, customerName, status, total, items, config })
    const { error } = await resend.emails.send({
      from: FROM,
      to: customerEmail,
      subject: config.subject,
      html,
    })
    if (error) {
      console.error('[Mailer] Erro ao enviar e-mail:', error)
    } else {
      console.log(`[Mailer] E-mail enviado para ${customerEmail} — status: ${status}`)
    }
  } catch (err) {
    console.error('[Mailer] Exceção ao enviar e-mail:', err.message)
  }
}
