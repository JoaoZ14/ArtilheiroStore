import { createContext, useContext, useState, useCallback } from 'react'

const STORAGE_KEY = 'admin_auth'
const AdminContext = createContext(null)

function isAuthenticated() {
  return localStorage.getItem(STORAGE_KEY) === 'true'
}

export function AdminProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(isAuthenticated)

  const login = useCallback((password) => {
    const expected = import.meta.env.VITE_ADMIN_PASSWORD
    if (!expected) {
      console.error('VITE_ADMIN_PASSWORD não configurado.')
      return false
    }
    if (password === expected) {
      localStorage.setItem(STORAGE_KEY, 'true')
      setAuthenticated(true)
      return true
    }
    return false
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY)
    setAuthenticated(false)
  }, [])

  return (
    <AdminContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider')
  return ctx
}
