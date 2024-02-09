import React from 'react'
import Login from './Components/Login'
import Dashboard from "./Components/Dashboard"
import { Authcontext } from "./Context/AuthContextProvider"

export default function App() {
  const {isAuth} = React.useContext(Authcontext);
  return (
    <div>
        {isAuth? <Dashboard/>:<Login />}
    </div>
  )
}
