import { Link } from "react-router-dom";
import PreparingForLaser from "./PreparingForLaser";
import SafeLaserForSkin from "./SafeLaserForSkin";
import ConsultationBeforeLaser from "./ConsultationBeforeLaser";

function LaserFirstRemoval(){
    return(
        <div >
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-8 mb-12">
                <h2 className="text-xl font-bold text-gray-800 text-center">
                        RECOMMENDED SESSIONS FOR OPTIMAL RESULTS
                      </h2>
                      <p className="text-lg text-gray-700 text-center">
                        Valery Laser Studio suggests undergoing a complete series of 6 sessions to achieve lasting results with up to an 80% reduction. Sessions 1 and 3 may serve as touch-ups, while individuals with specific hair growth types may require up to 8 sessions.
                      </p>
                      <div className="flex justify-center">
                        <Link to="/contacts">
                          <button className="bg-[#A2DED0] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300 cursor-pointer">
                Book Appointment
                          </button>
                        </Link>
                      </div>
                      
            </div>
            

      <div className="space-y-6 ">
        <PreparingForLaser />
        <SafeLaserForSkin />
        <ConsultationBeforeLaser/>

      </div>
            
        </div>
    )

}

export default LaserFirstRemoval;