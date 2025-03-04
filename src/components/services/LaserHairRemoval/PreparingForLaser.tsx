import preparingPhoto from '../../../assets/preparingForLaser.png';

function PreparingForLaser() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-12">
      <div className="flex-1 flex justify-center">
        <img
          src={preparingPhoto}
          alt="Preparing for Laser Treatment"
          className="rounded-xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>

      <div className="flex-1">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          PREPARING FOR YOUR FIRST LASER HAIR TREATMENT
        </h3>

        <ul className="space-y-4 text-gray-700 text-lg">
          <li>
            <strong>Follow Shaving Guidelines:</strong> Shave with a fresh razor
            about 12 hours before your session to ensure the laser targets hair
            follicles effectively. Come with moisturizer-free, bare skin.
          </li>
          <li>
            <strong>Say No to Certain Hair Removal:</strong> Stop waxing,
            sugaring, plucking, or electrolysis at least a month before your
            treatment to avoid disrupting hair follicles.
          </li>
          <li>
            <strong>Avoid Sun Exposure and Booze:</strong> Protect your skin
            from the sun in the days leading up to your appointment, and skip
            tanning. Also, avoid alcohol the night before to minimize
            discomfort.
          </li>
        </ul>

        <div className="mt-8 p-6 bg-[#A2DED0] rounded-xl shadow-md flex items-center gap-4">
          <div className="w-2 h-full bg-[#3A5D56] rounded-md"></div>
          <p className="text-black text-xl font-bold leading-relaxed">
            Following these steps ensures optimal results with minimal
            discomfort during your laser hair treatment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PreparingForLaser;
