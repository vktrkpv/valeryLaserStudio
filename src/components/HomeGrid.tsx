import { Link } from 'react-router-dom';
import gridPhoto from '../assets/skinCare/1.png';

function HomeGrid() {
  return (
    <div className="grid grid-cols-3 gap-1 p-6 max-w-6xl mx-auto px-6">
      <Link
        to="/prices"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d0e4e4] to-[#A2DED0] text-black text-xl font-semibold p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
      >
        <h2 className="text-3xl font-extrabold">PRICES</h2>
        <p className="text-base mt-2 opacity-90">Find out the cost of our services.</p>
      </Link>

      <div className="bg-gray-200 rounded-lg shadow-lg">
        <img
          src={gridPhoto}
          alt="gridhome"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Link
        to="/packages"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d0e4e4] to-[#A2DED0] text-black text-xl font-semibold p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center hover:animate-pulse"      >
        <h2 className="text-3xl font-extrabold">Bundles</h2>
        <p className="text-base mt-2 opacity-90">Profitable service packages</p>
      </Link>

      <div className="bg-gray-200 rounded-lg shadow-lg">
        <img
          src={gridPhoto}
          alt="gridhome"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Link
        to="/services"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d0e4e4] to-[#A2DED0] text-black text-xl font-semibold p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center hover:animate-pulse"      >
        
        <h2 className="text-3xl font-extrabold">Services</h2>
        <p className="text-base mt-2 opacity-90">Explore all our procedures</p>
      </Link>

      <div className="bg-gray-200 rounded-lg shadow-lg">
        <img
          src={gridPhoto}
          alt="gridhome"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Link
        to="/whyus"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d0e4e4] to-[#A2DED0] text-black text-xl font-semibold p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center hover:animate-pulse"      >
        
        <h2 className="text-3xl font-extrabold">Why Us?</h2>
        <p className="text-base mt-2 opacity-90">Answers to the most common questions</p>
      </Link>

      <div className="bg-gray-200 rounded-lg shadow-lg">
        <img
          src={gridPhoto}
          alt="gridhome"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <Link
        to="/reviews"
        className="flex flex-col items-center justify-center bg-gradient-to-b from-[#d0e4e4] to-[#A2DED0] text-black text-xl font-semibold p-8 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center hover:animate-pulse"      >
        <h2 className="text-3xl font-extrabold">Reviews</h2>
        <p className="text-base mt-2 opacity-90">Read our clients' reviews.</p>
      </Link>
    </div>
  );
}

export default HomeGrid;
