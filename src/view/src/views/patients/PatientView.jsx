import React from "react";
import PatientHeader from "./PatientHeader.jsx";
import PatientList from "./PatientList.jsx";

export default function PatientView () {
  return <div className="container mx-auto">
    <PatientHeader/>
    <PatientList/>
  </div>;
};
