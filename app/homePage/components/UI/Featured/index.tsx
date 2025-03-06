'use client';

import Image from 'next/image';
import featured_mobile_banner from '../../../../../public/images/featured_mobile_banner.png';
import ParallaxText from '../../Common/ParallaxImages';
import companies_image from '../../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages, Div, CardsContainer } from './styles';
import concert1 from '.././../../../../public/images/concert1.jpg'
import concert2 from '.././../../../../public/images/concert2.jpeg'
import concert3 from '.././../../../../public/images/concert3.webp'
import RevealCover from '../../Common/RevealCover';
import { useIsMobile } from '@/libs/useIsMobile';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

export const imageVariants = {
  hidden: {
    scale: 1.6,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.6, 0.05, -0.01, 0.9],
      delay: 0.2,
    },
  },
};

const Featured = () => {
  const isMobile = useIsMobile();
  
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <RevealCover />
          <Div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.25, once: true }}
          >
            {isMobile ? (
              <Image src={featured_mobile_banner} alt="featured_mobile_banner" fill />
            ) : (
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/tr4Uk7WaBKo?autoplay=1&mute=1&loop=1&playlist=tr4Uk7WaBKo"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              ></iframe>
            )}
          </Div>
        </ImageContainer>

        <h2>Past Live Concerts</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="companies" />
          </ParallaxText>
        </ParallaxImages>

        {/* 3D Cards Section */}
        <CardsContainer>
          {[{
            title: "Diluminati Concert",
            description: "Experience the energy of LAP concerts like never before.",
            image:concert1
          }, {
            title: "La Prepo",
            description: "Experience the energy of LAP concerts like never before.",
            image:concert2
          }, {
            title: "Millionaire Tour",
            description: "Experience the energy of LAP concerts like never before.",
            image:concert3
          }, {
            title: "Dilluminati",
            description: "Access exclusive backstage moments with LAP artists.",
            image:concert1
          }].map((card, index) => (
            <CardContainer key={index}>
              <CardBody>
                <CardItem>
                  <Image src={card.image} alt={card.title} width={300} height={300} />
                  <h3 className='text-3xl font-bold'>{card.title}</h3>
                  <p>{card.description}</p>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </CardsContainer>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
