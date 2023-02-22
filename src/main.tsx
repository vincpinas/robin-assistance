import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './Components/Language/LanguageProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
          <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
