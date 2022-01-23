import React, {useEffect, useState} from "react";
import {workingHoursCreate, workingHoursGet} from "../../../../http.js";
import Text from "../../components/Text.jsx";
import Button from "../Button.jsx";
import {hourFormat, parsed} from "../../../../hours.js";

export default function Hours({}) {
  const [hours, setHours] = useState(null);

  useEffect(() => {
    workingHoursGet()
      .then(_hours => {
        setHours(_hours);
      })
      .catch(error => {
        if (error.response.status === 404) {
          setHours(false);
        }
      })
  }, []);

  function storeHours(start, duration) {
    workingHoursCreate(start, duration / 60);
  }

  return <div>
    <h3 className="text-xl mb-6">
      <Text>Working hours</Text>
    </h3>
    <div>
      <HoursSetForm hours={hours} onSave={storeHours}/>
    </div>
  </div>;
}

function HoursSetForm({hours, onSave}) {
  if (hours === null) {
    return 'Loading...';
  }
  if (hours === false) {
    return <div>
      Hours not set

      <NewHoursSection
        initialStart={7 * 60}
        initialDuration={8 * 60}
        onSave={onSave}
      />
    </div>;
  }

  return <div>
    <HoursDisplay start={hours.start} duration={hours.duration}/>
    <NewHoursSection
      initialStart={hours.start}
      initialDuration={hours.duration}
      onSave={onSave}
    />
  </div>;
}

function NewHoursSection({initialDuration, initialStart, onSave}) {
  const [start, setStart] = useState(initialStart);
  const [duration, setDuration] = useState(initialDuration);

  return <>
    <h3 className="text-xl mt-12 mb-4">
      <Text>New working hours</Text>
    </h3>
    <div>
      <p className="mt-3 mb-2">
        <Text>Work start</Text>
      </p>
      <p>
        <MinuteField value={start} onChange={setStart}/>, {hourFormat(start)}h
      </p>
      <p className="mt-3 mb-2">
        <Text>Work duration</Text>
      </p>
      <p>
        <MinuteField value={duration} onChange={setDuration}/>, <Duration minutes={duration}/>
      </p>
      <div className="mt-4">
        <Button onClick={() => onSave(start, duration)}>
          Save
        </Button>
      </div>
    </div>
  </>;
}

function MinuteField({value, onChange}) {
  return <>
    <input className="border w-14" type="number" value={value} min={0} onChange={event => {
      const minimalTime = Math.max(event.target.value, 0);
      const maximalTime = Math.min(minimalTime, 60 * 24 - 1);
      return onChange(maximalTime);
    }}/>
    <Text>minutes</Text>
  </>;
}

function HoursDisplay({duration, start}) {
  return <div>
    <p>
      <Text>Work start</Text>: {hourFormat(start)}
    </p>
    <p>
      <Text>Work duration</Text>: <Duration minutes={duration}/>
    </p>
  </div>;
}

function Duration({minutes}) {
  const [hours, _minutes] = parsed(minutes);
  return <>{hours} <Text>hours and</Text> {_minutes} <Text>minutes</Text></>;
}
