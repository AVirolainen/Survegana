import React from "react"
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook";
import {BrowserRouter} from "react-router-dom"
import './App.css'
import "materialize-css"
import {AuthContext} from "./context/AuthContext";

/** Function that starts client */
function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{
            token, logout, login, isAuthenticated, userId
        }}>
            <BrowserRouter>
              <div className="container">{routes}</div>
            </BrowserRouter>
        </AuthContext.Provider>
      )
}

export default App;
