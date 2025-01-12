"use client"

import React, { useState } from 'react';
import Link from 'next/link';



const Header = () => {
  const linkStyle = "text-[#264414] hover:underline decoration-white decoration-4";

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }


  return (
    <div className='mx-auto top-0 sticky bg-[#DDE255]'>
      <div className='flex mx-auto items-center justify-between px-4 h-16 md:justify-center lg:justify-center lg:px-0'>
        <header className='flex items-center gap-6'>
          <Link href="/" className="font-bold text-lg text-[#264414] hover:text-white mr-8">Francie&apos;s Dev Chronicles</Link>

          <nav className='hidden lg:block md:block'>
            <ul className='flex justify-center gap-6'>
              <li><Link href="/about" className={linkStyle}>About</Link></li>
              <li><Link href="/projects" className={linkStyle}>Projects</Link></li>
              <li><Link href="/blog" className={linkStyle}>Blog</Link></li>
            </ul>
          </nav>

          <div className='lg:hidden md:hidden'>
            <button
              className='text-[#264414] hover:text-white'
              onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="22" height="22">
                 <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
            </button>
          </div>
        </header>
      </div>

      <div className={`lg:hidden ${menuOpen ? "block" : "hidden"} bg-[#DDE255]`}>
        <ul className='flex flex-col items-center gap-4 py-4'>
          <li><Link href="/about" className={linkStyle}>About</Link></li>
          <li><Link href="/projects" className={linkStyle}>Projects</Link></li>
          <li><Link href="/blog" className={linkStyle}>Blog</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
