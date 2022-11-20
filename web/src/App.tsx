import { ThemeProvider } from 'styled-components';
import { THEME } from './theme';

import { Routes } from './routes';
import { AuthContextProvider } from './hooks/auth';

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={THEME}>
        <Routes />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
