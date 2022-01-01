export function url(template, params = {}) {
  return template.replace(/:([A-Za-z]+)/g, (match, argument) => encodedParameter(params, argument));
}

function encodedParameter(parameters, currentParameter) {
  if (currentParameter in parameters) {
    return encodeURIComponent(parameters[currentParameter]);
  }
  throw `Missing parameter :${currentParameter}`;
}
