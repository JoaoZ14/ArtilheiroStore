import { createContext, useContext, useReducer, useCallback, useEffect, useState } from 'react'

const CART_STORAGE_KEY = 'artilheiro-cart'

const FREIGHT_PLACEHOLDER = 0

function getInitialCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function getLineId(productId, size) {
  return `${productId}-${size}`
}

const initialState = getInitialCart()

function cartReducer(state, action) {
  switch (action.type) {
    case 'LOAD': {
      return Array.isArray(action.payload) ? action.payload : []
    }
    case 'ADD': {
      const { productId, name, image, size, quantity, unitPrice } = action.payload
      const lineId = getLineId(productId, size)
      const existing = state.find(
        (item) => getLineId(item.productId, item.size) === lineId
      )
      if (existing) {
        return state.map((item) =>
          getLineId(item.productId, item.size) === lineId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [
        ...state,
        {
          productId,
          name,
          image,
          size,
          quantity,
          unitPrice,
        },
      ]
    }
    case 'UPDATE_QUANTITY': {
      const { productId, size, quantity } = action.payload
      const lineId = getLineId(productId, size)
      if (quantity < 1) {
        return state.filter((item) => getLineId(item.productId, item.size) !== lineId)
      }
      return state.map((item) =>
        getLineId(item.productId, item.size) === lineId
          ? { ...item, quantity }
          : item
      )
    }
    case 'REMOVE': {
      const { productId, size } = action.payload
      const lineId = getLineId(productId, size)
      return state.filter((item) => getLineId(item.productId, item.size) !== lineId)
    }
    case 'CLEAR': {
      return []
    }
    default:
      return state
  }
}

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(cartReducer, initialState)
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false)

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (_) {
      // ignore quota errors
    }
  }, [items])

  const addItem = useCallback(
    (payload) => {
      dispatch({
        type: 'ADD',
        payload: {
          productId: payload.productId,
          name: payload.name,
          image: payload.image ?? '',
          size: payload.size,
          quantity: Math.max(1, Number(payload.quantity) || 1),
          unitPrice: Number(payload.unitPrice) || 0,
        },
      })
    },
    []
  )

  const updateQuantity = useCallback((productId, size, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, size, quantity } })
  }, [])

  const removeItem = useCallback((productId, size) => {
    dispatch({ type: 'REMOVE', payload: { productId, size } })
  }, [])

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' })
  }, [])

  const openMiniCart = useCallback(() => setIsMiniCartOpen(true), [])
  const closeMiniCart = useCallback(() => setIsMiniCartOpen(false), [])

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0)

  const getSubtotal = useCallback(() => subtotal, [subtotal])
  const getTotal = useCallback(() => subtotal + FREIGHT_PLACEHOLDER, [subtotal])

  const value = {
    items,
    itemCount,
    subtotal,
    getSubtotal,
    getTotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    isMiniCartOpen,
    openMiniCart,
    closeMiniCart,
    freightPlaceholder: FREIGHT_PLACEHOLDER,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) {
    throw new Error('useCart must be used within CartProvider')
  }
  return ctx
}
