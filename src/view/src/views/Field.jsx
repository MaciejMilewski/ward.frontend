import Text, {translated} from "../components/Text.jsx";
import React from "react";

export default function Field({label}) {
  return <>
    <p className="text-sm">
      <label><Text>{label}</Text></label>
    </p>
    <input className="px-2 py-1 border " placeholder={translated(label)}/>
  </>;
}
