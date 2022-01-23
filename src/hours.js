
export function hourFormat(minutes) {
  const [hours, _minutes] = parsed(minutes);
  return `${hours}:${padding(_minutes)}`;
}

function padding(value) {
  const string = "" + value;
  if (string.length === 1) {
    return '0' + string;
  }
  return string;
}

export function parsed(minutes) {
  return [
    parseInt(Math.floor(minutes / 60.0)),
    minutes % 60
  ];
}
