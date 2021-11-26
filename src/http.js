import axios from "axios";


const instance = axios.create({
  baseURL: 'http://localhost:8081/'
});

export function icdName(icdCode) {
  return instance.get('/icd', {params: {icd: icdCode}})
      .then(response => response.data["name"]);
}

export function events() {
  return instance.get('/events')
      .then(response => response.data["events"]);
}

// TODO: budget, przerobić a1 - zwracanie wszystkich operacji + endpoint do node.js, commit i push

events().then(events => console.log(events))