function BodyImportantInfo() {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-2xl space-y-12 mb-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 drop-shadow-md">
        All You Need to Know
      </h2>

      <section className="space-y-6">
        <h3 className="text-3xl font-bold text-gray-800">
          Who is an Ideal Candidate?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          This treatment is perfect for those struggling with stubborn cellulite
          in areas like the hips, abdomen, and legs. Best results are achieved
          when combined with a healthy lifestyle.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          This is the only body-contouring device that optimizes metabolism,
          improves the subcutaneous fat layer, and boosts tissue regeneration.
          Plus, it features a facial attachment to smooth wrinkles and refresh
          your skin.
        </p>
      </section>

      <section className="space-y-6 bg-[#F5F5F5] p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-gray-800">
          How Many Treatments Are Needed?
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Body & limbs: 8–10 treatments, every 4–5 days (30 min each).</li>
          <li>Face: 10 treatments, once a week (15–20 min each).</li>
          <li>Eye wrinkles: 10 treatments, once a week (15 min each).</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800">
          How Long Do Results Last?
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Results can last for years, depending on age, lifestyle, and hormonal
          changes. Monthly maintenance treatments help prolong the effects.
          Expect to lose 1–5 cm on thighs and 2–6 cm on the abdomen and waist.
        </p>
      </section>

      <section className="space-y-6 bg-[#F5F5F5] p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold text-gray-800">
          Contraindications
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Although generally safe, please consult your doctor if you:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
          <li>Have a pacemaker or defibrillator.</li>
          <li>Are pregnant or nursing.</li>
          <li>Have severe health conditions.</li>
        </ul>
      </section>
    </div>
  );
}

export default BodyImportantInfo;
