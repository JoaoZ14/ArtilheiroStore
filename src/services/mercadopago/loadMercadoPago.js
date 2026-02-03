/**
 * Carrega o SDK do Mercado Pago (v2) e cria o Card Payment Brick.
 * Usado no checkout transparente para tokenização do cartão no frontend.
 */

const SDK_URL = 'https://sdk.mercadopago.com/js/v2'
let scriptLoadPromise = null

/**
 * Carrega o script do SDK do Mercado Pago uma única vez.
 * @returns {Promise<typeof MercadoPago>} - Construtor MercadoPago quando disponível
 */
export function loadMercadoPagoScript() {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Mercado Pago SDK só pode ser carregado no browser'))
  }
  if (window.MercadoPago) {
    return Promise.resolve(window.MercadoPago)
  }
  if (scriptLoadPromise) {
    return scriptLoadPromise
  }
  scriptLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = SDK_URL
    script.async = true
    script.onload = () => {
      if (window.MercadoPago) {
        resolve(window.MercadoPago)
      } else {
        reject(new Error('Mercado Pago SDK não disponível após carregar o script'))
      }
    }
    script.onerror = () => reject(new Error('Falha ao carregar o SDK do Mercado Pago'))
    document.head.appendChild(script)
  })
  return scriptLoadPromise
}

/**
 * Cria e renderiza o Card Payment Brick no container informado.
 *
 * @param {string} publicKey - Chave pública do Mercado Pago (APP_USR-...)
 * @param {string} containerId - ID do elemento HTML onde o Brick será renderizado
 * @param {Object} settings - Configuração do Brick
 * @param {Object} settings.initialization - { amount: number }
 * @param {Object} settings.callbacks - { onReady, onSubmit, onError }
 * @returns {Promise<{ unmount: function }>} - Controller do Brick (unmount ao sair da tela)
 */
export async function createCardPaymentBrick(publicKey, containerId, settings) {
  const MercadoPago = await loadMercadoPagoScript()
  const mp = new MercadoPago(publicKey, { locale: 'pt-BR' })
  const bricksBuilder = mp.bricks()

  const controller = await bricksBuilder.create('cardPayment', containerId, {
    initialization: {
      amount: settings.initialization?.amount ?? 0,
    },
    callbacks: {
      onReady: settings.callbacks?.onReady ?? (() => {}),
      onSubmit: settings.callbacks?.onSubmit ?? (() => Promise.resolve()),
      onError: settings.callbacks?.onError ?? (err => console.error('[CardPaymentBrick]', err)),
    },
  })

  return {
    unmount: () => {
      if (controller && typeof controller.unmount === 'function') {
        controller.unmount()
      }
    },
  }
}
