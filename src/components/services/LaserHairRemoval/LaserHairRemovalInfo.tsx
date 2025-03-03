import { Link } from 'react-router-dom';
import laserPhoto from '../../../assets/laserInfoMain.png'
import ProsLaserHairRemoval from '../LaserHairRemoval/ProsLaserHairremoval';

function LaserHairRemovalInfo() {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            WHY LASER HAIR REMOVAL IS THE BEST OPTION?
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Stop spending time on shaving, or experiencing hurt from a painful
            waxing experience. Laser Hair Removal is a safe and effective hair
            removal option that saves you money in the long run.
          </p>
          <button className="bg-[#A2DED0] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300">
            <Link to="/contacts">Free Consultation</Link>
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={laserPhoto}
            alt="Laser Hair Removal"
            className="rounded-lg shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      <div className="mt-16">
        <ProsLaserHairRemoval />
      </div>

      <div className="mt-16">
        {/* Need more convincing? Laser Hair Removal…  */}
      </div>


    </div>
  );
}

export default LaserHairRemovalInfo;
