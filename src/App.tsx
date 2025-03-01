import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Prices from './pages/Prices';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/WhyUs';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs/> } />
          <Route path="prices" element={ <Prices/>} />
          <Route path="services" element={<Services />} />
          <Route path="whyus" element={<WhyUs/>} />
          <Route path="contacts" element={<Contacts />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
