import SkinCareServices from "./SkinCareServices";

function SkinCareAndFacials() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md space-y-12">
      <div className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-800">
          Anti Aging Facial Treatment
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          At Valery Laser Studio, I offer a variety of advanced treatments designed to meet all your skincare needs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          From our signature <strong>Anti-Aging Massage</strong>, which boosts collagen and helps you fully relax, to <strong>RF Lifting</strong> that tightens and firms the skin with cutting-edge radiofrequency technology.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Looking for a natural lift? Our <strong>Microcurrent Treatment</strong> gently tones and sculpts facial muscles without any downtime. For the ultimate glow, the <strong>Revitalizing Skin Treatment</strong> blends LED light therapy with deep hydration to leave your skin smooth, radiant, and refreshed.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          ✨ Give your skin the care it deserves with treatments that deliver visible, long-lasting results.
        </p>
      </div>

      <div>
        <SkinCareServices/>
      </div>
    </div>
  );
}

export default SkinCareAndFacials;
