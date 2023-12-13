import React from "react"
import { useFrame } from "@react-three/fiber"
import { Mesh, Group } from "three"

function ClockHand({ type }: { type: "hours" | "minutes" | "seconds" }) {
  const meshRef = React.useRef<Mesh>(null)
  const groupRef = React.useRef<Group>(null)

  useFrame(() => {
    const time = new Date()
    let angle = 0
    switch (type) {
      case "hours":
        angle = ((time.getHours() % 12) / 12) * Math.PI * 2
        break
      case "minutes":
        angle = (time.getMinutes() / 60) * Math.PI * 2
        break
      case "seconds":
        angle = (time.getSeconds() / 60) * Math.PI * 2
        break
    }
    if (groupRef.current) {
      groupRef.current.rotation.z = -angle
    }
  })

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        position={[0, type === "minutes" || type === "seconds" ? 1 : 0.5, 0]}
      >
        <boxGeometry
          args={[
            type === "seconds" ? 0.1 : 0.2,
            type === "minutes" || type === "seconds" ? 2 : 1,
            0.2,
          ]}
        />
        <meshStandardMaterial color={type === "seconds" ? "red" : "black"} />
      </mesh>
    </group>
  )
}

export default function Clock() {
  return (
    <mesh>
      <circleGeometry args={[3, 32]} />
      <meshStandardMaterial color={"white"} />
      <ClockHand type="hours" />
      <ClockHand type="minutes" />
      <ClockHand type="seconds" />
    </mesh>
  )
}
