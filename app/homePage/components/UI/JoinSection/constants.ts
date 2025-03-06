import { StaticImageData } from 'next/image';
import robert_fox from '../../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "LAP concerts are an unforgettable experience! The energy, the music, and the crowd make every event truly special. I’ve never had this much fun at a concert before. Can't wait for the next one!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "The exclusive LAP merch is top-tier! The quality is amazing, and every piece feels like a statement. Wearing LAP merch makes me feel part of an incredible community.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Supporting LAP’s nonprofit initiatives has been a life-changing experience. Seeing the impact of our contributions and being part of something bigger than myself is truly fulfilling. I’m proud to be involved!",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "I love how LAP brings people together! From concerts to exclusive merch drops, every event is filled with positive vibes and amazing moments. It’s more than just music—it’s a movement!",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "LAP’s mission to give back through their nonprofit work is inspiring. Knowing that every purchase helps support a cause makes me even more excited to be a part of the LAP community.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];


export const desktopHeaderPhrase = ['Join over 3 million', 'members'];
