'use client'
import ApplicationLogo from "../components/ApplicationLogo"
import MainTitle from "../components/MainTitle"
import Desc from "../components/Desc"
import Card from "../components/Card"
import { FieldSet, RadioButton } from '@ensdomains/thorin'

export default function Voting() {
  return (
    <div>
      <ApplicationLogo />
      <div className="mb-12 space-y-4">
        <div className="max-w-xl">
          <MainTitle text="Voting Page" />
          <Desc text="Vote for your ESG option." />
        </div>
        
        <Card name="SpaceX" points="1250" img="pexels-1.jpg" />

        <div>
          <h3 className="font-medium">Voting Options:</h3>
          <Desc text="Vote for your ESG option. Once you've confirmed your vote, it is final and irreversible." />

          <FieldSet>
            <RadioButton label="For" name="RadioButtonGroup" value="for" />
            <RadioButton label="Against" name="RadioButtonGroup" value="against" />
          </FieldSet>
        </div>
      </div>

      <button
        className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-primary hover:opacity-80 px-4 py-2 text-base font-medium text-white focus:outline-none md:w-auto mt-8"
      >
        Vote
      </button>
    </div>
  )
}