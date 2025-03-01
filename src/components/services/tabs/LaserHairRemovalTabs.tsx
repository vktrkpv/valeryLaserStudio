import { useState } from 'react';
import LaserHairRemovalInfo from '../LaserHairRemoval/info/LaserHairRemovalInfo';

export const laserSubTabs = [
  {
    id: 'main',
    label: 'Main Information',
    component: <LaserHairRemovalInfo />,
  },
  { id: 'men', label: 'For Men' },
  { id: 'first', label: 'First Session' },
  { id: 'how', label: 'How It Works?' },
];

function LaserHairRemovalTabs() {
  const [activeSubTab, setActiveTab] = useState('main');

  return (
    <div>
      <div className="flex justify-center space-x-3 pb-3">
        {laserSubTabs.map((subTab) => (
          <button
            key={subTab.id}
            onClick={() => setActiveTab(subTab.id)}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeSubTab === subTab.id
                ? 'bg-[#A2DED0] text-black font-semibold shadow-sm'
                : 'bg-gray-200 hover:bg-[#A2DED0]'
            } cursor-pointer`}
          >
            {subTab.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {laserSubTabs.find((tab) => tab.id === activeSubTab)?.component}
      </div>
    </div>
  );
}

export default LaserHairRemovalTabs;
