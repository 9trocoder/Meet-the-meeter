import { CommsProvider, ThemeProvider } from '@dolbyio/comms-uikit-react';
import React from 'react';
import { createRoot } from 'react-dom/client';

import './App.module.scss';
import TranslationProvider from './components/TranslationProvider';
import { ConferenceCreateProvider } from './context/ConferenceCreateContext';
import { Navigator } from './routes/Navigator';

const App = () => {
  return (
    <TranslationProvider>
      <ConferenceCreateProvider>
        <CommsProvider token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY2MDM0MzIzOSwic3ViIjoiR2k1bnJuYW5wN3NTTVpYcmZKNl9rUT09Iiwic2NvcGUiOiJzZXNzaW9uIiwib2lkIjoiZTRjNDJmOGItMjZiOS00MTk1LTk4M2YtNTEzMGMyNWViYjE1IiwiYmlkIjoiOGEzNjhjMWY4MjM0OTRmYzAxODI1YTMzYTQ4NTM3M2EiLCJhaWQiOiI2MDgyMTVlYS00NGFlLTRjNWUtOTFhMS03Yjg3NDI0NTU4ZDciLCJhdXRob3JpdGllcyI6WyJST0xFX0NVU1RPTUVSIl0sImV4cCI6MTY2MDM4NjQzOX0.P9ONdlPnkCN5DVcd9DRbnxneyolwBZddvE4rD9LEUIYqCI4c5C_S99vmDbNvuEE5jK9JHFckq21-Xs2a3GZChg">
          <ThemeProvider
            customThemes={{
              'My Theme': { colors: { white: 'yellow', primary: { 400: 'red' }, secondary: { 400: 'blue' } } },
            }}
          >
            <Navigator />
          </ThemeProvider>
        </CommsProvider>
      </ConferenceCreateProvider>
    </TranslationProvider>
  );
};

const container = document.getElementById('root');
// no-non-null-assertion comes from official react docs
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
