import React, {useEffect, useState} from "react";
import {operationTypesList} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function OperationTypesTable({}) {
  const [types, setTypes] = useState(null);

  useEffect(() => {
    operationTypesList().then(types => setTypes(types));
  }, []);

  return <div>
    <Toolbar href="/types/new"/>
    {types === null ? 'Loading...' : JSON.stringify(types)}
  </div>;
}
