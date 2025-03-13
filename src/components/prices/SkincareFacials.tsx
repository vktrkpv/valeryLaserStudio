import { Link } from 'react-router-dom';
import { skincareFacials } from '../../data/pricesData';
// import SkinCareAndFacials from '../services/Skincare/SkinCareAndFacials';

function SkincareFacials() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Skincare & Facials Prices
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skincareFacials.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="text-gray-600">{service.duration}</p>
              <p className="text-lg font-bold mt-2">{service.price}</p>
            </div>
            <div className="mt-4 flex justify-between">
              <Link
                to="/services"
                className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                Read More
              </Link>
              <button className="bg-[#A2DED0] text-white px-4 py-2 rounded-lg hover:bg-[#89CDBF] transition">
                Book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkincareFacials;
