import { Popcorn, Star } from 'lucide-react'

export  function NoReview() {
  return (
    <div className='flex flex-col items-center justify-center space-y-5'>
        <Popcorn className='size-9 text-[#45455F]' />
        <div className='text-center text-[#B5B6C9]'>
            <p>Nenhuma avaliação registrada.</p>
            <p>Que tal enviar o primeiro comentário?</p>
        </div>
        <button className='flex items-center gap-2 hover:underline underline-offset-4 cursor-pointer'><Star className='size-5' />Avaliar filme</button>
    </div>
  )
}
