import {url} from "./url.js";
import {Client} from './client.js';

export const client = new Client('localhost', 8080);

export function icdName(icd) {
  return client.get('/icd', {icd})
    .then(response => response["name"]);
}

export function workingHours() {
  return client.get('/working-hours');
}

export function workingHoursCreate(start, duration) {
  return client.post('/working-hours', {start, duration});
}

export function events(year, month, day) {
  return client.get('/events', {params: {year, month, day}});
}

export function patient(pesel) {
  return client.get(url('/patients/:pesel', {pesel}));
}

export function patientCreate(pesel, name) {
  return client.post('/patients', {pesel, name});
}

export function patientDelete(pesel) {
  return client.delete(url('/patients/:pesel', {pesel}));
}

export function patients(size, page) {
  return client.get('/patients', {size, page});
}

export function authenticate(username, password) {
  return client.post('/auth', {username, password});
}
