import axios from 'axios';

export class Client {
  constructor(host, port) {
    this.axios = axios.create({baseURL: `http://${host}:${port}/`});
    this.accessToken = null;
  }

  get(uri, query = {}) {
    return this.axios.get(uri, {params: query, headers: this.headers()}).then(response => response.data);
  }

  post(uri, data) {
    return this.axios.post(uri, data, {headers: this.headers()}).then(response => response.data);
  }

  delete(uri) {
    return this.axios.delete(uri, {headers: this.headers()}).then(response => response.data);
  }

  put(uri, data) {
    return this.axios.put(uri, data, {headers: this.headers()}).then(response => response.data);
  }

  login(accessToken) {
    this.accessToken = accessToken;
  }

  logout() {
    this.accessToken = null;
  }

  headers() {
    if (this.accessToken === null) {
      return {};
    }
    return {Authorization: 'Bearer ' + this.accessToken};
  };
}
