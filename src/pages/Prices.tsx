import { useState } from 'react';
import LaserHairRemoval from '../components/prices/LaserHairRemoval';
import SkincareFacials from '../components/prices/SkincareFacials';
import BodyContouring from '../components/prices/BodyContouring';

function Prices() {
  const [activeTab, setActiveTab] = useState('laser');

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Our Prices</h1>

      <div className="flex justify-center space-x-4 pb-3">
        <button
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            activeTab === 'laser'
              ? 'bg-[#d0e4e4] text-black font-semibold shadow-md'
              : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
          } cursor-pointer`}
          onClick={() => setActiveTab('laser')}
        >
          Laser Hair Removal
        </button>

        <button
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            activeTab === 'skincare'
              ? 'bg-[#d0e4e4] text-black font-semibold shadow-md'
              : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
          } cursor-pointer`}
          onClick={() => setActiveTab('skincare')}
        >
          Skincare & Facials
        </button>

        <button
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            activeTab === 'body'
              ? 'bg-[#d0e4e4] text-black font-semibold shadow-md'
              : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
          } cursor-pointer`}
          onClick={() => setActiveTab('body')}
        >
          Body Contouring
        </button>
      </div>

      <div>
        {activeTab === 'laser' && <LaserHairRemoval />}
        {activeTab === 'skincare' && <SkincareFacials />}
        {activeTab === 'body' && <BodyContouring />}
      </div>
    </div>
  );
}

export default Prices;
