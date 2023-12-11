import React from "react"
import useCountDown from "./useCountDown"
import useNotification from "./useNotification"

interface CountDownProps {
  targetDate: string
}

export default function CountDown({ targetDate }: CountDownProps) {
  useNotification()
  const timeLeft = useCountDown(targetDate)

  return (
    <div>
      {!timeLeft ? (
        <span>Temps écoulé!</span>
      ) : (
        <div>
          {Object.entries(timeLeft).map(([interval, value]) => (
            <span key={interval}>
              {value} {interval}{" "}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
