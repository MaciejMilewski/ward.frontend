import React from "react";
import Button from "./Button.jsx";

export default function Toolbar({href}) {
  return <div className="flex justify-end">
    <Button href={href}>New</Button>
  </div>
}
