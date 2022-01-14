import React from "react";

import translations from "../../translations/translations.json";

export default function Text({children}) {
  if (typeof children === 'string') {
    if (translations.hasOwnProperty(children)) {
      return translations[children];
    }
  }
  console.error(`Failed to find a translation for string "${children}"`);
  return children;
}
