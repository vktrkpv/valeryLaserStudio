
import { JSX } from "react"; 
// import LaserHairRemovalInfo from "../components/services/LaserHairRemoval/LaserHairRemovalInfo";


export const servicesSearch: Service[] = [
    {
        title: "Laser Hair Removal",
        category: "Laser",
        description: "Smooth skin forever",
        // path: <LaserHairRemovalInfo/> ,      
      },
      {
        title: "RF Lifting",
        category: "Facial",
        description: "Tightens and firms skin",
        // path: "/services/laser-hair-removal",
      },
      {
        title: "Vacuum Roller Slimming",
        category: "Body",
        description: "Helps shape your body",
        // path: "/services/laser-hair-removal",
      },
]

export interface Service {
  title: string;
  category: string;
  description: string;
  // path: JSX.Element;
}