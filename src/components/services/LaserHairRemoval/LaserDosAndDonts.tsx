import dosPhoto from "../../../assets/doesanddonts.png";

function LaserDosAndDonts() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-16">

     

      <div className="flex-1 space-y-8">
        <h3 className="text-3xl font-bold text-gray-800">
          LASER HAIR REMOVAL: DO'S AND DON'TS
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">DO's</h4>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>Shave all intended areas 24 hours before your appointment.</li>
              <li>Inform your nurse about any medications.</li>
              <li>Apply sunscreen, aloe gel, or ice packs after treatment.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">DON'Ts</h4>
            <ul className="space-y-2 text-lg text-gray-700">
              <li>Don't wax, pluck, thread, or use hair-removal creams.</li>
              <li>Avoid sun, self-tanning, or tanning beds.</li>
              <li>Skip hot showers, exercise, and skin irritants post-treatment.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={dosPhoto}
          alt="Laser Hair Removal Care"
          className="rounded-xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>

    </div>
  );
}

export default LaserDosAndDonts;

