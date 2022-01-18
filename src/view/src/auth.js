import {authenticate, client} from "../../http.js";
import useLocalState from "../auth/useLocalState.js";

export default function useAuthentication() {
  const [token, setToken] = useLocalState("accessToken");
  const [role, setRole] = useLocalState("role");

  if (token !== null) {
    client.login(token);
  }

  function login(role) {
    const [username, password] = credentials(role);
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

function credentials(role) {
  const credentials = {
    head: ['user_hd', 'password'],
    planner: ['user_pl', 'password'],
    operator: ['user_op', 'password'],
    secretary: ['user_sc', 'password'],
  };
  return credentials[role];
}
