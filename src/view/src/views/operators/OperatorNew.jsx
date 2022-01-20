import React, {useState} from "react";

import {operatorCreate} from "../../../../http.js";
import Button from "../Button.jsx";
import Field from "../Field.jsx";
import Text from "../../components/Text.jsx";
import Link from "../../components/Link.jsx";
import {useNavigate} from "react-router-dom";

export default function NewOperator({}) {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  function create() {
    operatorCreate(name)
      .then(() => {
        navigate("/operators", {replace: true});
      })
      .catch(error => {
        console.error(error);
      })
  }

  return <article>
    <nav className="text-sm">
      <Link href="/rooms">&lt; <Text>Operators</Text></Link>
    </nav>
    <h3 className="text-xl mb-6">
      <Text>New operator</Text>
    </h3>

    <Field label="Operator" value={name} onChange={setName}/>

    <div className="mt-6">
      <Button onClick={create}>
        ADd
      </Button>
    </div>
  </article>;
}
