import { Star } from 'lucide-react'
import Profile from '../../assets/Image.png'

export function Review() {
    return (
        <article className="p-8 bg-[#131320] rounded-lg flex gap-12 items-start">
            <div className="flex gap-4">
                <div className="size-12 relative shrink-0">
                    <img
                        src={Profile || "/placeholder.svg"}
                        alt={'profile picture'}

                        className="object-cover rounded-sm"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <h5 className={`font-rajdhani font-bold text-white`}>Floyd Miles</h5>
                    <span className="text-sm text-gray-400">{123} filmes avaliados</span>
                </div>
            </div>
            <div className="h-full w-1 bg-[#1A1B2D] " />
            <div className='flex-1'>
                <p className="nunito-sans leading-[25.6px]">Este filme é uma jornada emocional que combina elementos de drama e fantasia com maestria. A trama explora temas universais como amor, perda e redenção, tudo isso em um cenário mágico que prende a atenção do início ao fim.</p>
            </div>
            <div className=" flex items-center gap-1 rounded-lg bg-[#1A1B2D] px-3 py-1 backdrop-blur-sm">
                <span className="rajdhani-bold text-xl text-white">4,5</span>
                <span className="text-xs text-white/70">/5</span>
                <Star className="ml-0.5 h-4 w-4 fill-[#A85FDD] text-[#A85FDD]" />
            </div>
        </article>
    )
}
