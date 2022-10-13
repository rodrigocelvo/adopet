import { ThemeProvider } from 'styled-components';
import { THEME } from './theme';

import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
