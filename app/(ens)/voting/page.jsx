'use client'
import MainTitle from "../../components/MainTitle"
import Desc from "../../components/Desc"
import { FieldSet, RadioButton, Toast} from '@ensdomains/thorin'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import Breadcrumbs from '../../components/Breadcrumbs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Voting() {

  const [checked, setChecked] = useState()
  const [foor, setFoor] = useState(0)
  const [against, setAgainst] = useState(0)
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // contract and provider

  const provider = new ethers.JsonRpcProvider("https://goerli.infura.io/v3/bacf8ec5ca9e45a48cd54424d47e2811")
  const wallet = new ethers.Wallet("0cd14d6fe492bb127068b07a599fac4aee83d023049a76b597ef80d6d8074cb9", provider)

  const abi = [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "proposals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "forCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "againstCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [

      ],
      "name": "propose",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "proposalId",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "decision",
          "type": "bool"
        }
      ],
      "name": "vote",
      "outputs": [

      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const contract = new ethers.Contract("0x9c376ecff687e22adde574330278ef626181567a", abi, wallet)

  // get current votes

  const getVotes = async () => {

    const proposals = await contract.proposals(0)

    setFoor(proposals.forCount.toString())
    setAgainst(proposals.againstCount.toString())

  }

  // submit an on chain vote

  const submitVote = async (checked) => {

    console.log(`casting vote on chain`)
    setIsAuthenticated(false)

    // commented code below to simulate success banner
    // const vote = await contract.vote(0, checked)
    // console.log(vote)

  }

  const handleAuthenticate = () => {
    setIsAuthenticated(true)
    toast("✅ Vote casted successfully!");
  }

  useEffect(() => {
    getVotes()
  }, [checked])

  return (
    <div >
      <Breadcrumbs
        pages={[
          { name: 'Card', href: '/card-list' },
          { name: 'Voting', href: '#' },
        ]}
      />
      <div className="mb-12 space-y-4">
        <div className="max-w-xl">
          <MainTitle text="Vote" />
          <Desc text="Have a say for what's best for your community." />
        </div>

        <div className="p-4 w-full rounded-2xl bg-cover flex flex-col justify-between" style={{ backgroundImage: `url("pexels-5.jpg")`, aspectRatio: '16 / 9' }}>
          <div className="text-white font-medium text-xl">ESG #0</div>
          <div className="flex justify-between items-end">
            <div className="text-white">{`${foor} For | ${against} Against`}</div>
            <div className="text-white">01 days 11 hours</div>
          </div>
        </div>

        <div>
          <h3 className="font-medium">A Quick Note:</h3>
          <Desc text="Vote for your ESG option. Once you've confirmed your vote, it is final and irreversible." />

          <FieldSet>
            <RadioButton label="For" name="RadioButtonGroup" value="for" onChange={() => setChecked(true)} />
            <RadioButton label="Against" name="RadioButtonGroup" value="against" onChange={() => setChecked(false)} />
          </FieldSet>
        </div>
      </div>

      <button
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-primary hover:opacity-80 px-4 py-2 text-base font-medium text-white focus:outline-none md:w-auto mt-8"
        onClick={() => submitVote(checked)}
      >
        Vote
      </button>

      <div 
        className="absolute left-0 right-0 transition-all duration-500 ease-in-out bg-gray-100"
        style={{
          bottom: isAuthenticated ? '-30rem' : '0',
        }}
      >
        <div className="text-center pt-4 pb-12 font-medium text-lg">Please Authenticate</div>
        <div className="grid place-items-center p-10">
          <svg onClick={() => handleAuthenticate()}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 animate-pulse">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
          </svg>
        </div>
      </div>

      <ToastContainer progressClassName="bg-primary" />
    </div>
  )
}