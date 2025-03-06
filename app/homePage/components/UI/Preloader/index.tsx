'use client';
import Image from 'next/image';
import ic_import from '../../../../../public/svgs/ic_import.svg';
import raft from '../../../../../public/svgs/cnbc.svg';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['L', '.', 'A', '.', 'P'];

  const spans = useRef<HTMLDivElement[]>([]); // Specify correct type for ref
  const imageRef = useRef<HTMLImageElement | null>(null);
  const secondOverlayRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)',
      duration: 1.4,
    });
    tl.to(imageRef.current, {
      y: '-100%',
      ease: 'back.out(1.7)',
    });
    tl.to(spans.current, {
      y: '-100%',
      ease: 'back.out(1.7)',
      duration: 1.4,
      stagger: 0.05,
    });
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9,
    });
  }, [setComplete]);

  return (
    <>
      {/* Ensure the wrapper div is properly placed */}
      <div id="preloader-container">
        <Wrapper ref={wrapperRef}>
          <Inner>
            <Image ref={imageRef} src={ic_import} alt="import icon" />
            <div>
              {word.map((t, i) => (
                <div
                  key={i}
                  ref={(element) => {
                    if (element) spans.current[i] = element; // Assign ref safely
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </Inner>
        </Wrapper>
        <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
      </div>
    </>
  );
};

export default Preloader;
