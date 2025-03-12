import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="text-[#A2DED0]" /> 123 Main Street, Toronto, ON
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaPhone className="text-[#A2DED0]" /> +1 (123) 456-7890
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaEnvelope className="text-[#A2DED0]" /> info@example.com
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="text-[#A2DED0] text-3xl hover:text-white transition">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#A2DED0] text-3xl hover:text-white transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
        <h2 className="text-2xl font-bold mb-4">Location</h2>
          <div className="w-full h-40 bg-gray-700 flex items-center justify-center text-gray-400 rounded-lg">
          <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.3140200732028!2d-63.631897499999994!3d44.6584886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2580290591e9%3A0x3908b4ab03f242a9!2sValery%20Laser%20Studio!5e1!3m2!1sru!2sca!4v1741797548463!5m2!1sru!2sca" 
          width="100%" 
          height="100%" 
        loading="lazy"
        className="rounded-lg"></iframe>
          </div>
        </div>


        

        
            </div>
            <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Valery Laser Studio. All Rights Reserved.
      </div>
        </footer>
    )
}

export default Footer;