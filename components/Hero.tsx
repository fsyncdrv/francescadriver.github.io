"use client";
import React, { useState, useEffect } from 'react';
import heroStyles from "@/app/styles/Hero.module.css";

const Hero = () => {

  const colors = [
    "#DFFF00",
    "#ADFF2F",
    "#6495ED",
    "#80DAEB",
    "#FF8CBF",
  ];
  // TODO: implement day/night sparkle color change
  // const colors_night = [
  //   "#E219F7",
  //   "#E0B0FF",
  //   "#00008E",
  //   "#FFFFE0",
  // ];
  const sparkleCount = 180;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [positions, setPositions] = useState<{ left: string; top: string }[]>([]);
  const [activeColors, setActiveColors] = useState<string[]>(Array(sparkleCount).fill("#FFF"));


  const getRandomColorFromArray = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };


  useEffect(() => {
    const initialPositions = Array.from({ length: sparkleCount }).map(() => {
      const randomLeft = Math.random() * 100;
      const randomTop = Math.random() * 100;
      return {
        left: `${randomLeft}%`,
        top: `${randomTop}%`,
      }
    })
    setPositions(initialPositions);
  }, []);


  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setActiveColors((prevColors) => {
      const newColors = [...prevColors]
      newColors[index] = getRandomColorFromArray();
      return newColors;
    })
  }


  const handleMouseLeave = (index: number) => {
    setTimeout(() => {
      setActiveColors((prevColors) => {
        const newColors = [...prevColors];
        newColors[index] = "#FFF";
        return newColors;
      });
    }, 5000);
  };


  return (
    <>
      <section className={heroStyles.heroBg}>

        {/* TODO: add blog title */}
        <div className={heroStyles.title}>
        </div>

        <div className={heroStyles.sparkleBg}>
          {Array.from({ length: sparkleCount }).map((_, index) => {
            const position = positions[index];

            return (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 512.000000 512.000000"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  fill: activeColors[index],
                  position: "absolute",
                  left: position?.left,
                  top: position?.top,
                  transition: "fill 0.2s ease-in-out, filter 0.3s ease-in-out",
                  filter: `drop-shadow(0px 0px 18px ${activeColors[index]})`,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <g
                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                  stroke="none">
                  <path d="M2513 4565 c-17 -7 -38 -26 -46 -42 -8 -15 -56 -174 -107 -353 -51
                -179 -110 -368 -132 -420 -154 -379 -479 -704 -859 -859 -52 -21 -248 -82
                -437 -136 -364 -104 -383 -113 -397 -175 -9 -41 19 -95 58 -113 18 -8 178 -56
                357 -107 179 -51 367 -110 419 -131 381 -156 704 -479 859 -859 22 -52 81
                -241 132 -420 51 -179 99 -339 107 -357 18 -39 72 -67 113 -58 62 14 71 33
                175 397 104 365 146 482 222 615 159 278 421 520 703 651 106 49 194 78 543
                177 326 93 348 103 362 165 7 34 -15 89 -44 107 -11 7 -163 53 -338 103 -429
                123 -511 154 -663 247 -296 183 -524 448 -649 754 -21 52 -80 240 -131 419
                -51 179 -99 338 -107 353 -13 27 -66 58 -95 57 -7 -1 -27 -7 -45 -15z"
                  />
                </g>
              </svg>
            )
          }
          )}
        </div>
      </section>
    </>
  )
}

export default Hero;
