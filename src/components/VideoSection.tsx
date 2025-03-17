import videoBg from '../assets/mainVideo2.mp4'
import { Link } from 'react-router-dom';

function VideoSection() {
    return(
        <div className="relative w-full h-screen overflow-hidden">
            <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoBg}
            autoPlay
            muted
            playsInline 
            loop
            preload="auto"
  crossOrigin="anonymous" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center mt-[-50px]">
                <h1 className="text-4xl font-bold drop-shadow-lg">Welcome to Valery Laser Studio</h1>
                <p className="mt-4 text-lg drop-shadow-lg">Discover your beauty with us</p>

                <div className="mt-6 flex space-x-4">
                    <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer">
                        <Link to="/prices">Prices</Link>
                    </button>
                    <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer">Book Appointment</button>
                    <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black cursor-pointer">
                        
                        <Link to="/contacts">Contact Us</Link>

                    </button>

                </div>
            </div>

        </div>
    )

}

export default VideoSection;