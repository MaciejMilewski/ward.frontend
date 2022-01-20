import React, {useEffect, useState} from "react";
import {operationTypesList} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";
import Text from "../../components/Text.jsx";

export default function OperationTypesTable({}) {
  const [types, setTypes] = useState(null);

  useEffect(() => {
    operationTypesList(10)
      .then(types => setTypes(types.operationTypes));
  }, []);

  return <div>
    <Toolbar href="/types/new"/>
    <h3 className="text-xl mb-6">
      <Text>Operation types</Text>
    </h3>
    <OperationTypes types={types}/>
  </div>;
}

function OperationTypes({types}) {
  if (types === null) {
    return 'Loading'
  }
  return <table>
    <thead>
    <tr>
      <th><Text>Code</Text></th>
      <th><Text>Name</Text></th>
      <th><Text>Cost</Text></th>
      <th><Text>Default duration</Text></th>
      <th><Text>Severe</Text></th>
    </tr>
    </thead>
    <tbody>
    {types.map((type, index) => {
      return <tr key={index}>
        <td className="border">{type.code}</td>
        <td className="border">{type.name}</td>
        <td className="border">{type.cost}</td>
        <td className="border">{type.duration}</td>
        <td className="border">{type.severe ? 'Severe' : 'Normal'}</td>
      </tr>;
    })}
    </tbody>
  </table>
}
