import axios from 'axios';

export class Client {
  constructor(host, port) {
    this.axios = axios.create({baseURL: `http://${host}:${port}/`});
    this.accessToken = null;
  }

  get(uri, query = {}) {
    return this.axios.get(uri, {params: query, headers: this.headers()})
      .then(response => response.data)
      .catch(error => {
        if (error.response.status === 504) {
          alert("Network communication failed")
        }
        if (error.response.status === 403) {
          alert("No permission to view the resource");
        }
        throw error;
      });
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
