import "./App.css"
import { Canvas } from "@react-three/fiber"

import CountDown from "./CountDown"
import Clock from "./Clock"

function App() {
  return (
    <>
      <h1>CountDown</h1>
      <div className="card">
        <h1>Compte à Rebours avant Noël</h1>
        <CountDown targetDate="2023-12-25T04:00:00" />

        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Clock />
        </Canvas>
      </div>
      <p className="read-the-docs">
        La démo d'un simple compte à rebours en React avec Vite.
      </p>
    </>
  )
}

export default App
