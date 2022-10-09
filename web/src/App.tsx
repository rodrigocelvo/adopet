import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';

import { THEME } from './theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/faq" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
