import { useEffect } from "react";

interface UseNotificationInterface {
  showNotification: (text: string) => void
}

export function useNotification(): UseNotificationInterface {
  useEffect(() => {
    if (!("Notification" in window)) {
      alert('Su navegador no puede recibir notificaciones')
    } else {
      Notification.requestPermission();
    }
  }, [])

  const showNotification = (text: string) => {
    new Notification(text)
  }

  return { showNotification }
}