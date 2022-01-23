import React, {createContext, useContext} from "react";
import useLocalState from "../../auth/useLocalState.js";
import {authenticate, client} from "../../../http.js";

const AuthenticationContext = createContext({});

export default function Authenticated({children}) {
  const [token, setToken] = useLocalState("accessToken");
  const [role, setRole] = useLocalState("role");

  return <AuthenticationContext.Provider value={({token, setToken, role, setRole})}>
    {children}
  </AuthenticationContext.Provider>;
}


export function useAuthentication() {
  const {token, setToken, role, setRole} = useContext(AuthenticationContext);

  if (token !== null) {
    client.login(token);
  }

  function login(username, password) {
    authenticate(username, password)
      .then(response => {
        client.login(response.token);
        setToken(response.token);
        setRole(response.role);
      });
  }

  function logout() {
    client.logout();
    setRole(null);
    setToken(null);
  }

  return [role, login, logout];
}
