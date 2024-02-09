import React, { useState } from "react";

export const Authcontext = React.createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  async function getLogin(obj) {
    setLoading(true);
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      });
      let finalres = await res.json();
      // console.log(finalres.token);
      setToken(finalres.token);
      setLoading(false);
      setError(false);
      setIsAuth(true);
    } catch (error) {
      setLoading(false);
      setError(true);
      setIsAuth(false);
    }
  }

  function handleLogout(){
    setIsAuth(false);
  }


  const context1 = {
    getLogin,
    isAuth,
    loading,
    error,
    token,
    handleLogout
  };

  return (
    <Authcontext.Provider value={{isAuth,loading,error,token}}>{children}</Authcontext.Provider>
  );
}
