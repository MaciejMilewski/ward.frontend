import React, {useState} from "react";
import Text from "../../components/Text.jsx";

import {operationTypeCreate, roomCreate} from "../../../../http.js";
import Button from "../Button.jsx";
import Field from "../Field.jsx";
import Link from "../../components/Link.jsx";
import {useNavigate} from "react-router-dom";

export default function NewOperationType({}) {
  const navigate = useNavigate();
  const [code, setCode] = useState('99.97901');
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [duration, setDuration] = useState('');
  const [severe, setSevere] = useState('');

  function create() {
    operationTypeCreate(code, parseInt(cost), parseInt(duration), severe === 'True')
      .then(() => {
        navigate("/types", {replace: true});
      })
      .catch(error => {
        console.error(error);
      });
  }

  return <article>
    <nav className="text-sm">
      <Link href="/rooms">&lt; <Text>Operation types</Text></Link>
    </nav>
    <h3 className="text-xl mb-6">
      <Text>New operation type</Text>
    </h3>

    <Field label="Code" value={code} onChange={setCode}/>
    <Field label="Name" value={name} onChange={setName}/>
    <Field label="Cost" value={cost} onChange={setCost}/>
    <Field label="Duration" value={duration} onChange={setDuration}/>
    <Field label="Severe" value={severe} onChange={setSevere}/>

    <div className="mt-6">
      <Button onClick={create}>
        Create
      </Button>
    </div>
  </article>;
}
