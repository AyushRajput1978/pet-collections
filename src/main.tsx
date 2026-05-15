import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { SelectionProvider } from './state/SelectionContext';
import { GlobalStyle } from './styles/GlobalStyle';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SelectionProvider>
        <GlobalStyle />
        <App />
      </SelectionProvider>
    </BrowserRouter>
  </StrictMode>,
);
