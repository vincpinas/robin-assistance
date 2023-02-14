import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Cookies from 'cookies-js';
import { LanguageProvider } from './Components/Language/LanguageProvider';
import { languages } from './Components/Language/languages';

const [selectedLang, setSelectedLang] = useState(
  Cookies.get('lang') ? JSON.parse(Cookies.get('lang')) :
    languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase())) ? languages.find(o => navigator.language.includes(o.abbreviation.toLocaleLowerCase()))
      : languages[0]
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LanguageProvider lang={selectedLang} setLang={setSelectedLang}>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
