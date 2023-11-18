'use client'

import { useState } from 'react'
import ApplicationLogo from "../components/ApplicationLogo"
import Card from "../components/Card"
import MainTitle from "../components/MainTitle"
import Desc from "../components/Desc"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

export default function CardList() {
  const [isCardSelected, setIsCardSelected] = useState(true);
  const [selectedCard, setSelectedCard] = useState('SpaceX');

  const handleCardClick = (cardName) => {
    if(selectedCard){
      setSelectedCard(null);
      return;
    }

    setSelectedCard(cardName);
  };

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

      <div 
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out" 
        onClick={() => handleCardClick('SpaceX')}
        style={{
          bottom: isCardSelected && selectedCard === null ? (selectedCard === 'SpaceX' ? 'auto' : '4rem' ) : '-30rem',
          top: isCardSelected && selectedCard === 'SpaceX' ? '4.25rem' : 'auto',
        }}
      >
        <div className="w-full">
          <Card name="SpaceX" points="1250" img="pexels-1.jpg" />
        </div>
      </div>
      <div 
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out" 
        onClick={() => handleCardClick('Tesla')} 
        style={{
          bottom: isCardSelected && selectedCard === null ? (selectedCard === 'Tesla' ? 'auto' : '0rem') : '-30rem',
          top: isCardSelected && selectedCard === 'Tesla' ? '4.25rem' : 'auto',
        }}
      >
        <div className="w-full">
          <Card name="Tesla" points="1050" img="pexels-2.jpg" />
        </div>
      </div>
      <div 
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out" 
        onClick={() => handleCardClick('Go Green')} 
        style={{
          bottom: isCardSelected && selectedCard === null ? (selectedCard === 'Go Green' ? 'auto' : '-4rem') : '-30rem',
          top: isCardSelected && selectedCard === 'Go Green' ? '4.25rem' : 'auto',
        }}
      >
        <div className="w-full">
          <Card name="Go Green" points="450" img="pexels-3.jpg" />
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 transition-opacity duration-500 ease-in-out ${selectedCard === null ? 'opacity-0' : 'opacity-100'}`}
        style={{
          top: '18rem',
        }}
      >
        <MainTitle text="Loyalty Points" />
        <Desc text="View your loyalty points" />

        <div className="my-2">
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Discounts:</dt>
            <dd className="text-gray-700">10%</dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Voting</dt>
            <dd className="text-gray-700">1 ESG Initiative</dd>
          </div>
        </div>

        <Disclosure as="div" className="bg-gray-100 rounded-lg mt-6">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-t-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>ESGs AVAILABLE</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="bg-gray-100 rounded-b-lg text-sm pb-2 pt-4">
                <div className="px-4 flex justify-between">
                  <dt className="font-medium text-gray-900">ESG 1</dt>
                  <dd className="text-gray-700">View</dd>
                </div>
                <div className="px-4 flex justify-between">
                  <dt className="font-medium text-gray-900">ESG 2</dt>
                  <dd className="text-gray-700">View</dd>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="bg-gray-100 rounded-lg mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-t-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-gray-500/75">
                <span>DETAILS</span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="bg-gray-100 rounded-b-lg text-sm pb-2 pt-4">
                {/* <div className="px-4 flex justify-between">
                  <dt className="font-medium text-gray-900">ESG 1</dt>
                  <dd className="text-gray-700">View</dd>
                </div>
                <div className="px-4 flex justify-between">
                  <dt className="font-medium text-gray-900">ESG 2</dt>
                  <dd className="text-gray-700">View</dd>
                </div> */}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}