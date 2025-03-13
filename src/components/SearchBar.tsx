import { useState } from 'react';
import { servicesSearch, Service} from '../data/servicesSearchData';
import { useNavigate } from 'react-router-dom';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  // const navigate = useNavigate();

  const filteredServices = servicesSearch.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const handleSelectService = (service: Service ) => {
  //       setSearchTerm('');
  //       // navigate(service.path);
  // }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search services"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 rounded-2xl border border-gray-300 shadow-lg focus:ring-2 focus:ring-[#A2DED0] focus:outline-none transition duration-300 ease-in-out hover:shadow-xl cursor-pointer"
      />

      <div>
        {searchTerm && (
          <ul className="absolute left-0 mt-2 w-full max-w-md bg-white shadow-xl rounded-2xl p-4 max-h-60 overflow-y-auto transition-all duration-300 ease-in-out">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <li
                key={service.title}
                // onClick={() => handleSelectService(service) }
                 className="p-4 border-b last:border-0 cursor-pointer flex items-center space-x-4 bg-[#F5F5F5] hover:bg-[#A2DED0] hover:text-white rounded-lg transition-all duration-300">
                  {service.title}
                </li>
              ))
            ) : (
              <li className="p-4 text-gray-500 text-center rounded-lg bg-[#F5F5F5]">
                No results found
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
