"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import heroStyles from '@/app/styles/Hero.module.css';
import Sparkle from '@/components/ui/Sparkle'

const NUM_SPARKLES = 180;
const SPARKLE_SIZE = 35;
const colors_night = [
   "#E219F7",
   "#E0B0FF",
   "#00008E",
   "#FFFFE0",
 ];

const colors = [
  "#DFFF00",
  "#ADFF2F",
  "#6495ED",
  "#80DAEB",
  "#FF8CBF",
];

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [sparkleColors, setSparkleColors] = useState(
    Array(NUM_SPARKLES).fill("white")
  );

  const [sparkles, setSparkles] = useState(() =>
    Array.from({ length: NUM_SPARKLES }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
    }))
  );

  // Update window size on client-side after the component mounts
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

  }, []);

  // Don't render the sparkles until the window size is available
  if (windowWidth === 0 || windowHeight === 0 || sparkles.length === 0) {
    return <div className={heroStyles.heroBg}/>;
  }

  const handleHover = (i: number) => {
    setSparkleColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[i] = colors[Math.floor(Math.random() * colors.length)];

      return newColors;
    });

    const timeoutSparkle = setTimeout(() => {
      setSparkleColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[i] = "white";
        return newColors;
      });
    }, 3000);

    return () => clearTimeout(timeoutSparkle);
  }

  return (
    <div className={heroStyles.heroBg}>

      {sparkles.map((sparkle, index) => (
        <Sparkle
          key={sparkle.id}
          alt="sparkle image"
          width={SPARKLE_SIZE}
          height={SPARKLE_SIZE}
          fill={sparkleColors[index]}
          style={{
            position: 'absolute',
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            pointerEvents: "auto",
            filter: `drop-shadow(0px 0px 12px ${sparkleColors[index]})`,
            transition: 'fill 10s ease-in-out, filter 1s ease-in-out',
          }}
          onMouseEnter={() => handleHover(index)}
        />
      ))}
    </div>
  )
}

export default Hero;
