import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

import Text from "../../components/Text.jsx";
import {patientGet, patientUpdate} from "../../../../http.js";

export default function PatientEdit({}) {
  const {pesel} = useParams();
  const history = useNavigate();

  const [name, setName] = useState(null);

  useEffect(() => {
    patientGet(pesel)
      .then(response => setName(response.name));
  }, [pesel]);

  const onSubmit = event => {
    event.preventDefault();
    patientUpdate(pesel, name)
      .then(() => history("/patients"));
  };

  if (name === null) {
    return <div className="w-full max-w-sm container mt-20 mx-auto">
      <Text>Loading</Text>...
    </div>;
  }

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
            disabled/>
        </label>
      </div>

      <div className="w-full mb-5">
        <label>
          <p className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            <Text>Name</Text>
          </p>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Enter name"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
          <Text>Edit patient</Text>
        </button>
      </div>

      <div className="text-center mt-4 text-gray-500">
        <Link to="/patients"><Text>Cancel</Text></Link>
      </div>
    </form>
  </div>;
};
