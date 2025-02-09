import { Star } from 'lucide-react'
import Cover from '../../assets/Cover.png'
import { useNavigate } from 'react-router'

export default function Card() {

  const router = useNavigate()
  function goTo(id: number){
      router(`/details/${id}`)
  }
  return (
    <button type='button' onClick={() => goTo(1)} className="relative w-[280px] overflow-hidden rounded-lg bg-black">
      {/* Image Container */}
      <div className="relative h-[400px] w-full">
        <img src={Cover || "/placeholder.svg"} alt="" className="object-cover bg-cover" />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* Rating Badge */}
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 backdrop-blur-sm">
        <span className="text-sm font-medium text-white">4,5</span>
        <span className="text-xs text-white/70">/5</span>
        <Star className="ml-0.5 h-4 w-4 fill-white text-white" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4">
        <h2 className="mb-2 text-xl font-bold text-white">Pobres Criaturas</h2>

        <div className="flex items-center gap-2">
          <span className="rounded-md bg-[#2b2b2b]/80 px-2 py-0.5 text-sm text-white/90">Drama</span>
          <span className="text-sm text-white/70">2024</span>
        </div>

        {/* Hugs/Metrics */}
        <div className="mt-2 text-sm text-white/60">
          44 Hug • 22 Hug
        </div>
      </div>
    </button>
  )
}
