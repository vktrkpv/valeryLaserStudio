import antiAgingImg from '../assets/skinCare/1.png';
import rfLiftingImg from '../assets/skinCare/2.png';
import microcurrentImg from '../assets/skinCare/3.png';
import revitalizingImg from '../assets/skinCare/4.png';

export const servicesData = [
  {
    title: 'Anti-Aging Massage',
    description:
      'Facial massage is particularly beneficial for anti-aging because it improves circulation which means more oxygen and nutrient-rich blood is flowing to your face. This helps increase collagen production and boosts elasticity in the skin.',
    duration: '90 min',
    price: '$120',
    image: rfLiftingImg,
  },
  {
    title: 'Microcurrent Treatment',
    description:
      'Microcurrent therapy is a non-invasive cosmetic treatment that uses low-level electrical currents to stimulate facial muscles and promote collagen production, leading to improved muscle tone and tightened skin.',
    duration: '60 min',
    price: '$120',

    image: revitalizingImg,
  },
  {
    title: 'Radio Frequency Facial',
    description:
      'Non-invasive treatments utilise controlled radio frequency energy to heat up the underlying layers of the skin, which promotes collagen production and encourages tissue remodelling.',
    duration: '20 min',
    price: '$60',

    image: microcurrentImg,
  },
  {
    title: 'Renew & Glow Facial',
    description:
      'A cutting-edge facial that combines advanced technologies like microcurrent therapy, deep hydration techniques, and anti aging massage to refresh, lift, and restore your skin’s natural glow, leaving you feeling renewed and radiant.',
    duration: '90 min',
    price: '$185',
    image: antiAgingImg,
  },
];

export default servicesData;
