import React, {useEffect, useState} from "react";
import {operators} from "../../../../http.js";
import Toolbar from "../Toolbar.jsx";

export default function OperatorsTable({}) {
  const [_operators, setOperators] = useState(null);

  useEffect(() => {
    operators().then(_operators => setOperators(_operators));
  }, []);

  return <div>
    <Toolbar href="/operators/new"/>
    {_operators === null ? 'Loading...' : JSON.stringify(_operators)}
  </div>;
}
