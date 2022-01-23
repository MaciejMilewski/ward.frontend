import {useParams} from "react-router-dom";

import React, {useEffect, useState} from "react";
import {yearBudgetGet} from "../../../../http.js";
import Text from "../../components/Text.jsx";

export default function YearBudget({}) {
  const {year} = useParams();

  const [_budget, setBudget] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    yearBudgetGet(year)
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
      : <Budget budget={_budget}/>}
  </div>;
}

function Budget({budget}) {
  if (budget === null) {
    return 'Loading...';
  }
  const months = [
    'January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December'
  ];
  return <div>
    <h3 className="text-xl mb-3">
      <Text>Year budget for </Text>{budget.year}
    </h3>
    <p className="mb-3">
      {budget.amount}zł.
    </p>
    <table>
      <tr>
        <th><Text>Month</Text></th>
        <th><Text>Amount</Text></th>
      </tr>
      {months.map(month => {
        return <tr key={month}>
          <td className="border">
            <Text>{month}</Text>
          </td>
          <td className="border">
            {budget.planned[month.toLowerCase()]}zł.
          </td>
        </tr>;
      })}
    </table>
  </div>
}
