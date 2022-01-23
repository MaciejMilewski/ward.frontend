import {url} from "./url.js";
import {Client} from './client.js';
import {hourFormat} from "./hours.js";

export const client = new Client('localhost', 8080);

export function icdName(icd) {
  return client.get('/icd', {icd}).then(response => response["name"]);
}

export function workingHoursGet() {
  return client.get('/working-hours');
}

export function workingHoursCreate(start, duration) {
  return client.post('/working-hours', {start: hourFormat(start), duration});
}

export function patientGet(pesel) {
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

export function patientsList(size, page) {
  return client.get('/patients', {size, page});
}

export function authenticate(username, password) {
  return client.post('/auth', {username, password});
}

export function roomsList(size, page) {
  return client.get('/rooms', {size, page});
}

export function roomCreate(name) {
  return client.post('/rooms', {name});
}

export function roomGet(name) {
  return client.get(url('/rooms/:name', {name}));
}

export function roomDelete(name) {
  return client.delete(url('/rooms/:name', {name}));
}

export function roomUpdate(name, {name: newName, active}) {
  return client.put(url('/rooms/:name', {name}), {name: newName, active});
}

export function operatorsList(size, page) {
  return client.get('/operator', {size, page});
}

export function operatorsActive(size, page) {
  return client.get('/operator/active', {size, page});
}

export function operatorCreate(name) {
  return client.post('/operator', {name});
}

export function operatorGet(name) {
  return client.get(url('/operator/:name', {name}));
}

export function operatorDelete(name) {
  return client.delete(url('/operator/:name', {name}));
}

export function operatorUpdate(name, {name: newName, active}) {
  return client.put(url('/operator/:name', {name}), {name: newName, active});
}

export function operationTypesList(size, page) {
  return client.get('/operation-types', {size, page});
}

export function operationTypeCreate(code, cost, duration, severe) {
  return client.post('/operation-types', {code, cost, duration, severe});
}

export function operationTypeGet(code) {
  return client.get(url('/operation-types/:code', {code}));
}

export function operationTypeDelete(code) {
  return client.delete(url('/operation-types/:code', {code}));
}

export function operationTypeUpdate(code, {cost, duration, severe}) {
  return client.put(url('/operation-types/:code', {code}), {cost, duration, severe});
}

export function eventsList(size, page) {
  return client.get('/events', {size, page});
}

export function eventCreate(name, required, optional) {
  const {date, startTime, pesel, code, operatorId, roomName} = required;
  const {operationDuration, cleanupDuration} = optional;

  return client.post('/events', {
    date,
    start_time: startTime,
    pesel,
    operation_type_code: code,
    operator_id: operatorId,
    operation_room_name: roomName,
    operation_duration: operationDuration,
    cleanup_duration: cleanupDuration
  });
}

export function eventGet(id) {
  return client.get(url('/events/:id', {id}));
}

export function eventDelete(id) {
  return client.delete(url('/events/:id', {id}));
}

export function eventUpdate(id, optional) {
  const {pesel, date, startTime, code, roomName, operatorId, accepted} = optional;

  return client.put(url('/event/:id', {id}), {
    pesel,
    date,
    start_time: startTime,
    operation_type_code: code,
    operation_room_name: roomName,
    operator_id: operatorId,
    accepted
  });
}

export function appointmentsList(id, size, page) {
  return client.get(url('/events/:id', {id}), {size, page});
}

export function budgetGet() {
  return client.get('/budget');
}

export function yearBudgetGet(year) {
  return client.get(url('/budget/:year', {year}));
}

export function yearBudgetCreate(year, amount) {
  return client.post(url('/budget/:year', {year}), {amount});
}

export function yearBudgetUpdate(year, amount) {
  return client.put(url('/budget/:year', {year}), {amount});
}

export function yearBudgetPlan(year, monthsAmounts) {
  const {january, february, march, april, may, june, july, august, september, october, november, december} = monthsAmounts;

  return client.post(url('/budget/:year/planned', {year}),
    {january, february, march, april, may, june, july, august, september, october, november, december});
}

export function yearBudgetRemaining(year) {
  return client.get(url('/budget/:year', {year}));
}
