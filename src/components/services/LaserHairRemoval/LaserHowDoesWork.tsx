import LaserDosAndDonts from "./LaserDosAndDonts";
import LaserSimplified from "./LaserSimplified";
import LaserSuitability from "./LaserSuitability";

function LaserHowDoesWork(){
    return(
        <div className="space-y-12">
      <LaserSimplified />
      <LaserDosAndDonts />
      <LaserSuitability />
    </div>
    )

}

export default LaserHowDoesWork;