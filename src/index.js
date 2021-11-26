import {icdName} from "./http";

byId("load_working_hours").addEventListener("click", () => {
  byId("working_hours").innerText = JSON.stringify({
    from: 568,
    to: 960
  });
})

byId("save_working_hours").addEventListener("click", () => {
  console.log("Save")
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


