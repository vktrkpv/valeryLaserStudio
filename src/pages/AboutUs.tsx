import { Link } from 'react-router-dom';
import aboutImage from '../assets/ownerPhoto.jpg';

function AboutUs() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">So, who am I?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gray-700 mb-4">
            My name is Valery, and I am the founder of Valery Laser Studio. To me,
            true professionalism is about continuous learning, growth, and a
            commitment to excellence in my field.
          </p>
          <p className="text-gray-700 mb-4">
            I take immense pride in my extensive professional training and
            expertise. Your well-being is my top priority, and I am dedicated to
            providing high-quality laser hair removal services with precision,
            care, and passion to ensure the best possible results.
          </p>
          <p className="text-gray-700 mb-4">
            My journey in the beauty industry began long before I arrived in
            Canada. In November 2022, I moved from Ukraine with my husband and two
            children, bringing with me years of experience, a strong work ethic,
            and an unwavering passion for helping people feel confident in their
            own skin. I deeply enjoy the process of transformation and take great
            satisfaction in seeing my clients achieve their desired results.
          </p>
          <p className="text-gray-700 mb-4">
            At Valery Laser Studio, we offer a comprehensive range of services
            tailored to help you look and feel your best. Achieving smooth,
            radiant skin is an investment in yourself—one that yields long-lasting
            confidence and beauty.
          </p>
          <p className="text-gray-700 mb-6">
            I look forward to welcoming you to my studio at <strong>3647 Dutch Village Road, Halifax</strong>. It would be my pleasure to guide you on your journey to
            flawless skin and answer any questions you may have.
          </p>

          <button className="bg-[#A2DED0] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#89CDBF] transition duration-300 cursor-pointer">
            <Link to="/contacts"></Link>
            Free Consultation
          </button>

        </div>
        <div className="flex justify-center">
          <img
          src={aboutImage}
          alt="Valery Laser Studio"
          className="rounded-2xl shadow-lg max-w-xs md:max-w-md"/>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
