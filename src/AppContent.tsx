import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Prices from './pages/Prices';
import AboutUs from './pages/AboutUs';
import WhyUs from './pages/WhyUs';
import Login from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import ResetPassword from './components/auth/ResetPassword';
import AdminDashboard from './components/dashboards/AdminDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import ConditionalHeader from './components/ConditionalHeader';
import Clients from './components/dashboards/ADMIN/Clients';
import BookingCalendar from './components/dashboards/ADMIN/BookingCalendar';

function AppContent(){

    const location = useLocation();
    const shouldHideHeader = location.pathname.startsWith("/admin");


    return(
        <div>
            {!shouldHideHeader && <ConditionalHeader />}
            <div className={shouldHideHeader ? "" : "mt-10"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whyus" element={<WhyUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
          <Route path="/admin/calendar" element={<ProtectedRoute><BookingCalendar /></ProtectedRoute>} />
        </Routes>
      </div>

        </div>
    )

}

export default AppContent;