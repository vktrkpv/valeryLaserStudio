import laserForSkin from '../../../assets/LaserSafeForSkin.png';

function SafeLaserForSkin() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-16">
      <div className="flex-1 flex justify-center">
        <img
          src={laserForSkin}
          alt="Safe Laser Hair Removal"
          className="rounded-xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>
      <div className="flex-1">
      <h3 className="text-3xl font-bold text-gray-800 mb-6">
          IS YOUR LASER SAFE FOR MY SKIN?
        </h3>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Absolutely! Laser hair removal is completely safe for your skin.
        </p>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          We understand that some people worry about the word "radiation," but rest assured — the type of radiation used during laser hair removal is <strong>non-ionizing</strong>, which means it doesn’t harm your cells or increase any cancer risks (unlike the radiation used in MRI or CT scans).
        </p>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Our advanced laser technology is <strong>FDA-approved</strong> and has been thoroughly tested to guarantee both safety and effectiveness.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          At Valery Laser Studio, your skin’s health is our top priority. We’re committed to providing you with the most <strong>comfortable, safe, and effective</strong> treatments, so you can enjoy smooth skin with total confidence.
        </p>

      </div>
    </div>
  );
}

export default SafeLaserForSkin;
