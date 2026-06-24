import React from 'react';
import Image from 'next/image'
import heroStyles from "@/app/styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={heroStyles.heroBg}>
        <div className={heroStyles.heroBgLayer} />
        <div className={heroStyles.title}>
          <Image src="/images/me.png" width={650} height={500} alt="" />
          <p>
            I&apos;m Fran.<br />
            I build stuff on the<br />
            <a href='#'>
              web.
              <svg viewBox="0 0 70 36">
                <path d="M 34 1 C -12 11 1 35 28 35 C 91 34 53 -7 25 9"/>
              </svg>
            </a>
          </p>
        </div>
      </section>
      <div className={heroStyles.gifStrip} />
    </>
  )
}

export default Hero;
