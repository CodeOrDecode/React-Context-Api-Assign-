import React from "react";
import { Authcontext } from "../Context/AuthContextProvider";
import { useState } from "react";
import Loading from "./Loading";

export default function Login() {
  const { getLogin, loading } = React.useContext(Authcontext);
  const [formstate, setFormstate] = useState({
    email: "",
    password: "",
  });

  function logindata(event) {
    event.preventDefault();
    if(formstate.email !== "" || formstate.password !== ""){
        getLogin(formstate);
    }
   
  }

  function handlechange(event) {
    let newValue = event.target.value;
    setFormstate({ ...formstate, [event.target.name]: newValue });
  }
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <form data-testid="auth_form" onSubmit={logindata}>
            <input
              type="email"
              data-testid="email"
              placeholder="Enter Email"
              value={formstate.email}
              name="email"
              onChange={handlechange}
            />
            <br />
            <input
              type="password"
              data-testid="password"
              placeholder="Enter password"
              value={formstate.password}
              name="password"
              onChange={handlechange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>
      )}
    </div>
  );
}
