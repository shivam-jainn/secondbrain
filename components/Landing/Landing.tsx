'use client';

import React, { useEffect, useRef, useState } from 'react';

const Landing: React.FC = () => {
  const duckRef = useRef<HTMLDivElement | null>(null);
  const [, setShowButton] = useState(true);
  const radius = 200;
  const initialTransform = 'translate(-50%, -50%) rotate(-10deg)';

  const scrollToSection = () => {
    const section = document.getElementById('whyus');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (duckRef.current) {
        const duck = duckRef.current;
        const duckRect = duck.getBoundingClientRect();
        const duckCenterX = duckRect.left + duckRect.width / 2;
        const duckCenterY = duckRect.top + duckRect.height / 2;

        const dx = event.clientX - duckCenterX;
        const dy = event.clientY - duckCenterY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < radius) {
          const moveX = (dx / distance) * 30;
          const moveY = (dy / distance) * 30;
          duck.style.transform = `translate(-50%, -50%) translate(${-moveX}px, ${-moveY}px) rotate(20deg)`;
        } else {
          duck.style.transform = initialTransform;
        }
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-black overflow-hidden h-screen flex flex-col">
        <div className="h-[60vh] relative">
          <div className="text-white text-[8vw] font-bold text-center pt-12 z-20 font-dotgothic">
            Beyin
          </div>
          <div
            ref={duckRef}
            className="bg-[url('/smortduck.png')] bg-contain bg-center bg-no-repeat absolute top-[70%] left-1/2 transform translate-x-[-50%] translate-y-[-50%] rotate-[-10deg] w-[15vw] h-[15vw] min-w-[200px] min-h-[200px] pointer-events-none transition-transform duration-200 ease z-10"
          />
          <div className="text-white text-[6vw] font-bold text-center z-20">
            Your rubber duck for interview prep
          </div>
        </div>

        <div className="h-[40vh] flex justify-center items-center">
          <button
            onClick={scrollToSection}
            className="min-w-[120px] bg-white border-none rounded-full cursor-pointer text-black font-bold py-4 z-30"
            type="button"
          >
            Why Us?
          </button>
        </div>
      </section>

      {/* Why Us Section */}
      <section
        id="whyus"
        className="h-screen bg-black text-white flex flex-col gap-4 p-8"
      >
        <h2 className="font-bold text-[4vw]">Features</h2>

        <div>
          <p className="font-medium text-[3vw]">
            Learn faster with Socrates Method
          </p>
        </div>

        <div>
          <p className="font-medium text-[3vw]">
            Proof Of Learning with Badgepa.cc
          </p>
        </div>

        <div>
          <p className="font-medium text-[3vw]">
            Get hired faster with contests and bounties
          </p>
        </div>
      </section>
    </>
  );
};

export default Landing;
