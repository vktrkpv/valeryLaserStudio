import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ownerPhoto from '../assets/ownerPhoto.jpg';

function Contacts() {
  return (
    <div 
    className="w-full flex flex-col md:flex-row items-center md:items-start justify-around bg-white p-8 py-19 "     >
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">Contacts:</h2>
        <div className="space-y-4 text-lg text-gray-700">
          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-[#A2DED0] text-2xl" />
            <strong>Location:</strong> 3647 Dutch Village Rd Halifax, NS B3N 2T1
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-[#A2DED0] text-2xl" />
            <strong>Phone:</strong> +1 (902) 717 93 43
          </p>

          <p className="flex items-center gap-3">
            <FaEnvelope className="text-[#A2DED0] text-2xl" />
            <strong>Email:</strong> valerylaserstudio@gmail.com
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="flex items-center gap-3 text-lg text-gray-700 font-semibold">
              <FaClock className="text-[#A2DED0] text-3xl" />
              <span className="text-2xl font-bold text-gray-900">
                Business Hours
              </span>
            </p>
            <div className="mt-3 text-gray-700 text-lg space-y-1">
              <p className="flex justify-between border-b pb-2">
                <span>Weekdays:</span>{' '}
                <span className="font-semibold">9AM – 7PM</span>
              </p>
              <p className="flex justify-between border-b pb-2">
                <span>Saturday:</span>{' '}
                <span className="font-semibold">10 AM – 6 PM</span>
              </p>
              <p className="flex justify-between text-red-500 font-semibold">
                <span>Sunday:</span> <span>CLOSED</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img
            src={ownerPhoto}
            alt="owner"
            className="rounded-xl shadow-lg w-80 h-80 object-cover"
          />
        </div>
        <div className="mt-6 flex justify-center">
          <button className="bg-[#A2DED0] text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-[#88C0B2] hover:shadow-xl cursor-pointer">
            BOOK FREE CONSULTATION
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Contacts;
