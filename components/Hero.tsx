// "use client";
import React from 'react';
import heroStyles from '@/app/styles/Hero.module.css'

const Hero = () => {
  // const appRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   const moveGradient = (event: MouseEvent) => {
  //     const winWidth = window.innerWidth;
  //     const winHeight = window.innerHeight;

  //     const mouseX = Math.round((event.pageX / winWidth) * 100);
  //     const mouseY = Math.round((event.pageY / winHeight) * 100);

  //     if (appRef.current) {
  //       appRef.current.style.setProperty('--mouse-x', `${mouseX}%`);
  //       appRef.current.style.setProperty('--mouse-y', `${mouseY}%`);
  //     }
  //   }
  //   document.addEventListener('mousemove', moveGradient);
  //   return () => {
  //     document.removeEventListener('mousemove', moveGradient);
  //   }
  // })

  return (
    <div
      className={heroStyles.heroBg}
      // ref={appRef}
    ></div>
  )
}

export default Hero;
