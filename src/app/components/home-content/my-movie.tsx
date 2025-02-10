import { Plus, Search } from 'lucide-react';
import { Link } from 'react-router';

export function MyMovie() {
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
                    <Link to="/new-movie" className='flex items-center gap-2 bg-[#892CCD] text-white w-full py-3 px-5 rounded-lg'>
                        <Plus />
                        Novo
                    </Link>
                </div>
            </header>
        </div>
    )
}
