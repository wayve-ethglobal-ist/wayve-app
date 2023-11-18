'use client'

import { useState } from 'react'
import ApplicationLogo from "../components/ApplicationLogo"
import Card from "../components/Card"

export default function CardList() {
  const [isCardSelected, setIsCardSelected] = useState(true);

  return (
    <div className="h-screen overflow-hidden relative">
      <ApplicationLogo />
      <div className={`absolute left-0 right-0 transition-all duration-500 ease-in-out ${isCardSelected ? 'top-6' : 'top-1/2 -translate-y-1/2 grid place-items-center'}`}>
        <div className="w-full">
          <div className={`mb-4 text-center text-xl transition-opacity duration-500 ${isCardSelected ? 'opacity-0' : 'opacity-100'}`}>Select card</div>
          <button onClick={() => setIsCardSelected(!isCardSelected)} className="w-full">
            <Card name="SpaceX" points="1250" img="pexels-1.jpg" />
          </button>
        </div>
      </div>

      <div className={`absolute left-0 right-0 transition-all duration-500 ease-in-out`} 
        style={{
          bottom: isCardSelected ? '-4rem' : '-30rem',
        }}
      >
        <div className="w-full">
          <Card name="SpaceX" points="1250" img="pexels-1.jpg" />
        </div>
        <div className="-mt-32 w-full">
          <Card name="Tesla" points="1050" img="pexels-2.jpg" />
        </div>
        <div className="-mt-32 w-full">
          <Card name="Go Green" points="450" img="pexels-3.jpg" />
        </div>
      </div>
    </div>
  )
}