import React, {useState} from 'react';
import {EditingState, IntegratedEditing, ViewState} from '@devexpress/dx-react-scheduler';
import {Appointments, DragDropProvider, Scheduler, WeekView} from '@devexpress/dx-react-scheduler-material-ui';
import {useLanguage} from "./Translated.jsx";

export default function Calendar({}) {
  const [language] = useLanguage();
  const [data, setData] = useState(recurrenceAppointments);

  const locales = {pl: 'pl-PL', en: 'en-US'};

  function onCommitChanges({added, changed, deleted}) {
    let newData = data;
    if (added) {
      const startingAddedId = newData.length > 0 ? newData[newData.length - 1].id + 1 : 0;
      newData = [...newData, {id: startingAddedId, ...added}];
    }
    if (changed) {
      newData = newData.map(appointment => changed[appointment.id] ? {...appointment, ...changed[appointment.id]} : appointment);
    }
    if (deleted !== undefined) {
      newData = newData.filter(appointment => appointment.id !== deleted);
    }
    return setData(newData);
  }

  return <Scheduler data={data} height={660} locale={locales[language]}>
    <ViewState
      defaultCurrentDate={new Date('2018-06-27')}
    />
    <EditingState onCommitChanges={onCommitChanges}/>
    <IntegratedEditing/>
    <WeekView
      startDayHour={9}
      endDayHour={16}
    />
    <Appointments/>
    <DragDropProvider
      allowDrag={() => true}
      allowResize={() => false}
    />
  </Scheduler>;
}

const recurrenceAppointments = [
  {
    title: 'Website Re-Design Plan',
    startDate: new Date(2018, 5, 25, 9, 15),
    endDate: new Date(2018, 5, 25, 11, 30),
    id: 13,
  }, {
    title: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date(2018, 5, 25, 12, 11),
    endDate: new Date(2018, 5, 25, 13, 0),
    id: 11,
  }, {
    title: 'Install New Router in Dev Room',
    startDate: new Date(2018, 5, 25, 13, 30),
    endDate: new Date(2018, 5, 25, 14, 35),
    id: 10,
  }, {
    title: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date(2018, 5, 26, 10, 0),
    endDate: new Date(2018, 5, 26, 11, 0),
    id: 3,
  }, {
    title: 'Final Budget Review',
    startDate: new Date(2018, 5, 27, 11, 45),
    endDate: new Date(2018, 5, 27, 13, 20),
    id: 4,
  }, {
    title: 'New Brochures',
    startDate: new Date(2018, 5, 26, 14, 40),
    endDate: new Date(2018, 5, 26, 15, 45),
    id: 5,
  }, {
    title: 'Install New Database',
    startDate: new Date(2018, 5, 28, 9, 45),
    endDate: new Date(2018, 5, 28, 11, 15),
    id: 6,
  }, {
    title: 'Approve New Online Marketing Strategy',
    startDate: new Date(2018, 5, 29, 11, 45),
    endDate: new Date(2018, 5, 29, 13, 5),
    id: 7,
  }, {
    title: 'Create Icons for Website',
    startDate: new Date(2018, 5, 29, 10, 0),
    endDate: new Date(2018, 5, 29, 11, 30),
    id: 12,
  }];
