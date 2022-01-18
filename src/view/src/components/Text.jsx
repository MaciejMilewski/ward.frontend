import React from "react";
import {useLanguage} from "./Translated.jsx";

import translations from "../../translations/pl.json";

export default function Text({children}) {
  const [language] = useLanguage();
  if (language === 'en') {
    return children;
  }
  return translated(children);
}

export function translated(string) {
  if (typeof string === 'string') {
    if (translations.hasOwnProperty(string)) {
      return translations[string];
    }
  }
  console.error(`Failed to find a translation for string "${string}"`);
  return string;
}
