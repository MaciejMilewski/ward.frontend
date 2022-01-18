import React from 'react'
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from "axios";
import {django_events_to_calendar, input_from_django} from "../../../../events_coverter.js";

require('globalize/lib/cultures/globalize.culture.en-GB');


const localizer = momentLocalizer(moment);

export default function Selectable({onEventEdit, onEventCreate, initialDate, events}) {

  function componentDidMount() {


    axios.get('http://localhost:3001/events')
        .then(response => {
          console.log(response.data);
          let events = response.data;

          let processed_events = django_events_to_calendar(events)

          this.setState({
            cal_events:processed_events
          })

        })
        .catch(function (error) {
          console.log(error);
        });
  }

  return <Calendar
      selectable
      localizer={localizer}
      events={django_events_to_calendar(input_from_django)}
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
