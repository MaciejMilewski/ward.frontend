import axios from "axios";
import {url} from "./url.js";

class Client {
  constructor(host, port) {
    this.axios = axios.create({baseURL: `http://${host}:${port}/`});
  }

  get(uri, query = {}) {
    return this.axios.get(uri, {params: query});
  }

  post(uri, data) {
    return this.axios.post(uri, data);
  }

  delete(uri) {
    return this.axios.delete(uri);
  }
}

const instance = new Client('localhost', 8080);

export function icdName(icdCode) {
  return instance.get('/icd', {icd: icdCode})
    .then(response => response.data["name"]);
}

export function workingHours() {
  return instance.get('/working-hours')
    .then(response => response.data);
}

export function workingHoursCreate(start, duration) {
  return instance.post('/working-hours', {start, duration})
    .then(response => response.data);
}

export function events(year, month, day) {
  return instance.get('/events', {params: {year, month, day}})
    .then(response => response.data);
}

export function patient(pesel) {
  return instance.get(url('/patients/:pesel', {pesel}))
    .then(response => response.data);
}

export function patientCreate(pesel, name) {
  return instance.post('/patients', {pesel, name})
    .then(response => response.data);
}

export function patientDelete(pesel) {
  return instance.delete(url('/patients/:pesel', {pesel}))
    .then(response => response.data);
}

export function patients(size, page) {
  return instance.get('/patients', {size, page})
    .then(response => response.data);
}

export function authenticate(username, password) {
  return instance.post('/auth', {username, password})
    .then(response => response.data);
}
