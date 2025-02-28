import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="bg-white shadow-md py-2 px-6 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Valery Laser Studio" className="h-12" />
        </Link>

        <nav className="flex">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-black hover:text-[#8cd0cb]">
                Main
              </Link>
            </li>
            <li>
            <Link to="/prices" className="text-black hover:text-[#8cd0cb]">
                Prices
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-black hover:text-[#8cd0cb]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-black hover:text-[#8cd0cb]">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-black hover:text-[#8cd0cb] cursor-pointer">
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-black hover:text-[#8cd0cb] cursor-pointer"
          >
            Sign Up
          </Link>
          <button className="bg-[#3A5D56] text-white px-4 py-2 rounded-lg hover:bg-[#8cd0cb] cursor-pointer">
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
