import "./App.css"
import CountDown from "./CountDown"

function App() {
  return (
    <>
      <h1>CountDown</h1>
      <div className="card">
        <h1>Compte à Rebours avant Noël</h1>
        <CountDown targetDate="2023-12-25T04:00:00" />
      </div>
      <p className="read-the-docs">
        La démo d'un simple compte à rebours en React avec Vite.
      </p>
    </>
  )
}

export default App
