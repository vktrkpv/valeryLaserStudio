import { prosData } from '../../../data/prosData';

function ProsLaserHairRemoval() {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        PROS OF LASER HAIR REMOVAL:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {prosData.map((item, index) => (
          <div 
          key={index} 
          className="p-6 bg-[#A2DED0] text-white rounded-xl shadow-lg flex flex-col items-center text-center">
            <h3 className="text-2xl font-semibold">
              {item.title}
            </h3>
            <p className="mt-2 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProsLaserHairRemoval;
