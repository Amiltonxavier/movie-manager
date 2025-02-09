import { Star } from "lucide-react";
import Cover from '../../../assets/Cover.png'

export function Dialog() {

    const movie = {
        title: "Pobres criaturas",
        category: "Drama",
        year: "2023",
        rating: 4,
        reviewCount: 5,
        description: "Do cineasta Yorgos Lanthimos e da produtora Emma Stone, vem o conto incrível e a evolução fantástica de Bella Baxter (Stone), uma jovem mulher trazida de volta à vida pelo brilhante e pouco ortodoxo cientista Dr. Godwin Baxter (Willem Dafoe). Sob a proteção de Baxter, Bella está ansiosa para aprender. Faminta pela mundanidade que lhe falta, Bella foge com Duncan Wedderburn (Mark Ruffalo), um advogado astuto e depravado, em uma aventura relâmpago pelos continentes. Livre dos preconceitos de sua época, Bella se torna firme em seu propósito de defender a igualdade e a libertação.",
        imageUrl: "/placeholder.svg",
    }

    return (
        <div className='fixed bg-black/70 inset-0 h-screen backdrop-blur-md z-[1000px] flex items-center justify-center'>
            <div className='bg-[#0F0F1A] flex flex-col  max-w-[600px] w-full rounded-lg space-y-8 p-10'>
                <header >
                    <h3 className="text-2xl rajdhani-bold text-white text-left">Avaliar filme</h3>
                </header>
                <div className="space-y-6">
                    <div className="flex flex-col gap-8 md:flex-row">
                        {/* Movie Poster */}
                        <div className="relative h-[176px] w-[137px] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl">
                            <img src={Cover} alt={movie.title} className="object-cover" />
                        </div>

                        {/* Movie Details */}
                        <div className="flex flex-col gap-4 ">
                            <h1 className="text-3xl font-bold text-white md:text-2xl">{movie.title}</h1>

                            <div className="flex flex-col  gap-4 text-sm text-gray-300">
                                <span>Categoria: {movie.category}</span>
                                <span>Ano: {movie.year}</span>
                            </div>

                            {/* Rating Stars */}
                            <div className="flex flex-col gap-2">
                                <span className="text-sm text-gray-400">
                                Sua avaliação:
                                </span>
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-9 w-9 ${i < movie.rating ? "fill-purple-500 text-purple-500" : "fill-gray-700 text-gray-700"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <form action="" className="space-y-6">
                        <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500 border-[#131320]">
                            <textarea name="" id="" className="w-full min-h-[200px] h-full outline-none pl-2 bg-transparent resize-y" placeholder="Comentário" />
                        </div>
                        <button className="flex ml-auto items-center gap-2 bg-[#892CCD] text-white  py-3 px-5 rounded-lg">
                            Publicar
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}
