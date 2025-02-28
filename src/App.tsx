import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
