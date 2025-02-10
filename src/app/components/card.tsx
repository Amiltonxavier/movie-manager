import { Star } from 'lucide-react'
import Cover from '../../assets/Cover.png'
import { useNavigate } from 'react-router'

export default function Card() {

  const router = useNavigate()
  function goTo(id: number) {
    router(`/details/${id}`)
  }
  return (
    <button type='button' onClick={() => goTo(1)} className="hover:scale-110 ease-in-out transition-all duration-150 cursor-pointer relative w-full overflow-hidden rounded-lg ">
      {/* Image Container */}
      <div className="relative aspect-[9/14] w-full">
        <img src={Cover || "/placeholder.svg"} alt="" className="object-fill bg-cover w-full" />
        {/* Gradient Overlay */}
        <div className="absolute -top-14 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      {/* Rating Badge */}
      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 backdrop-blur-sm">
        <span className="text-sm font-medium text-white">4,5</span>
        <span className="text-xs text-white/70">/5</span>
        <Star className="ml-0.5 h-4 w-4 fill-white text-white" />
      </div>

      {/* Content */}
      <div className="absolute flex inset-0 bottom-[98px] w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
        <div className='mt-auto'>
          <h2 className=" text-xl font-bold text-white text-left">Pobres Criaturas</h2>

          <div className="flex items-center gap-2 text-[#B5B6C9] nunito-sans-bold text-sm">
            <span>Drama</span>
            <span>2024</span>
          </div>

          {/* Hugs/Metrics */}
          <div className="mt-2 text-sm text-white/60">
            44 Hug • 22 Hug
          </div>
        </div>

      </div>
    </button>
  )
}
