import MainTitle from '../components/MainTitle'
import Desc from '../components/Desc'

export default function Pay() {

  return (
    <div className="animate-pulse relative h-screen bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-[url('/pattern-image.png')] before:opacity-30">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent flex items-center justify-center">
        <div className="text-[6rem] tracking-widest font-mono text-gray-700">
          DEVICE
        </div>
      </div>
    </div>
  )
}