import {url} from "./url.js";
import {Client} from './client.js';

export const client = new Client('localhost', 8080);

export function icdName(icd) {
  return client.get('/icd', {icd})
    .then(response => response.data["name"]);
}

export function workingHours() {
  return client.get('/working-hours')
    .then(response => response.data);
}

export function workingHoursCreate(start, duration) {
  return client.post('/working-hours', {start, duration})
    .then(response => response.data);
}

export function events(year, month, day) {
  return client.get('/events', {params: {year, month, day}})
    .then(response => response.data);
}

export function patient(pesel) {
  return client.get(url('/patients/:pesel', {pesel}))
    .then(response => response.data);
}

export function patientCreate(pesel, name) {
  return client.post('/patients', {pesel, name})
    .then(response => response.data);
}

export function patientDelete(pesel) {
  return client.delete(url('/patients/:pesel', {pesel}))
    .then(response => response.data);
}

export function patients(size, page) {
  return client.get('/patients', {size, page})
    .then(response => response.data);
}

export function authenticate(username, password) {
  return client.post('/auth', {username, password})
    .then(response => response.data);
}
