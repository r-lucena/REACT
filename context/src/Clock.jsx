import { useContext } from 'react';


export const LanguageContext = {
    _currentValue: null,
    Provider: ({ value, children }) => {
      LanguageContext._currentValue = value;
      return children;
    },
    Consumer: ({ children }) => children(LanguageContext._currentValue),
  };

const Clock = () => {
    const { language } = useContext(LanguageContext);
  
    let currentTimeMessage;
    switch (language) {
      case 'en':
        currentTimeMessage = 'Current time:';
        break;
      case 'es':
        currentTimeMessage = 'Hora actual:';
        break;
      case 'fr':
        currentTimeMessage = 'Heure actuelle:';
        break;
      case 'it':
        currentTimeMessage = "Ora attuale:";
        break;
      default:
        currentTimeMessage = 'Hora actual:';
    }
  
    return (
      <div>
        <h1>{currentTimeMessage} {new Date().toLocaleTimeString()}</h1>
      </div>
    );
  };

export default Clock