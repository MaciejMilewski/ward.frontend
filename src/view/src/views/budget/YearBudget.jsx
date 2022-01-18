import React from "react";
import {useParams} from "react-router-dom";

export default function YearBudget({}) {
  const {year} = useParams();

  return <div>
    Year Budget, year {year}
  </div>;
}
