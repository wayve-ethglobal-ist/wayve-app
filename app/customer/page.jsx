'use client'

import { useState, useEffect } from 'react'
import { Input, Button } from '@ensdomains/thorin'
import ApplicationLogo from '../components/ApplicationLogo'
import { ENS } from '@ensdomains/ensjs'
import { ethers } from 'ethers'

export default function Customer() {

  const [typing, setTyping] = useState()

  const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/bacf8ec5ca9e45a48cd54424d47e2811")
  const wallet = new ethers.Wallet("0cd14d6fe492bb127068b07a599fac4aee83d023049a76b597ef80d6d8074cb9", provider)

  // create ENS subdomain based on chosen nickname

  const createSubdomain = async (name) => {

    console.log(`creating subdomain for ${name}`)

    const abi = [
      " function setSubnodeRecord(bytes32 parentNode,string memory label,address owner,address resolver,uint64 ttl,uint32 fuses,uint64 expiry) external returns (bytes32 node)"
    ]

    const contract = new ethers.Contract("0x114D4603199df73e7D157787f8778E21fCd13066", abi, wallet)

    const subdomain = await contract.setSubnodeRecord("0x3aecd94a92d3e4931ec0972fe247db341f130aac89cc19f4d8ada251cb905936", name, "0x1cB56b7B8e92662e8123c0Ac7812FcC9db45e6Df", "0xd7a4F6473f32aC2Af804B3686AE8F1932bC35750", 0, 0, 0)

    console.log(subdomain)

    window.location.href = '/cart';

  }

  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <ApplicationLogo />
      </div>

      <div className="grid place-items-center h-full -mt-20">
        <div className="w-full space-y-2">
          <Input
            label="Let's get you a sub-zero cool name ❄️"
            placeholder="Name"
            onChange={(e) => setTyping(e.target.value)}
            value={typing}
          />
          <Button onClick={() => createSubdomain(typing)}>Next</Button>
        </div>
      </div>
    </div>
  )
}
