import React, {useEffect, useState} from "react";
import {operationTypes} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function OperationTypesTable({}) {
  const [types, setTypes] = useState(null);

  useEffect(() => {
    operationTypes().then(types => setTypes(types));
  }, []);

  return <div>
    <Toolbar href="/types/new"/>
    {types === null ? 'Loading...' : JSON.stringify(types)}
  </div>;
}
