import { Search } from "lucide-react";
import Card from "../../components/card";
import { useTabs } from "../../context/tabs-context";
import { MyMovie } from "../../components/home-content/my-movie";

export default function Dashboard() {
    const { activeTabs, tabsValue } = useTabs();
    return (
        <div className="w-full h-full">
            {
                activeTabs === tabsValue[0].id ? (
                    <div className="flex flex-col space-y-8">
                        <header className="flex items-center justify-between">
                            <h3 className="text-2xl rammetto-one-regular text-white">Explorar</h3>
                            <div className="px-4 py-3.5 border border-[#131320] focus-within:border-blue-500  bg-transparent flex gap-2 items-center ml-auto rounded-lg">
                                <Search className="size-5 text-[#7A7B9F]" />
                                <input type="search" placeholder="Pesquisar filme" className="bg-transparent outline-none" />
                            </div>
                        </header>


                        <div className='grid grid-cols-4 gap-6'>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                ) : <MyMovie />


            }
        </div>
    );
}