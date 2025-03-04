import laserConvincingPhoto from '../../../assets/laserConvincing.png';
import { Link } from 'react-router-dom';

function LaserConvincing() {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-12 my-12">
        <div className="flex-1 flex justify-center">
          <img
            src={laserConvincingPhoto}
            alt="Laser Hair Removal"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Need more convincing? Laser Hair Removal:
          </h2>
          <ul className="list-none space-y-4 mb-8">
            {[
              'Permanently reduces 10%-15% of hair per treatment',
              'Is safe, easy & proven effective',
              'Softens & smooths your skin',
              'Works on all skin types',
              'Saves you time & money by not shaving or waxing',
              'Lets you say goodbye to ingrown hairs & razor burn',
            ].map((text, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-[#F5F5F5] p-3 rounded-lg shadow-sm"
              >
                <div className="w-3 h-3 mt-1 bg-[#A2DED0] rounded-full flex-shrink-0" />
                <span className="text-gray-700 text-lg">{text}</span>
              </li>
            ))}
          </ul>
          <button className="bg-[#A2DED0] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300">
            <Link to="/contacts">BOOK APPOINTMENT</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LaserConvincing;
