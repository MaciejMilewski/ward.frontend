import {url} from "./url.js";
import {Client} from './client.js';

export const client = new Client('localhost', 8080);

export function icdName(icd) {
  return client.get('/icd', {icd}).then(response => response["name"]);
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

export function patientUpdate(pesel, newName) {
  return client.put(url('/patients/:pesel', {pesel}), {name: newName});
}

export function patients(size, page) {
  return client.get('/patients', {size, page});
}

export function authenticate(username, password) {
  return client.post('/auth', {username, password});
}

export function rooms(size, page) {
  return client.get('/rooms', {size, page});
}

export function roomCreate(name) {
  return client.post('/rooms', {name});
}

export function room(name) {
  return client.get(url('/rooms/:name', {name}));
}

export function roomDelete(name) {
  return client.delete(url('/rooms/:name', {name}));
}

export function roomUpdate(name, {name: newName, active}) {
  return client.put(url('/rooms/:name', {name}), {name: newName, active});
}

export function operators(size, page) {
  return client.get('/operator', {size, page});
}

export function operatorsActive(size, page) {
  return client.get('/operator/active', {size, page});
}

export function operatorCreate(name) {
  return client.post('/operator', {name});
}

export function operator(name) {
  return client.get(url('/operator/:name', {name}));
}

export function operatorDelete(name) {
  return client.delete(url('/operator/:name', {name}));
}

export function operatorUpdate(name, {name: newName, active}) {
  return client.put(url('/operator/:name', {name}), {name: newName, active});
}

export function operationTypes(size, page) {
  return client.get('/operation-types', {size, page});
}

export function operationTypeCreate(code, cost, duration, severe) {
  return client.post('/operation-types', {code, cost, duration, severe});
}

export function operationType(code) {
  return client.get(url('/operation-types/:code', {code}));
}

export function operationTypeDelete(code) {
  return client.delete(url('/operation-types/:code', {code}));
}

export function operationTypeUpdate(code, {cost, duration, severe}) {
  return client.put(url('/operation-types/:code', {code}), {cost, duration, severe});
}
