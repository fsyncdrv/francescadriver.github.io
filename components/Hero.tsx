"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroStyles from '@/app/styles/Hero.module.css';

const NUM_SPARKLES = 30;
const SPARKLE_SIZE = 85;

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  // Update window size on client-side after the component mounts
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  // Don't render the sparkles until the window size is available
  if (windowWidth === 0 || windowHeight === 0) {
    return null;
  }

  const sparkles = Array.from({ length: NUM_SPARKLES }, (_, i) => ({
    id: i,
    top: Math.random() * (100 - (SPARKLE_SIZE / windowHeight) * 100),
    left: Math.random() * (100 - (SPARKLE_SIZE / windowWidth) * 100),
  }));

  return (
    <div className={heroStyles.heroBg}>
      {sparkles.map((sparkle) => (
        <Image
          key={sparkle.id}
          src="/sparkle.svg"
          alt="sparkle image"
          width={SPARKLE_SIZE}
          height={SPARKLE_SIZE}
          style={{
            position: 'absolute',
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  )
}

export default Hero;
