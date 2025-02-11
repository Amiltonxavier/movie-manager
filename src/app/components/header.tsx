import { Clapperboard, LogOut, Popcorn } from "lucide-react";
import { useTabs } from "../context/tabs-context";
import ProfileImg from "../../assets/Image.png"
import { Link } from "react-router";
import { CONSTANT } from "../../CONSTANTS/constants";

export function Header() {
    const { activeTabs, handleTabs, tabsValue } = useTabs();

    return (
        <nav className="flex justify-between max-h-[80px] h-full items-center border-b border-[#131320] py-5 px-6">
            <Link to={`/${CONSTANT.ROUTES.BASE}`}>
                <img src="/Logo.svg" alt="logo" className="object-cover h-12 w-12" />
            </Link>

            <div className="flex items-center gap-6">

                {
                    tabsValue.map((item) => (
                        <button type="button" key={item.id}
                            className={`flex items-center gap-2 cursor-pointer py-2 px-3 rounded-lg ${activeTabs === item.id ? 'text-[#892CCD] bg-[#1A1B2D]' : 'text-[#7A7B9F]'} `}
                            onClick={() => handleTabs(item.id)}
                        >
                            {
                                item.id === 'explore' ? <Popcorn /> : <Clapperboard />
                            }
                            {item.name}
                        </button>
                    ))
                }

            </div>

            <div className="flex h-full items-center gap-2">
                <span className="text-[#B5B6C9] text-sm nunito-sans">Olá, Jordan</span>
                <div className="h-8 w-8 shrink-0">
                    <img
                        src={ProfileImg}
                        alt="profile picture"
                        className="object-cover rounded-sm border-2 border-[#892CCD]"
                    />
                </div>
                <div className="h-full w-px bg-[#1A1B2D] mx-3" />

                <button type="button" className="bg-[#1A1B2D] p-1.5 rounded-lg ">
                    <LogOut className="size-5" />
                </button>
            </div>
        </nav>
    )
}
