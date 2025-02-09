import { Plus, Search, Star } from 'lucide-react';
import Cover from '../../../assets/Cover.png'
import React from 'react'
import Card from '../../components/card';

export default function MyMovie() {
    return (
        <div className='flex flex-col space-y-8'>
            <header className="flex items-center justify-between">
                <h3 className="text-2xl rammetto-one-regular text-white">Meus filmes</h3>
                <div className='flex gap-2 items-center ml-auto'>
                    <div className="px-4 py-3.5 border bg-transparent flex gap-2 items-center rounded-lg">
                        <Search className="szie-5 text-[#7A7B9F]" />
                        <input type="search" placeholder="Pesquisar filme" className="bg-transparent outline-none" />
                    </div>
                    <div className='h-full w-1 bg-[#1A1B2D]' />
                    <button type='button' className='flex items-center gap-2 bg-[#892CCD] text-white w-full py-3 px-5 rounded-lg'>
                        <Plus />
                        Novo
                    </button>
                </div>
            </header>
        </div>
    )
}
