import React, {useEffect, useState} from "react";
import {operationTypes} from "../../../../http.js";

export default function OperationTypesTable({}) {
  const [types, setTypes] = useState(null);

  useEffect(() => {
    operationTypes().then(types => setTypes(types));
  }, []);

  return <div>
    {types === null ? 'Loading...' : JSON.stringify(types)}
  </div>;
}
