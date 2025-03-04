import { Link } from "react-router-dom";
import bodyCavPhoto from '../../../assets/body/2.png'
import BodyCavBenefits from "./BodyCavBenefits";

function BodyCavitation(){
    return(
        <div>
            <div
        className="relative bg-cover bg-center bg-no-repeat rounded-2xl shadow-md text-white h-64 flex items-center justify-center mb-16"
        style={{ backgroundImage: `url(${bodyCavPhoto})` }}
      >
        <div className=" bg-opacity-50 p-8 rounded-xl text-center space-y-4">
          <h2 className="text-4xl font-bold text-white drop-shadow-md">
            Vacuum Roller Slimming Therapy
          </h2>
          <Link to="/contacts">
            <button className="mt-4 bg-[#A2DED0] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300 cursor-pointer">
              BOOK APPOINTMENT
            </button>
          </Link>
        </div>
      </div>

      <BodyCavBenefits/>


        </div>
        
       
    )

}

export default BodyCavitation;