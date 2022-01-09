import axios from 'axios';

export class Client {
  constructor(host, port) {
    this.axios = axios.create({baseURL: `http://${host}:${port}/`});
    this.accessToken = null;
  }

  get(uri, query = {}) {
    return this.axios.get(uri, {
      params: query,
      headers: this.headers()
    });
  }

  post(uri, data) {
    return this.axios.post(uri, data, {headers: this.headers()});
  }

  delete(uri) {
    return this.axios.delete(uri, {headers: this.headers()});
  }

  login(accessToken) {
    this.accessToken = accessToken;
  }

  headers() {
    if (this.accessToken === null) {
      return {};
    }
    return {Authorization: 'Bearer ' + this.accessToken};
  };
}
