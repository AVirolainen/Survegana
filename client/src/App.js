import React from "react"
import {useRoutes} from "./routes"
import {BrowserRouter} from "react-router-dom"
import './App.css'
import "materialize-css"
import background from "./img/background.png"

function App() {
  const routes = useRoutes(false)
  return (
    <BrowserRouter>
      <div className="container">{routes}</div>
    </BrowserRouter>
  )
}

export default App;
