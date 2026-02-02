import { useToast } from '../../context/ToastContext'
import { ToastContainer, ToastItem, ToastMessage, ToastClose } from './Toast.styled'

export default function Toast() {
  const { toasts, removeToast } = useToast()

  if (toasts.length === 0) return null

  return (
    <ToastContainer>
      {toasts.map(toast => (
        <ToastItem key={toast.id} $type={toast.type}>
          <ToastMessage>{toast.message}</ToastMessage>
          <ToastClose
            onClick={() => removeToast(toast.id)}
            aria-label="Fechar notificação"
          >
            ×
          </ToastClose>
        </ToastItem>
      ))}
    </ToastContainer>
  )
}
