import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Faq } from './pages/Faq';
import { SignIn } from './pages/SignIn';

import { THEME } from './theme';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
