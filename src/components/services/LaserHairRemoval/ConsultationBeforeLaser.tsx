import consultationPhoto from "../../../assets/consulationLaser.png"

function ConsultationBeforeLaser() {
    return(
        <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-16">
            <div className="flex-1">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
          CONSULTATION BEFORE LASER HAIR REMOVAL
        </h3>

        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          Before starting your laser hair removal journey, it’s important to check with your healthcare provider if you:
        </p>

        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li>Are pregnant.</li>
          <li>Take medications like acne treatments.</li>
          <li>Have genital herpes or are prone to cold sores.</li>
          <li>Have a history of keloid (raised) scars.</li>
          <li>Have or have had skin cancer.</li>
        </ul>

        <p className="mt-6 text-lg text-gray-700 leading-relaxed font-semibold">
          ✨ Your safety always comes first. If any of these apply to you, a quick consultation with your doctor will help ensure that laser hair removal is the right choice for you.
        </p>
      </div>

      <div className="flex-1 flex justify-center">
        <img
          src={consultationPhoto}
          alt="Consultation Before Laser Hair Removal"
          className="rounded-xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>


        </div>
    )
}

export default ConsultationBeforeLaser;