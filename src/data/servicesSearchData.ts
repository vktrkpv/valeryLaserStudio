
export const servicesSearch: Service[] = [
    {
        title: "Laser Hair Removal",
        category: "Laser",
        description: "Smooth skin forever",
      },
      {
        title: "RF Lifting",
        category: "Facial",
        description: "Tightens and firms skin",
      },
      {
        title: "Vacuum Roller Slimming",
        category: "Body",
        description: "Helps shape your body",
      },
]

export interface Service {
  title: string;
  category: string;
  description: string;
}