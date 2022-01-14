import React, {createContext, useContext, useState} from "react";

const LanguageContext = createContext({});

export default function Translated({children, initialLanguage}) {
  const [language, setLanguage] = useState(initialLanguage);

  return <LanguageContext.Provider value={({language, setLanguage})}>
    {children}
  </LanguageContext.Provider>;
}

export function useLanguage() {
  const {language, setLanguage} = useContext(LanguageContext);
  return [language, setLanguage];
}
