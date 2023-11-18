'use client'
import { Input, Button } from '@ensdomains/thorin'
import ApplicationLogo from '../components/ApplicationLogo'

export default function Customer() {
  return (
    <div className="h-screen">
      <div className="flex justify-center">
        <ApplicationLogo />
      </div>

      <div className="grid place-items-center h-full -mt-20">
        <div className="w-full space-y-2">
          <Input
            label="Choose a nickname"
            placeholder="Name"
          />
          <Button>Submit</Button>
        </div>
      </div>
    </div>
  )
}
