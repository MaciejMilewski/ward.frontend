import axios from "axios";
import {url} from "./url.js";


const instance = axios.create({
  baseURL: 'http://localhost:8080/'
});

export function icdName(icdCode) {
  return instance.get('/icd', {params: {icd: icdCode}})
      .then(response => response.data["name"]);
}

export function workingHours() {
  return instance.get('/working-hours')
      .then(response => response.data)
}

export function workingHoursCreate(start, duration) {
  return instance.post('/working-hours', {start, duration})
      .then(response => response.data)
}

export function events(year, month, day) {
  return instance.get('/events', {params: {year, month, day}})
      .then(response => response.data);
}

export function patients(pesel) {
  return instance.get(url('/patients/:pesel', {pesel}))
      .then(response => response.data);
}

export function patientCreate(pesel, name) {
  return instance.post('/patients', {pesel, name})
      .then(response => response.data);
}


events().then(events => console.log(events))