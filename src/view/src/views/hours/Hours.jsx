import React, {useEffect, useState} from "react";
import {budget, workingHours} from "../../../../http.js";

export default function Hours({}) {
  const [loading, setLoading] = useState(true);
  const [_hours, setHours] = useState(null);

  useEffect(() => {
    workingHours()
      .then(_hours => {
        setHours(_hours);
        setLoading(false);
      })
      .catch(error => {
        if (error.response.status === 404) {
          setLoading(false);
          setHours(null);
        }
      })
  }, []);

  return <div>
    Working hours:
    <div>
      {loading ? 'Loading...' : JSON.stringify({hours: _hours})}
    </div>
  </div>;
}
