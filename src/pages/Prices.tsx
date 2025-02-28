import { useState } from "react";
import LaserHairRemoval from "../components/prices/LaserHairRemoval";
import SkincareFacials from "../components/prices/SkincareFacials";
import BodyContouring from "../components/prices/BodyContouring";

function Prices() {

    const [activeTab, setActiveTab] = useState("laser");

    return(
        <div className="max-w-4xl mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Our Prices</h1>

            <div className="flex justify-center space-x-4 border-b pb-3">
                <button
                className={`px-4 py-2 ${activeTab === "laser" ? "border-b-2 border-[#d0e4e4] text-black" : "text-gray-600"} cursor-pointer`} 
                onClick={() => setActiveTab("laser")}>
                Laser Hair Removal
                </button>

                <button
                className={`px-4 py-2 ${activeTab === "skincare" ? "border-b-2 border-[#d0e4e4] text-black" : "text-gray-600"} cursor-pointer`} 
                onClick={() => setActiveTab("skincare")}>
                Skincare & Facials
                </button>

                <button
                className={`px-4 py-2 ${activeTab === "body" ? "border-b-2 border-[#d0e4e4] text-black" : "text-gray-600"} cursor-pointer`} 
                onClick={() => setActiveTab("body")}>
                Body Contouring
                </button>
            </div>

            <div>
                {activeTab === "laser" && <LaserHairRemoval/>}
                {activeTab === "skincare" && <SkincareFacials/>}
                {activeTab === "body" && <BodyContouring/>}
            </div>

            
        </div>
    )
}

export default Prices;