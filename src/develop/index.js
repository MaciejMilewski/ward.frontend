import {
  authenticate,
  icdName,
  patient,
  patientCreate,
  patientDelete,
  patients,
  workingHours,
  workingHoursCreate,
  client,
  patientUpdate, room, roomCreate
} from "../http.js";

byId("load_working_hours").addEventListener("click", () => {
  workingHours()
    .then(workingHours => {
      byId("working_hours").innerText = JSON.stringify(workingHours);
    })
    .catch(e => {
      const s = e.response.status;
      if (s === 404) alert("Working hours have not been set");
    });
});

Array.from(document.getElementsByClassName("authenticate"))
  .forEach(element => element.addEventListener("click", event => {
    const role = event.target.dataset.role;

    const credentials = {
      head: ['user_hd', 'password'],
      planner: ['user_pl', 'password'],
      operator: ['user_op', 'password'],
      secretary: ['user_sc', 'password'],
    };

    const [username, password] = credentials[role];

    console.log([username, password]);

    authenticate(username, password)
      .then(response => {
        const accessToken = response.token;
        client.login(accessToken);
        byId("authentication").innerText = JSON.stringify(response);
      })
      .catch(e => {
        if (e.response.status === 401) {
          alert("Błędne dane logowania");
        }
      });
  }));

byId("save_working_hours").addEventListener("click", () => {
  const start = prompt("Podaj początek pracy:", "10:00");
  const duration = prompt("Podaj czas trwania pracy:", "6");
  workingHoursCreate(start, duration)
    .catch(e => {
      const s = e.response.status;
      if (s === 422) alert("Niepoprawny format godzin");
    });
});

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
});

byId("load_patient_by_pesel").addEventListener("click", () => {
  const pesel = prompt("Podaj pesel:", "00301000015");

  patient(pesel)
    .then(patient => {
      byId("patient_by_pesel").innerText = JSON.stringify(patient);
    });
});

byId("save_patient").addEventListener("click", () => {
  const pesel = prompt("Podaj pesel:", "00301000015");
  const name = prompt("Podaj imię i nazwisko:", "Tadeusz Wiśniewski");

  patientCreate(pesel, name)
    .catch(e => {
      const s = e.response.status;
      if (s === 422) alert("Niepoprawny pesel");
      if (s === 409) alert("Pacjent z podanym peselem już istnieje");
    });
});

byId("delete_patient").addEventListener("click", () => {
  const pesel = prompt("Podaj pesel:", "00301000015");

  patientDelete(pesel)
    .catch(e => {
      const s = e.response.status;
      if (s === 404) alert("Brak pacjenta z podanym peselem");
      if (s === 422) alert("Niepoprawny pesel");
    });
});

byId("load_patients").addEventListener("click", () => {
  const size = prompt("Podaj size:", "2");
  const page = prompt("Podaj stronę:", "1");

  patients(size, page)
    .then(patient => {
      byId("patients").innerText = JSON.stringify(patient);
    })
    .catch(e => {
      const s = e.response.status;
      if (s === 422) alert("Niepoprawne parametry");
    });
});

byId("update_patient").addEventListener("click", () => {
  const pesel = prompt("Podaj pesel:", "00301000015");
  const newName = prompt("Podaj nowe imię i nazwisko:", "Nowe imię");

  patientUpdate(pesel, newName)
    .catch(e => {
      const s = e.response.status;
      if (s === 422) alert("Niepoprawne parametry");
      if (s === 404) alert("Nie ma takiego pacjenta");
    });
});

byId("load_room").addEventListener("click", () => {
  const name = prompt("Podaj nazwę", "Sala 1");

  room(name)
    .then(room => {
      byId("room").innerText = JSON.stringify(patient);
    })
    .catch(e => {
      const s = e.response.status;
      if (s === 404) alert("Nie ma takiego pokoju");
    });
});

byId("add_room").addEventListener("click", () => {
  const name = prompt("Podaj nazwę", "Sala 1");

  roomCreate(name)
    .catch(e => {
      const s = e.response.status;
      if (s === 422) alert("Niepoprawna nazwa");
      if (s === 409) alert("Taki pokój już istnieje");
    });
});


// <span id="room">?</span>
//
// <button id="load_rooms">Wczytaj pokoje</button>
// <span id="rooms">?</span>
//
// <button id="add_room">dodaj pokój</button>
// <button id="delete_room">Usuń pokój</button>
// <button id="update_room">Aktualizuj pokój</button>








function byId(id) {
  const element = document.getElementById(id);
  if (element === null) {
    throw "Failed to find element by id: #" + id;
  }
  return element;
}
