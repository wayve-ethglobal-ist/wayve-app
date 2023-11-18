import ApplicationLogo from "../components/ApplicationLogo"
import MainTitle from "../components/MainTitle"
import Desc from "../components/Desc"
import Card from "../components/Card"

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
        </div>
      </div>
    </div>
  )
}