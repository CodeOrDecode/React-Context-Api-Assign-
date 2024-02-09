import React from 'react'
import { Authcontext } from "../Context/AuthContextProvider";

export default function Dashboard(){
    const { handleLogout, token } = React.useContext(Authcontext);
    return (
        <div >
            <h3 data-testid = "token" >Token: {token}</h3>
            <button data-testid = "logout" onClick={handleLogout} >LOGOUT</button>
        </div>
    )
}


