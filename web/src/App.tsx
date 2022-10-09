import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Faq } from './pages/Faq';

import { THEME } from './theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
