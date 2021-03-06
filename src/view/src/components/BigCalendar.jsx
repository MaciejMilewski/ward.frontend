import React from 'react'
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

require('globalize/lib/cultures/globalize.culture.en-GB');


const localizer = momentLocalizer(moment);

export default function Selectable({onEventEdit, onEventCreate, initialDate, events}) {
  return <Calendar
    selectable
    localizer={localizer}
    events={events}
    views={['week', 'day', 'month']}
    defaultView={Views.WEEK}
    scrollToTime={new Date(1970, 1, 1, 6)}
    defaultDate={initialDate}
    onSelectEvent={onEventEdit}
    onSelectSlot={onEventCreate}

    eventPropGetter={(event) => {
      const backgroundColor = event.allDay ? 'yellow' : 'green';
      console.log(event)
      return {style: {backgroundColor}}
    }}

    rtl={false}
    culture={'en-GB'}
  />;
};
