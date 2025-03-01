import VideoSection from "../components/VideoSection";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Prices from "./Prices";
import Services from "./Services";

function Home() {
  return (
    <div>
        <VideoSection/>
        <AboutUs/>
        
        {/* <Services/>
        <Prices/>

        Bundles */}

        

        <Contacts/>


    </div>
  )
}

export default Home;
