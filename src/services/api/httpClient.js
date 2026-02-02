/**
 * HTTP Client para comunicação com a API
 * Centraliza configuração de baseURL, timeout e tratamento de erros
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'
const DEFAULT_TIMEOUT = 30000 // 30 segundos

/**
 * Classe de erro customizada para erros da API
 */
export class ApiError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.data = data
  }
}

/**
 * Cria um controller de timeout para requisições
 */
function createTimeoutController(timeoutMs) {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs)
  
  return {
    signal: controller.signal,
    clearTimeout: () => clearTimeout(timeoutId)
  }
}

/**
 * Realiza requisição HTTP com tratamento de erros e timeout
 */
async function request(endpoint, options = {}) {
  const { timeout = DEFAULT_TIMEOUT, ...fetchOptions } = options
  
  const url = `${API_BASE_URL}${endpoint}`
  
  const timeoutController = createTimeoutController(timeout)
  
  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: timeoutController.signal,
      headers: {
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
    })
    
    timeoutController.clearTimeout()
    
    // Se não for 2xx, lança erro
    if (!response.ok) {
      let errorData = null
      try {
        errorData = await response.json()
      } catch {
        // Se não conseguir parsear JSON, usa texto
        errorData = { message: await response.text() }
      }
      
      const errorMessage = errorData?.message || `Erro ${response.status}`
      throw new ApiError(errorMessage, response.status, errorData)
    }
    
    // Se for 204 No Content, retorna null
    if (response.status === 204) {
      return null
    }
    
    // Tenta parsear JSON
    const data = await response.json()
    return data
    
  } catch (error) {
    timeoutController.clearTimeout()
    
    // Timeout
    if (error.name === 'AbortError') {
      throw new ApiError('Tempo limite de requisição excedido', 408, null)
    }
    
    // Erro de rede
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new ApiError('Erro de conexão. Verifique sua internet.', 0, null)
    }
    
    // Re-lança ApiError
    if (error instanceof ApiError) {
      throw error
    }
    
    // Erro desconhecido
    throw new ApiError('Erro inesperado', 500, { originalError: error.message })
  }
}

/**
 * Métodos HTTP convenientes
 */
export const httpClient = {
  get: (endpoint, options = {}) => 
    request(endpoint, { ...options, method: 'GET' }),
  
  post: (endpoint, data, options = {}) =>
    request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    }),
  
  put: (endpoint, data, options = {}) =>
    request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    }),
  
  patch: (endpoint, data, options = {}) =>
    request(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data),
    }),
  
  delete: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: 'DELETE' }),
}
