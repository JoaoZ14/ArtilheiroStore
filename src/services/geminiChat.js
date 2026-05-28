import { GoogleGenerativeAI } from '@google/generative-ai'
import { buildStoreContext, STORE_SYSTEM_RULES } from '../lib/gemini/storeContext.js'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const MODEL = import.meta.env.VITE_GEMINI_MODEL || 'gemini-2.0-flash'

/** @typedef {{ role: 'user' | 'assistant', content: string }} ChatMessage */

export function isGeminiConfigured() {
  return Boolean(API_KEY?.trim())
}

/**
 * @param {ChatMessage[]} messages Histórico completo incluindo a última mensagem do usuário
 * @returns {Promise<string>}
 */
export async function sendChatMessage(messages) {
  if (!isGeminiConfigured()) {
    throw new Error(
      'Configure VITE_GEMINI_API_KEY no arquivo .env.local e reinicie o servidor de desenvolvimento.'
    )
  }

  if (!messages?.length) {
    throw new Error('Nenhuma mensagem enviada.')
  }

  const genAI = new GoogleGenerativeAI(API_KEY.trim())
  const model = genAI.getGenerativeModel({
    model: MODEL,
    systemInstruction: `${STORE_SYSTEM_RULES}\n\n${buildStoreContext()}`,
  })

  const rawHistory = messages.slice(0, -1)
  const firstUserIndex = rawHistory.findIndex((m) => m.role === 'user')
  const normalizedHistory = firstUserIndex === -1 ? [] : rawHistory.slice(firstUserIndex)

  const history = normalizedHistory.map((msg) => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }))

  const last = messages[messages.length - 1]
  if (last.role !== 'user') {
    throw new Error('A última mensagem deve ser do usuário.')
  }

  const chat = model.startChat({ history })
  const result = await chat.sendMessage(last.content)
  const text = result.response.text()

  if (!text?.trim()) {
    throw new Error('Resposta vazia do assistente.')
  }

  return text.trim()
}
