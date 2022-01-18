import {useState} from "react";

export default function useLocalState(localStorageKey) {
  const [value, setValue] = useState(localStorage.getItem(localStorageKey));

  return [
    value,
    function (newValue) {
      localStorage.setItem(localStorageKey, newValue);
      setValue(newValue);
    }
  ]
}
