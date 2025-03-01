import { prosData } from "../../data/prosData";

function ProsLaserHairRemoval(){
    return(
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        PROS OF LASER HAIR REMOVAL:
      </h2>
      <div className="space-y-6">
        {prosData.map((item, index) => (
          <div key={index} className="p-4 bg-[#F5F5F5] rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  
    )
}

export default ProsLaserHairRemoval;