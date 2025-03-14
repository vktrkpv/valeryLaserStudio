import Footer from "../components/Footer";
import GoogleReviews from "../components/GoogleReviews";
import HomeGrid from "../components/HomeGrid";
import VideoSection from "../components/VideoSection";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
// import Prices from "./Prices";
// import Services from "./Services";

function Home() {
  return (
    <div>
        <VideoSection/>
        <AboutUs/>
        <HomeGrid/>
        <Contacts/>
        <GoogleReviews />
        <Footer/>
    </div>
  )
}

export default Home;
