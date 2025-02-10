import { Clapperboard, Plus, Search, Star } from 'lucide-react';
import { Link } from 'react-router';
import { CONSTANT } from '../../../CONSTANTS/constants';
import { NoResult } from '../no-review';

export function MyMovie() {

    function ReviewButton() {
        return (
          <button className='flex items-center gap-2 hover:underline underline-offset-4 cursor-pointer'>
            <Star className='size-5' />Avaliar filme
          </button>
        )
      }

    return (
        <div className='flex flex-col space-y-8'>
            <header className="flex items-center justify-between">
                <h3 className="text-2xl rammetto-one-regular text-white">Meus filmes</h3>
                <div className='flex gap-2 items-center ml-auto'>
                    <div className="px-4 py-3.5 border border-[#131320] focus-within:border-blue-500  bg-transparent flex gap-2 items-center rounded-lg">
                        <Search className="szie-5 text-[#7A7B9F]" />
                        <input type="search" placeholder="Pesquisar filme" className="bg-transparent outline-none" />
                    </div>
                    <div className='h-full w-1 bg-[#1A1B2D]' />
                    <Link to={CONSTANT.ROUTES.PRIVATE.NEW_MOVIE} className='flex items-center gap-2 bg-[#892CCD] text-white w-full py-3 px-5 rounded-lg'>
                        <Plus />
                        Novo
                    </Link>
                </div>
            </header>
            <NoResult 
            icon={Clapperboard} 
            content={{title: "Nenhum filme registrado", question: "Que tal começar cadastrando seu primeiro filme?"}} 
            component={ReviewButton} />
        </div>
    )
}
