export async function getConfig(req, reply) {
  const key = process.env.MP_PUBLIC_KEY
  if (!key) {
    return reply.status(503).send({ message: 'Chave pública do Mercado Pago não configurada.' })
  }
  return { mercadopagoPublicKey: key }
}
