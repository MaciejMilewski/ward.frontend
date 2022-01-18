import {useState} from "react";
import {authenticate, client} from "../../http.js";

export default function useAuthentication() {
  const [logged, setLogged] = useState(null);

  function login(role) {
    const credentials = {
      head: ['user_hd', 'password'],
      planner: ['user_pl', 'password'],
      operator: ['user_op', 'password'],
      secretary: ['user_sc', 'password'],
    };
    const [username, password] = credentials[role];
    authenticate(username, password)
      .then(response => {
        client.login(response.token);
        setLogged(response.role);
      });
  }

  function logout() {
    client.logout();
    setLogged(null);
  }

  return [logged, login, logout];
}
