import servicesData from '../../../data/servicesData';
import { Link } from 'react-router-dom';

function SkinCareServices() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="group p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 space-y-5"        >
         <div className="overflow-hidden rounded-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h4 className="text-2xl font-bold text-gray-800">
            {service.title}
          </h4>
          <p className="text-lg text-gray-700">{service.description}</p>


          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Duration: {service.duration}</span>
            {service.price && <span>Price: {service.price}</span>}
          </div>

          <button className="mt-2 bg-[#A2DED0] text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300">
            <Link to="/contacts">Book Appointment</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default SkinCareServices;
