import { useState } from "react";

export const bodySubTabs = [
    { id: "main", label: "Main Information", content: "Main information about Body Contouring." },
    { id: "ultrasound", label: "Ultrasound Cavitation", content: "Ultrasound Cavitation details." },
  ];

function BodyContouringTabs() {
    const [activeSubTab, setActiveSubTab] = useState('main');
    return(
        <div>

            <div className="flex justify-center space-x-3 pb-3">
                {bodySubTabs.map((subTab) => (
                    <button
                    key={subTab.id}
                    onClick={() => setActiveSubTab(subTab.id)}
                    className={`px-4 py-2 rounded-md transition-all duration-300 ${
                        activeSubTab === subTab.id ? "bg-[#A2DED0] text-black font-semibold shadow-sm" : "bg-gray-200 hover:bg-[#A2DED0]"
                      } cursor-pointer`}
                    >
                        {subTab.label}

                    </button>
                ))}

            </div>

            {/* <div className="mt-6">{bodySubTabs.find((tab) => tab.id === activeSubTab)? }</div> */}
            
        </div>
    )

}

export default BodyContouringTabs;