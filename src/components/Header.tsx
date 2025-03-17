import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
  const [isMobileOpne, setIsMobileOpne] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-2 px-6 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Valery Laser Studio" className="h-12" />
        </Link>

        {/* Buttons for mobile version */}

        <div className="flex items-center space-x-3 md:hidden">
          <Link to="/login" className="text-black hover:text-[#8cd0cb]">
            Log In
          </Link>
          <Link to="/signup" className="text-black hover:text-[#8cd0cb]">
            Sign Up
          </Link>
          <button className="bg-[#3A5D56] text-white px-3 py-1 rounded-lg text-sm hover:bg-[#8cd0cb]">
            Book Appointmet
          </button>
        </div>

        {/* Burger btn */}

        <button
        className="md:hidden text-black text-2xl focus:outline-none ml-4"
        onClick={() => setIsMobileOpne(!isMobileOpne)}
        >
          {isMobileOpne ? <FiX/> : <FiMenu/>}
        </button>

{/* desktop version */}


        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-black hover:text-[#8cd0cb]">
                Main
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="text-black hover:text-[#8cd0cb]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-black hover:text-[#8cd0cb]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/prices" className="text-black hover:text-[#8cd0cb]">
                Prices
              </Link>
            </li>
            <li>
              <Link to="/packages" className="text-black hover:text-[#8cd0cb]">
                Bundles
              </Link>
            </li>

            <li>
              <Link to="/whyus" className="text-black hover:text-[#8cd0cb]">
                Why Us?
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-black hover:text-[#8cd0cb]">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <SearchBar />
        </div>

{/* desktop btns  */}

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-black hover:text-[#8cd0cb] cursor-pointer"
          >
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

      {/* dropdown menue */}

      {isMobileOpne && (
        <nav className="absolute top-[70px] right-4 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg md:hidden transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-2 py-4">
          <li><Link to="/" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>Main</Link></li>
            <li><Link to="/aboutus" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>About Us</Link></li>
            <li><Link to="/services" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>Services</Link></li>
            <li><Link to="/prices" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>Prices</Link></li>
            <li><Link to="/packages" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>Bundles</Link></li>
            <li><Link to="/whyus" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>Why Us?</Link></li>
            <li><Link to="/contacts" className="block px-6 py-3 text-lg font-medium text-black hover:bg-[#8cd0cb]/20 rounded-lg transition-all" onClick={() => setIsMobileOpne(false)}>Contacts</Link></li>

          </ul>

        </nav>
      )}


    </header>
  );
}

export default Header;
