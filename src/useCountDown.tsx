import React from "react"

interface TimeLeft {
  jours: number
  heures: number
  minutes: number
  secondes: number
}

const calculateTimeLeft = (targetDate: string): TimeLeft | null => {
  const difference = +new Date(targetDate) - +new Date()
  let timeLeft: TimeLeft | null = null

  if (difference > 0) {
    timeLeft = {
      jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
      heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      secondes: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export default function useCountDown(targetDate: string): TimeLeft | null {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft | null>(
    calculateTimeLeft(targetDate)
  )

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearTimeout(timer)
  })

  React.useEffect(() => {
    if (!timeLeft && Notification.permission === "granted") {
      new Notification("Le compteur est terminé!")
    }
  }, [timeLeft])

  return timeLeft
}
