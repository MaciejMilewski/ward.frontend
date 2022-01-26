import {useAuthentication} from "./components/Authenticated.jsx";

export default function usePermission() {
  const [role] = useAuthentication();

  const planner = role === 'planner';
  const operator = role === 'operator';
  const secretary = role === 'secretary';

  if (role === 'head') {
    return {
      hoursRead: true,
      hoursEdit: true,
      eventsRead: true,
      eventsEdit: true,
      eventsAll: true,
      budget: true,
      roomsEdit: true,
      roomsRead: true,
      operatorsEdit: true,
      operatorsRead: true,
      typesEdit: true,
      typesRead: true,
      patientsRead: true,
      patientsEdit: true,
    }
  }

  return {
    hoursRead: secretary,
    hoursEdit: false,
    eventsRead: planner,
    eventsEdit: planner,
    eventsAll: planner,
    budget: false,
    roomsEdit: false,
    roomsRead: planner,
    operatorsEdit: false,
    operatorsRead: planner,
    typesEdit: false,
    typesRead: planner,
    patientsRead: planner || operator,
    patientsEdit: planner,
  };
}
