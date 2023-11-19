'use client'
import React from 'react';
import { useState, useEffect } from 'react'
import '../globals.css';
import { ThemeProvider } from 'styled-components';
import { ThorinGlobalStyles, lightTheme, Profile } from '@ensdomains/thorin';
import ApplicationLogo from '../components/ApplicationLogo'
import { ethers } from 'ethers'
import { TokenboundClient } from "@tokenbound/sdk";

export default function RootLayout({ children }) {
  const [account, setAccount] = useState("0x24991159E98C9F1808871F303C151e126eF02880")
  const [name, setName] = useState("unicef.wayve.eth")
  const [isDisplayProfile, setIsDisplayProfile] = useState(false)

  const wallet = new ethers.Wallet("0cd14d6fe492bb127068b07a599fac4aee83d023049a76b597ef80d6d8074cb9")
  const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/bacf8ec5ca9e45a48cd54424d47e2811")

  // read corresponding tokenbound wallet

  const getTokenboundAccount = async () => {
    const tokenboundClient = new TokenboundClient({ wallet, chainId: 5 })

    const tokenboundAccount = tokenboundClient.getAccount({
      tokenContract: "0x57a5de06a609bde8abe538ca87903f692b8ee14c",
      tokenId: "0",
    })

    setAccount(tokenboundAccount)
    setIsDisplayProfile(true)
  }

  // resolve ENS name if applicable

  const resolveAddress = async () => {
    const ens = await provider.lookupAddress(account)
    setName(ens)
  }

  useEffect(() => {
    resolveAddress()

    const element = document.querySelector('[data-testid]');
    if (element) {
      element.style.width = 'auto';
      element.style.maxWidth = '15rem';

      element.firstElementChild.classList.add('flex', 'justify-end')

      element.firstElementChild.firstElementChild.style.width = '70%';
      element.firstElementChild.firstElementChild.style.paddingBottom = '70%';
    }
    getTokenboundAccount()
  }, [account])

  return (
    <html lang="en">
      <ThemeProvider theme={lightTheme}>
        <ThorinGlobalStyles />
        <body className={`max-w-xl mx-auto px-4 bg-white`}>
          <div className="flex items-center justify-between">
            <ApplicationLogo />
            <div className={`${isDisplayProfile ? 'block' : 'hidden'}`}>
              <Profile
                address={account}
                ensName="unicef.wayve.eth"
                avatar="https://noun.pics/911.svg"
              />
            </div>
          </div>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}

