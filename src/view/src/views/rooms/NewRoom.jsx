import React, {useState} from "react";

import {roomCreate} from "../../../../http.js";
import Button from "../Button.jsx";
import Field from "../Field.jsx";
import Text from "../../components/Text.jsx";
import Link from "../../components/Link.jsx";
import {useNavigate} from "react-router-dom";

export default function NewRoom({}) {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  function create() {
    roomCreate(name)
      .then(() => {
        navigate("/rooms", {replace: true});
      })
      .catch(error => {
        if (error.response.status === 442) {
          alert("Invalid name");
        }
        if (error.response.status === 409) {
          alert("Duplicate room name");
        }
      })
  }

  return <article>
    <nav className="text-sm">
      <Link href="/rooms">&lt; <Text>Operation rooms</Text></Link>
    </nav>
    <h3 className="text-xl mb-6">
      <Text>New room</Text>
    </h3>

    <Field label="Room name" value={name} onChange={setName}/>

    <div className="mt-6">
      <Button onClick={create}>
        Create
      </Button>
    </div>
  </article>;
}
