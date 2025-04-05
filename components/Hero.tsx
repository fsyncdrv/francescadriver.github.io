import React from 'react';
import heroStyles from "@/app/styles/Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={heroStyles.heroBg}>
        <div className={heroStyles.title}>
          <p>
            Hello. I&apos;m Francie.<br />
            I build stuff on the<br />
            <a href='#'>
              web.
              <svg viewBox="0 0 70 36">
                {/* <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" /> */}
              <path d="M 34 1 C -12 11 1 35 28 35 C 91 34 53 -7 25 9"/>
              </svg>
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero;
