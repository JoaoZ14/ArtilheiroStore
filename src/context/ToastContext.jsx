import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const ToastContext = createContext(null)

let toastId = 0

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback((message, type = 'error', duration = 5000) => {
    const id = ++toastId
    setToasts(prev => [...prev, { id, message, type }])
    
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
    
    return id
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const showError = useCallback((message) => {
    return addToast(message, 'error')
  }, [addToast])

  const showSuccess = useCallback((message) => {
    return addToast(message, 'success')
  }, [addToast])

  const showInfo = useCallback((message) => {
    return addToast(message, 'info')
  }, [addToast])

  const value = useMemo(() => ({
    toasts,
    addToast,
    removeToast,
    showError,
    showSuccess,
    showInfo,
  }), [toasts, addToast, removeToast, showError, showSuccess, showInfo])

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return ctx
}
