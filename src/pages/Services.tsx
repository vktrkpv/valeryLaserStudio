import { useState } from 'react';
import LaserHairRemovalInfo from '../components/services/LaserHairRemoval/LaserHairRemovalInfo';
import LaserHairRemovalMen from '../components/services/LaserHairRemoval/LaserHairRemovalMen';
import LaserFirstRemoval from '../components/services/LaserHairRemoval/LaserFirstRemoval';
import LaserHowDoesWork from '../components/services/LaserHairRemoval/LaserHowDoesWork';
import BodyMainInfo from '../components/services/Bodycontouring/BodyMainInfo';
import BodyCavitation from '../components/services/Bodycontouring/BodyCavitation';
import SkinCareAndFacials from '../components/services/Skincare/SkinCareAndFacials';

const laserSubTabs = [
  {
    id: 'main',
    label: 'Main Information',
    component: <LaserHairRemovalInfo />,
  },
  { id: 'men', label: 'For Men', component: <LaserHairRemovalMen /> },
  { id: 'first', label: 'First Session', component: <LaserFirstRemoval /> },
  { id: 'how', label: 'How It Works?', component: <LaserHowDoesWork /> },
];

const bodySubTabs = [
  {
    id: 'main',
    label: 'Main Information',
    component: <BodyMainInfo />,
  },
  {
    id: 'ultrasound',
    label: 'Ultrasound Cavitation',
    component: <BodyCavitation />,
  },
];

function Services() {
  const [activeTab, setActiveTab] = useState('laser');
  const [selectedLaserSubTab, setSelectedLaserSubTab] = useState('main');
  const [selectedBodySubTab, setSelectedBodySubTab] = useState('main');
  const [isLaserDropdownOpen, setLaserDropdownOpen] = useState(false);
  const [isBodyDropdownOpen, setBodyDropdownOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Services
      </h1>

      <div className="flex justify-center space-x-4 pb-3">
        {/* Laser Hair removal */}
        <div className="relative">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === 'laser'
                ? 'bg-[#d0e4e4] text-black font-semibold shadow-md'
                : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
            } cursor-pointer`}
            onClick={() => {
              setActiveTab('laser');
              setLaserDropdownOpen(!isLaserDropdownOpen);
              setBodyDropdownOpen(false);
            }}
          >
            {' '}
            Laser Hair Removal ▼
          </button>

          {isLaserDropdownOpen && (
            <div className="absolute left-0 mt-2 rounded-lg w-full flex flex-col space-y-2 p-2 z-50">
              {laserSubTabs.map((tab) => (
                <button
                  className={`px-6 py-3 rounded-lg transition-all duration-300 w-full ${
                    selectedLaserSubTab === tab.id
                      ? 'bg-[#A2DED0] text-black font-semibold shadow-md'
                      : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#A2DED0] hover:text-black hover:shadow-md'
                  } cursor-pointer`}
                  key={tab.id}
                  onClick={() => {
                    setSelectedLaserSubTab(tab.id);
                    setLaserDropdownOpen(false);
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* skincare */}
        <button
          className={`px-6 py-3 rounded-lg transition-all duration-300 ${
            activeTab === 'skincare'
              ? 'bg-[#d0e4e4] text-black font-semibold shadow-md'
              : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
          } cursor-pointer`}
          onClick={() => {
            setActiveTab('skincare');
            setLaserDropdownOpen(false);
            setBodyDropdownOpen(false);
          }}
        >
          Skincare & Facials
        </button>

        {/* body  */}

        <div className="relative">
          <button
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeTab === 'body'
                ? // ? 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
                  //         : 'bg-[#d0e4e4] text-black font-semibold shadow-md'

                  'bg-[#d0e4e4] text-black font-semibold shadow-md'
                : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#d0e4e4] hover:text-black hover:shadow-md'
            } cursor-pointer`}
            onClick={() => {
              setActiveTab('body');
              setBodyDropdownOpen(!isBodyDropdownOpen);
              setLaserDropdownOpen(false);
            }}
          >
            Body Contouring ▼
          </button>

          {isBodyDropdownOpen && (
            <div className="absolute left-0 mt-2 rounded-lg w-full flex flex-col space-y-2 p-2 z-50">
              {bodySubTabs.map((tab) => (
                <button
                  className={`px-6 py-3 rounded-lg transition-all duration-300 w-full ${
                    selectedLaserSubTab === tab.id
                      ? 'bg-[#A2DED0] text-black font-semibold shadow-md'
                      : 'bg-[#F5F5F5] text-gray-600 hover:bg-[#A2DED0] hover:text-black hover:shadow-md'
                  } cursor-pointer`}
                  onClick={() => {
                    setSelectedBodySubTab(tab.id);
                    setBodyDropdownOpen(false);
                  }}
                  key={tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-white rounded-lg">
        {activeTab === 'laser' && (
          <div>
            {
              laserSubTabs.find((tab) => tab.id === selectedLaserSubTab)
                ?.component
            }
          </div>
        )}

        {activeTab === 'skincare' && <SkinCareAndFacials />}

        {activeTab === 'body' && (
          <div>
            {
              bodySubTabs.find((tab) => tab.id === selectedBodySubTab)
                ?.component
            }
          </div>
        )}
      </div>
    </div>
  );
}

export default Services;
