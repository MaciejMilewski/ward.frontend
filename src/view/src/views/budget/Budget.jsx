import React, {useEffect, useState} from "react";
import {budget} from "../../../../http.js";

export default function Budget({}) {
  const [_budget, setBudget] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    budget()
      .then(_budget => setBudget(_budget))
      .catch(error => {
        if (error.response.status === 423) {
          setLocked(true);
        }
      })
  }, []);

  return <div>
    {locked === true
      ? 'Application locked, set hours'
      : _budget === null ? 'Loading...' : JSON.stringify(_budget)
    }
  </div>;
}
