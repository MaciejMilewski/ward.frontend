import "../../src/events_coverter.js";
import {input_from_django, django_events_to_calendar, calendar_items} from "../../src/events_coverter.js";


test('should return calendar_event', () => {
  // when
  const output = django_events_to_calendar(input_from_django);
  // then
  expect(output).toEqual(calendar_items);
});
