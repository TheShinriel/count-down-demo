import React from "react"

export default function useNotification() {
  React.useEffect(() => {
    if (!("Notification" in window)) {
      console.log(
        "Ce navigateur ne prend pas en charge les notifications de bureau"
      )
    } else if (Notification.permission === "granted") {
      console.log("La permission de notification a déjà été accordée.")
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          console.log("La permission de notification a été accordée.")
        }
      })
    }
  }, [])
}
