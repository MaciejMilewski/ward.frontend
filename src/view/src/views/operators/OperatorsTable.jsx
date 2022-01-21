import React, {useEffect, useState} from "react";
import {operatorsList} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";
import Text from "../../components/Text.jsx";

export default function OperatorsTable({}) {
  const [operators, setOperators] = useState(null);

  useEffect(() => {
    operatorsList(10)
      .then(types => setOperators(types.operator));
  }, []);

  return <div>
    <Toolbar href="/operators/new"/>
    <h3 className="text-xl mb-6">
      <Text>Operators</Text>
    </h3>
    <Operators operators={operators}/>
  </div>;
}

function Operators({operators}) {
  if (operators === null) {
    return 'Loading'
  }
  return <table>
    <thead>
    <tr>
      <th><Text>Name</Text></th>
      <th><Text>Active</Text></th>
    </tr>
    </thead>
    <tbody>
    {operators.map((type, index) => {
      return <tr key={index}>
        <td className="border">{type.name}</td>
        <td className="border">{type.active ? 'Active' : 'Inactive'}</td>
      </tr>;
    })}
    </tbody>
  </table>
}
