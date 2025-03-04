import bodyCavPhoto from '../../../assets/body/3.jpg'

function BodyCavBenefits() {
    return(
        <div className="bg-white p-10 rounded-3xl shadow-2xl space-y-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 drop-shadow-md">
        Benefits
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">

      <div className="flex-1 flex justify-center">
          <img
            src={bodyCavPhoto}
            alt="Cavitation Benefits"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        <ul className="flex-1 list-none space-y-4">
          {[
            "Improve blood circulation & lymphatic circulation",
            "Improve skin texture",
            "Body tightening",
            "No surgery / no pain",
            "No anesthesia",
            "Fat loss",
            "Cellulite improvement",
            "Circumference reduction",
            "Connective tissue tightening",
          ].map((text, index) => (
            <li
              key={index}
              className="flex items-start gap-3 bg-[#F5F5F5] p-4 rounded-lg shadow-md"
            >
              <div className="w-3 h-3 mt-2 bg-[#A2DED0] rounded-full flex-shrink-0" />
              <span className="text-gray-700 text-lg leading-relaxed">
                {text}
              </span>
            </li>
          ))}
        </ul>


      </div>
          
        </div>
    )

}

export default BodyCavBenefits;