import { createContext, useContext, useEffect, useState } from "react";
import { LanguageProviderInitialState, LanguageProviderProps } from "../../@types/lang";
import { translations, languages } from "./languages";
import Cookies from "cookies-js";


const INITIAL_STATE: LanguageProviderInitialState = {
  dict: translations.english,
  lang: languages[0],
  setLang: () => { },
}

// Context initialization
export const LanguageContext = createContext(INITIAL_STATE);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState(
    Cookies.get("lang") ? JSON.parse(Cookies.get("lang")) :
      languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase())) ? languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase()))
        : languages[0]
  );

  const getDictionary = () => {
    switch (lang.abbreviation) {
      case "EN":
        return translations.english;
      case "NL":
        return translations.dutch;
      default:
        return translations.english;
    }
  }

  const [currentDictionary, setCurrentDictionary] = useState(getDictionary())

  useEffect(() => {
    setCurrentDictionary(getDictionary())
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{ dict: currentDictionary, lang, setLang }}
    >
      {children}
    </LanguageContext.Provider>
  )
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  return context;
};