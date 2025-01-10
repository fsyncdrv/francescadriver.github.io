"use client"

import React from 'react'

const header = () => {
  return (
    <div className='max-w-5xl mx-auto top-0 sticky'>
      <div className='flex items-center justify-center h-16'>
        <header className='flex items-center gap-6'>
          <a href="#" className="font-bold text-lg hover:text-sky-500">Frankie Dev</a>
          <nav>
            <ul className='flex justify-center gap-6'>
              <li><a href="#" className='hover:underline decoration-sky-500 decoration-4'>About</a></li>
              <li><a href="#" className='hover:underline decoration-sky-500 decoration-4'>Projects</a></li>
              <li><a href="#" className='hover:underline decoration-sky-500 decoration-4'>Blog</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default header;
