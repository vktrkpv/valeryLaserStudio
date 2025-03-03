import { Link } from 'react-router-dom';
import bgPhotoMen from '../../../assets/LaserHairRemovalMen/men1.png'

function LaserHairRemovalMen() {
  return (
    <div>
        <div className="relative bg-cover bg-center py-20" style={{ backgroundImage: `url(${bgPhotoMen})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Laser Hair Removal for Men
              </h2>
              <p className="text-lg mb-6">
                Throw out the razors. No more waxing. Say hello to medical-grade Laser
                Hair Removal and enjoy the freedom of being ready at a moment's notice.
              </p>
              <div className="text-center mb-8">
                <button className="bg-[#A2DED0] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300">
                    <Link to="/contacts">Free Consultation</Link>
                </button>
              </div>
          </div>
        </div>


        <div className="space-y-10">
        {/* Перевага 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">01. NO NEED TO DEAL WITH SHAVING</h3>
            <p className="text-gray-700 mt-2">
              One of the primary benefits of laser hair removal treatment is that men no longer need to shave daily.
              With just a few sessions, you will notice a significant decrease in hair growth. This can save you a lot of time and money on various shaving products.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={bgPhotoMen} alt="No Shaving" className="rounded-lg shadow-lg w-full max-w-sm" />
          </div>
        </div>

        {/* Перевага 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">02. EFFECTIVE HAIR REDUCTION</h3>
            <p className="text-gray-700 mt-2">
              If you don’t want to be completely hair-free, you can opt to reduce growth in a particular area with laser hair removal.
              The treatment allows men to thin out their hair, making it less visible and easier to maintain.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={bgPhotoMen} alt="Effective Hair Reduction" className="rounded-lg shadow-lg w-full max-w-sm" />
          </div>
        </div>

        {/* Перевага 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">03. BOOSTS CONFIDENCE</h3>
            <p className="text-gray-700 mt-2">
              Having excess hair can make your body warmer, and it can trap excess moisture.
              By targeting unwanted hair, laser hair removal treatment helps reduce the effects of sweating.
              This can make you feel more confident in public settings.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={bgPhotoMen} alt="Boosts Confidence" className="rounded-lg shadow-lg w-full max-w-sm" />
          </div>
        </div>

        {/* Перевага 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-gray-800">04. PREVENTS INGROWN HAIRS</h3>
            <p className="text-gray-700 mt-2">
              Men usually deal with ingrown hairs on the chest, neck, and groin. These hairs can be difficult to get rid of and often cause painful bumps.
              Our laser hair removal service at Valery Laser Studio can help prevent these ingrown hairs while ensuring that your skin is not irritated.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={bgPhotoMen} alt="Prevents Ingrown Hairs" className="rounded-lg shadow-lg w-full max-w-sm" />
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-700 mb-4">
          Gentlemen, it’s time to experience the next level of grooming with Valery Laser & SkinCare Studio hair removal services for men!
        </p>
        <Link to="/booking">
          <button className="bg-[#A2DED0] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-[#89CDBF] transition duration-300 cursor-pointer">
            BOOK APPOINTMENT
          </button>
        </Link>
      </div>

    </div>
  );
}

export default LaserHairRemovalMen;
