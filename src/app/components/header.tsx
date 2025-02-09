import { Clapperboard, LogOut, Popcorn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const tabsApp = [
    {
        name: 'Explorar',
        id: 'explore',
        url: ''
    },
    {
        name: 'Meus filmes',
        id: 'my-movies',
        url: '/my-movies'
    }
]

export function Header() {
    const [tab, setTab] = useState(tabsApp[0].id);
    function handleActiveTab(id: string, url: string) {
        setTab(id);
        goTo(url)
    }

    const router = useNavigate();

    function goTo (url: string){
        router(url)
    }
    return (
        <div className="flex justify-between items-center border-b border-[#131320] py-5 px-6">
            <button>
                <img src="/Logo.svg" alt="logo" className="object-cover h-12 w-12" />
            </button>

            <div className="flex items-center gap-6">

                {
                    tabsApp.map((item) => (
                        <button type="button" key={item.id}
                            className={`flex items-center gap-2 cursor-pointer py-2 px-3 rounded-lg ${tab === item.id ? 'text-[#892CCD] bg-[#1A1B2D]' : 'text-[#7A7B9F]'} `}
                            onClick={() => handleActiveTab(item.id, item.url)}
                        >
                            {
                                item.id === 'explore' ? <Popcorn /> : <Clapperboard />
                            }
                            {item.name}
                        </button>
                    ))
                }

            </div>

            <div className="flex items-center gap-2">
                <span>Olá, Jordan</span>
                <div className="h-full w-1 bg-gray-300" />

                <button type="button" className="bg-[#1A1B2D] p-1.5 rounded-lg ">
                    <LogOut className="size-5" />
                </button>
            </div>
        </div>
    )
}
