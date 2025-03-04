import suitabilityPhoto from "../../../assets/laserSuitability.png";
import { Link } from "react-router-dom";

function LaserSuitability() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-16">

      <div className="flex-1 flex justify-center">
        <img
          src={suitabilityPhoto}
          alt="Laser Suitability"
          className="rounded-xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>

      <div className="flex-1 space-y-6">
        <h3 className="text-3xl font-bold text-gray-800">
          LASER HAIR REMOVAL SUITABILITY
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>For All Skin Types:</strong> While laser hair removal is suitable for all skin types, optimal results are achieved with fair skin and dark, thick hair. Lighter hair may respond less effectively, and red, white, or gray hair may not benefit significantly.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Body Areas Suitable for Treatment:</strong> Laser hair removal works on areas like arms, legs, bikini, chest, face, upper lip, and neck. It's not recommended for the eye area or over tattoos.
        </p>

        <div>
          <Link to="/contacts">
            <button className="mt-4 bg-[#A2DED0] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300">
              Book Appointment
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default LaserSuitability;
