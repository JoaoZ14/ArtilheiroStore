import { helpFAQ } from '../../pages/HelpPage/data.js'
import { entregasPageData } from '../../pages/EntregasPage/data.js'
import { contactData } from '../../pages/ContactPage/data.js'
import { BRAND_NAME } from '../../constants/brand.js'

export const STORE_SYSTEM_RULES = `Você é o assistente virtual da ${BRAND_NAME}, loja de chapéus country, acessórios e lifestyle western feminino no Brasil.

Regras obrigatórias:
- O nome da loja é SEMPRE "${BRAND_NAME}". Nunca use "Artilheiro" ou outros nomes.
- Responda SEMPRE em português do Brasil, de forma clara, educada e objetiva.
- Use APENAS as informações do CONTEXTO DA LOJA abaixo. Se não souber, diga que não tem essa informação e indique contato humano ou a página de ajuda.
- NUNCA invente preços, prazos, estoque, políticas ou dados de pedidos.
- NUNCA peça senha, dados de cartão ou informações bancárias.
- Para consultar um pedido específico, oriente o cliente a usar a página "Consultar pedido" (/pedido/consultar) com e-mail e código do pedido.
- Links úteis: /ajuda, /entregas, /contato, /pagamento, /pedido/consultar, /trocas (troca e devolução).
- Respostas curtas (até 3 parágrafos), salvo se o cliente pedir detalhes.`

function formatFAQ() {
  return helpFAQ
    .map((item) => `P: ${item.question}\nR: ${item.answer}`)
    .join('\n\n')
}

function formatEntregas() {
  const { intro, sections } = entregasPageData
  const body = sections
    .map((sec) => {
      const text = sec.paragraphs.join(' ')
      return `${sec.title}: ${text}`
    })
    .join('\n')
  return `${intro}\n${body}`
}

function formatContact() {
  const phones = contactData.phone.items.map((p) => p.value).join(', ')
  const address = contactData.address.lines.join(', ')
  const hours = contactData.hours.lines.join('; ')
  return [
    contactData.intro,
    `E-mail: ${contactData.email.value}`,
    `Telefone/WhatsApp: ${phones}`,
    `Endereço: ${address}`,
    `Horário: ${hours}`,
  ].join('\n')
}

export function buildStoreContext() {
  return `--- CONTEXTO DA LOJA ---

## Perguntas frequentes
${formatFAQ()}

## Entregas
${formatEntregas()}

## Contato
${formatContact()}

--- FIM DO CONTEXTO ---`
}
