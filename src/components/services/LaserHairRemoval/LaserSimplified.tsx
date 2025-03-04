import laserSimplifiedPhoto from '../../../assets/laserSimplified.png';

function LaserSimplified() {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center gap-8 mb-16">

      <div className="flex-1 flex justify-center">
        <img
          src={laserSimplifiedPhoto}
          alt="Laser Hair Removal Simplified"
          className="rounded-xl shadow-lg w-full max-w-sm object-cover"
        />
      </div>

      <div className="flex-1 space-y-4">
        <h3 className="text-3xl font-bold text-gray-800">
          LASER HAIR REMOVAL SIMPLIFIED
        </h3>

        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>How It Works:</strong> Energy targets and eradicates hair follicles responsible for growth, without harming surrounding skin. Suitable for all skin types and most hair colors.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Cost-Effective:</strong> Laser proves more economical over time. Unlike waxing, it's not a lifelong commitment. Though the initial cost is higher, you save significantly in the long run.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>Say Goodbye to Ingrown Hair:</strong> Laser is the optimal solution for ingrown hair. It directly addresses the root cause by burning the follicle, preventing further hair production. Quick and effective.
        </p>
      </div>

    </div>
  );
}

export default LaserSimplified;
