import { useState } from 'react';
import Clock from './Clock';
import './App.css'
import { LanguageContext } from './Clock';


function App() {
  const [language, setLanguage] = useState('es');

  return (
    <>
      <LanguageContext.Provider value={{ language }}>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="it">Italian</option>
      </select>
      <Clock />
    </LanguageContext.Provider>
    </>
  )
}

export default App
