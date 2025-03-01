import { useState } from 'react';
import LaserHairRemovalTabs from '../components/services/tabs/LaserHairRemovalTabs';
import BodyContouringTabs from '../components/services/tabs/BodyContouringTabs';

export const mainTabs = [
  { id: 'laser', label: 'Laser Hair Removal' },
  { id: 'skincare', label: 'Skincare & Facials' },
  { id: 'body', label: 'Body Contouring' },
];

function Services() {
  const [activeTab, setActiveTab] = useState('laser');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h1>

      <div className="flex justify-center space-x-4 pb-3">
        {mainTabs.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-[#d0e4e4] text-black font-semibold shadow-md'
                : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
            } cursor-pointer`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
        {activeTab === 'laser' && <LaserHairRemovalTabs />}
        {activeTab === 'skincare' && <p>Skincare & Facials Content</p>}
        {activeTab === 'body' && <BodyContouringTabs />}
      </div>
    </div>
  );
}

export default Services;
