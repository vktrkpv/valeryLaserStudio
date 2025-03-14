import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Header from './components/Header';
import Prices from './pages/Prices';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/WhyUs';
import Login from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';


function App() {
  return (
    <div>
      <Router>
        <Header />
        
        <div className="mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="aboutus" element={<AboutUs/> } />
            <Route path="prices" element={ <Prices/>} />
            <Route path="services" element={<Services />} />
            <Route path="whyus" element={<WhyUs/>} />
            <Route path="contacts" element={<Contacts />} />
            <Route path='login' element={<Login/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
