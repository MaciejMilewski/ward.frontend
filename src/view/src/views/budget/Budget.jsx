import React, {useEffect, useState} from "react";
import {budgetGet} from "../../../../http.js";
import Text from "../../components/Text.jsx";
import Link from "../../components/Link.jsx";

export default function Budget({}) {
  const [_budget, setBudget] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    budgetGet()
      .then(_budget => setBudget(_budget.budgets))
      .catch(error => {
        if (error.response.status === 423) {
          setLocked(true);
        }
      })
  }, []);

  return <div>
    {locked === true
      ? 'Application locked, set hours'
      : <Budgets budgets={_budget}/>
    }
  </div>;
}

function Budgets({budgets}) {
  if (budgets === null) {
    return 'Loading'
  }
  return <table>
    <thead>
    <tr>
      <th><Text>Year</Text></th>
      <th><Text>Amount</Text></th>
      <th/>
    </tr>
    </thead>
    <tbody>
    {budgets.map((budget, index) => {
      return <tr key={index}>
        <td className="border">{budget.year}</td>
        <td className="border">{budget.amount}zł</td>
        <td className="border">
          <Link href={"/budget/" + budget.year}>
            <Text>See</Text>
          </Link>
        </td>
      </tr>;
    })}
    </tbody>
  </table>
}
