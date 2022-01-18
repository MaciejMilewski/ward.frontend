import React from "react";
import Text from "../../components/Text.jsx";
import Button from "../Button.jsx";
import Field from "../Field.jsx";

export default function NewRoom({}) {
  return <article>
    <h3 className="text-xl mb-6">
      <Text>New room</Text>
    </h3>

    <Field label="Room name"/>

    <div className="mt-6">
      <Button>
        Create
      </Button>
    </div>
  </article>;
}
