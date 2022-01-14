import React from "react";
import classNames from "classnames";
import {useLanguage} from "./Translated.jsx";

export default function LanguageSwitch() {
  const [language, setLanguage] = useLanguage();
  return <div>
    <Button code="pl" selected={language === 'pl'} onChange={setLanguage}>Polski</Button>
    /
    <Button code="en" selected={language === 'en'} onChange={setLanguage}>English</Button>
  </div>;
}

function Button({code, onChange, selected, children}) {
  return <span
    onClick={() => onChange(code)}
    className={classNames(selected ? "font-bold" : "font-normal", 'cursor-pointer')}>
    {children}
  </span>
}
