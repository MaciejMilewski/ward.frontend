export function django_events_to_calendar(events) {
  let result = [];
  for (let x = 0; x < Object.keys(events).length; x++) {
    let event = events[x];
    result.push(django_event_to_calendar(event));
  }
  return result;
}


function django_event_to_calendar(event) {
  return {
    id: event.id,
    title: event.patient_name,
    start: new Date(event.timestamp * 1000),
    end: new Date((event.timestamp * 1000 + event.operation_duration * 60 * 1000))
  }
}


export function calendar_events_to_django(events) {
  return output_to_django;
}


export let input_from_django = [
  {
    "id": 0,
    "timestamp": 1641798000,
    "patient_pesel": "59062797753",
    "patient_name": "Jan Nowak",
    "operation_type_code": "88.36",
    "operation_type_name": "Limfangiografia kończyny dolnej",
    "operation_room_name": "Sala",
    "operator_name": "Stanisław Piła",
    "operation_duration": 120,
    "cleanup_duration": 60,
    "accepted": false,
    "status": "planned",
    "within_hours": true,
    "overlapping": []
  },
  {
    "id": 1,
    "timestamp": 1641798000,
    "patient_pesel": "59062797753",
    "patient_name": "Stefan Bosak",
    "operation_type_code": "88.36",
    "operation_type_name": "Limfangiografia kończyny dolnej",
    "operation_room_name": "Sala",
    "operator_name": "Stefan Bosak",
    "operation_duration": 120,
    "cleanup_duration": 60,
    "accepted": false,
    "status": "planned",
    "within_hours": true,
    "overlapping": []
  }
];


export let calendar_items = [
  {
    id: 0,
    title: "Jan Nowak",
    start: new Date(2022, 0, 10, 8, 0, 0),
    end: new Date(2022, 0, 10, 10, 0, 0),
  },
  {
    id: 1,
    title: "Stefan Bosak",
    start: new Date(2022, 0, 10, 8, 0, 0),
    end: new Date(2022, 0, 10, 10, 0, 0),
  }
];


export let output_to_django = [{
  "date": "2022-1-10",
  "start_time": 480,
  "pesel": "59062797753",
  "operation_type_code": "88.36",
  "operation_room_name": "Sala",
  "operator_id": "0",
  "cleanup_duration": 60,
  "operation_duration": 120
}];
