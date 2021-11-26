import {icdName, workingHours, workingHoursCreate} from "./http";

byId("load_working_hours").addEventListener("click", () => {
  workingHours()
      .then(workingHours => {
        byId("working_hours").innerText = JSON.stringify(workingHours);
      })
      .catch(e => {
        const s = e.response.status;
        if (s === 404) alert("Working hours have not been set");
      });
})

byId("save_working_hours").addEventListener("click", () => {
  const start = prompt("Podaj początek pracy:", "10:00")
  const duration = prompt("Podaj czas trwania pracy:", "6")
  workingHoursCreate(start, duration)
      .catch(e => {
        const s = e.response.status;
        if (s === 422) alert("Niepoprawny format godzin");
      });
})

byId("load_icd").addEventListener("click", () => {
  icdName(prompt("Podaj kod icd", "99.97901"))
      .then(name => {
        byId("icd").innerText = JSON.stringify({name});
      })
      .catch(e => {
        const s = e.response.status;
        if (s === 422) alert("Invalid ICD code");
        if (s === 404) alert("Unknown ICD code");
      });
})

function byId(id) {
  const element = document.getElementById(id)
  if (element === null) {
    throw "Failed to find element by id"
  }
  return element
}


