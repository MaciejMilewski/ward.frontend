import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {patientCreate} from "../../../../http.js";
import Text from "../../components/Text.jsx";

export const PatientNew = () => {
  const history = useNavigate();

  const [name, setName] = useState("");
  const [pesel, setPesel] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    patientCreate(pesel, name).then(() => {
      history("/patients");
    })
  };

  return <div className="w-full max-w-sm container mt-20 mx-auto">
    <form onSubmit={onSubmit}>
      <div className="w-full mb-5">
        <label>
          <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            <Text>PESEL</Text>
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            value={pesel}
            onChange={event => setPesel(event.target.value)}
            placeholder="pesel"
          />
        </label>
      </div>
      <div className="w-full mb-5">
        <label>
          <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            <Text>Name</Text>
          </p>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
            value={name}
            onChange={event => setName(event.target.value)}
            placeholder="name"
          />
        </label>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Text>Add patient</Text>
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/patients"><Text>Cancel</Text></Link>
      </div>
    </form>
  </div>;
};
