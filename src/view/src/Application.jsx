import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home.jsx";
import Room from "./views/rooms/Room.jsx";
import Hours from "./views/hours/Hours.jsx";
import Event from "./views/events/Event.jsx";
import Events from "./Events.jsx";
import Layout from "./Layout.jsx";
import Budget from "./views/budget/Budget.jsx";
import NewRoom from "./views/rooms/NewRoom.jsx";
import Operator from "./views/operators/Operator.jsx";
import NewEvent from "./views/events/NewEvent.jsx";
import RoomsTable from "./views/rooms/RoomsTable.jsx";
import YearBudget from "./views/budget/YearBudget.jsx";
import PatientEdit from "./views/patients/PatientEdit.jsx";
import Translated from "./components/Translated.jsx";
import PatientView from "./views/patients/PatientView.jsx";
import EventsTable from "./views/events/EventsTable.jsx";
import NewOperator from "./views/operators/OperatorNew.jsx";
import {PatientNew} from "./views/patients/PatientNew.jsx";
import Authenticated from "./components/Authenticated.jsx";
import OperationType from "./views/types/OperationType.jsx";
import OperatorsTable from "./views/operators/OperatorsTable.jsx";
import NewOperationType from "./views/types/NewOperationType.jsx";
import OperationTypesTable from "./views/types/OperationTypesTable.jsx";

export default function ({}) {
  return <BrowserRouter>
    <Authenticated>
      <Translated initialLanguage="pl">
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<Home/>}/>

              <Route path="patients">
                <Route index element={<PatientView/>}/>
                <Route path="new" element={<PatientNew/>}/>
                <Route path="edit/:pesel" element={<PatientEdit/>}>
                </Route>
              </Route>

              <Route path="schedule" element={<Events/>}/>

              <Route path="events">
                <Route index element={<EventsTable/>}/>
                <Route path="mine" element={<EventsTable onlyMine/>}/>
                <Route path="new" element={<NewEvent/>}/>
                <Route path=":event" element={<Event/>}/>
              </Route>

              <Route path="hours">
                <Route index element={<Hours/>}/>
              </Route>

              <Route path="operators">
                <Route index element={<OperatorsTable/>}/>
                <Route path="new" element={<NewOperator/>}/>
                <Route path=":operator" element={<Operator/>}/>
              </Route>

              <Route path="rooms">
                <Route path="name">
                  <Route index element={<Room/>}/>
                  <Route path=":room" element={<Room/>}/>
                </Route>
                <Route path="new" element={<NewRoom/>}/>
                <Route index element={<RoomsTable/>}/>
              </Route>

              <Route path="types">
                <Route index element={<OperationTypesTable/>}/>
                <Route path="new" element={<NewOperationType/>}/>
                <Route path=":type" element={<OperationType/>}/>
              </Route>

              <Route path="budget">
                <Route index element={<Budget/>}/>
                <Route path=":year" element={<YearBudget/>}/>
              </Route>
            </Route>
          </Routes>
        </Layout>
      </Translated>
    </Authenticated>
  </BrowserRouter>;
}

function render(component) {
  return ({match}) => component(match.params);
}
