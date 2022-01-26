import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Text from "../../components/Text.jsx";
import {patientDelete, patientsList} from "../../../../http.js";

export default function PatientList() {
  const [patients, setPatients] = useState([]);

  function loadPatients() {
    patientsList(99, 1)
      .then(response => setPatients(response.patients));
  }

  function removePatient(pesel) {
    patientDelete(pesel).then(loadPatients)
    setPatients(patients.filter(patient => patient.pesel !== pesel));
  }

  useEffect(loadPatients, []);

  if (patients.length === 0) {
    return <p className="text-center bg-gray-100 text-gray-500 py-5">
      <Text>No patients</Text>
    </p>;
  }

  return patients.map(patient => (
    <div key={patient.pesel} className="flex items-center bg-gray-100 mb-10 shadow">
      <div className="flex-auto text-left px-4 py-2 m-2">
        <p className="text-gray-900 leading-none">
          {patient.name}
        </p>
      </div>
      <div className="flex-auto text-left px-4 py-2 m-2">
        <p className="text-gray-900 leading-none">
          {patient.pesel}
        </p>
      </div>
      <div className="flex-auto text-right px-4 py-2 m-2">
        <Link to={`/patients/edit/${patient.pesel}`} title="Edit Patient">
          <div
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
            <PatientIconEdit/>
          </div>

        </Link>
        <button
          onClick={() => removePatient(patient.pesel)}
          className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
          title="Remove Patient"
        >
          <PatientIconRemove/>
        </button>
      </div>
    </div>
  ));
};

function PatientIconEdit() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-edit">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>;
}

function PatientIconRemove({}) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="feather feather-trash-2">
    <polyline points="3 6 5 6 21 6"/>
    <path
      d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <line x1="10" y1="11" x2="10" y2="17"/>
    <line x1="14" y1="11" x2="14" y2="17"/>
  </svg>;
}
