'use client'

import { useState, useEffect } from 'react'
import Card from "../../components/Card"
import MainTitle from "../../components/MainTitle"
import Desc from "../../components/Desc"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { ethers } from 'ethers'
import Link from "next/link"

export default function CardList() {
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [points, setPoints] = useState(0)

  const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/bacf8ec5ca9e45a48cd54424d47e2811")
  const wallet = new ethers.Wallet("0cd14d6fe492bb127068b07a599fac4aee83d023049a76b597ef80d6d8074cb9")

  // retrieve points held by user

  const getPoints = async () => {
    const abi = [
      "function balanceOf(address addr) view returns (uint)"
    ]

    const contract = new ethers.Contract("0x8fbbd991e9c50bab1bf0270d981d1028a2036c91", abi, provider)

    const points = await contract.balanceOf(wallet.address)

    setPoints(ethers.formatEther(points))
  }

  const handleCardClick = (cardName) => {
    if (selectedCard) {
      setSelectedCard(null);
      return;
    }

    setSelectedCard(cardName);
  };

  useEffect(() => {
    getPoints()
  }, [])

  return (
    <div className="h-screen overflow-hidden relative -mt-12">
      <div className={`absolute left-0 right-0 transition-all duration-500 ease-in-out ${isCardSelected ? 'top-6' : 'top-1/2 -translate-y-1/2 grid place-items-center'}`}>
        <div className="w-full">
          <div className={`mb-4 text-center text-xl transition-opacity duration-500 ${isCardSelected ? 'opacity-0' : 'opacity-100'}`}>Select card</div>
          <button onClick={() => setIsCardSelected(!isCardSelected)} className="w-full">
            <Card name="Wayve Points" points={points} img="pexels-1.jpg" />
          </button>
        </div>
      </div>

      <div
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out"
        onClick={() => handleCardClick('Switch')}
        style={{
          bottom: isCardSelected && selectedCard === null ? (selectedCard === 'Switch' ? 'auto' : '4rem') : '-30rem',
          top: isCardSelected && selectedCard === 'Switch' ? '4.25rem' : 'auto',
        }}
      >
        <div className="w-full">
          <Card name="Switch" points="500" img="pexels-4.jpg" />
        </div>
      </div>
      <div
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out"
        onClick={() => handleCardClick('Topman')}
        style={{
          bottom: isCardSelected && selectedCard === null ? (selectedCard === 'Topman' ? 'auto' : '0rem') : '-30rem',
          top: isCardSelected && selectedCard === 'Topman' ? '4.25rem' : 'auto',
        }}
      >
        <div className="w-full">
          <Card name="Topman" points="250" img="pexels-2.jpg" />
        </div>
      </div>
      <div
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out"
        onClick={() => handleCardClick('Starbucks')}
        style={{
          bottom: isCardSelected && selectedCard === null ? (selectedCard === 'Starbucks' ? 'auto' : '-4rem') : '-30rem',
          top: isCardSelected && selectedCard === 'Starbucks' ? '4.25rem' : 'auto',
        }}
      >
        <div className="w-full">
          <Card name="Starbucks" points="250" img="pexels-3.jpg" />
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 transition-opacity duration-500 ease-in-out ${selectedCard === null ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{
          top: '18rem',
        }}
      >
        <div onClick={() => setSelectedCard(null)} className="flex items-center gap-1 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <div className="mb-0.5">Back</div>
        </div>

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
                  <Link href={`/voting`} className="text-gray-700">View</Link>
                </div>
                <div className="px-4 flex justify-between">
                  <dt className="font-medium text-gray-900">ESG 2</dt>
                  <Link href={`/voting`} className="text-gray-700">View</Link>
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