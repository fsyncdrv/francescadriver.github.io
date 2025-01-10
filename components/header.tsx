"use client"

import React from 'react';
import Link from 'next/link';

const header = () => {
  return (
    <div className='max-w-5xl mx-auto top-0 sticky'>
      <div className='flex items-center justify-center h-16'>
        <header className='flex items-center gap-6'>
          <Link href="/" className="font-bold text-lg hover:text-sky-500">Frankie Dev</Link>
          <nav>
            <ul className='flex justify-center gap-6'>
              <li><Link href="/about" className='hover:underline decoration-sky-500 decoration-4'>About</Link></li>
              <li><Link href="/projects" className='hover:underline decoration-sky-500 decoration-4'>Projects</Link></li>
              <li><Link href="/blog" className='hover:underline decoration-sky-500 decoration-4'>Blog</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default header;
