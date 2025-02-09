import { ArrowLeft, Star } from "lucide-react"
import { Header } from "../../components/header"
import { Review } from "../../components/review"
import { NoReview } from "../../components/no-review"
import { useState } from "react"
import { Dialog } from "../../components/dialig/dialog"

interface MovieDetailsSectionProps {
    title: string
    category: string
    year: string
    rating: number
    reviewCount: number
    description: string
    imageUrl?: string
}

export default function MovieDetails() {
    const [isReviewDialog, setReviewDialog] = useState(false);

    function openReviewDialog() {
        setReviewDialog(true)
    }

    function closeReviewDialog() {
        setReviewDialog(false)
    }

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
        <div className="mb-40">
            <Header />
            <div className="flex flex-col w-full space-y-20">
                <div className="relative min-h-[600px] w-full overflow-hidden bg-[#191320]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img src={movie.imageUrl || "/placeholder.svg"} alt="" className="object-cover" />
                        {/* Multiple overlays for Netflix-like effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#191320] via-[#191320]/90 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative mx-auto  px-36 py-8">
                        {/* Back Button */}

                        {/* Main Content Grid */}
                        <div className="flex flex-col gap-8 md:flex-row">
                            {/* Movie Poster */}
                            <div className="relative h-[400px] w-[280px] flex-shrink-0 overflow-hidden rounded-lg shadow-2xl">
                                <img src={movie.imageUrl || "/placeholder.svg"} alt={movie.title} className="object-cover" />
                            </div>

                            {/* Movie Details */}
                            <div className="flex flex-col gap-4 py-4">
                                <button className="mb-8 flex items-center text-gray-400 hover:text-white">
                                    <ArrowLeft className="mr-2 h-5 w-5" />
                                    <span>Voltar</span>
                                </button>
                                <h1 className="text-3xl font-bold text-white md:text-4xl">{movie.title}</h1>

                                <div className="flex items-center gap-4 text-sm text-gray-300">
                                    <span>Categoria: {movie.category}</span>
                                    <span>Ano: {movie.year}</span>
                                </div>

                                {/* Rating Stars */}
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-5 w-5 ${i < movie.rating ? "fill-purple-500 text-purple-500" : "fill-gray-700 text-gray-700"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-400">
                                        ({movie.reviewCount} {movie.reviewCount === 1 ? "avaliação" : "avaliações"})
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="max-w-3xl text-base leading-relaxed text-gray-300">{movie.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-36 space-y-10">
                    <div className="w-full h-1 bg-[#131320]" />
                    <header className="flex items-center justify-between">
                        <h3 className="text-2xl rajdhani-bold text-white">Avaliações</h3>

                        <button
                            type="button"
                            onClick={openReviewDialog}
                            className="flex items-center bg-[#7435DB] py-3 px-5 rounded-lg gap-2 text-white">
                            <Star />
                            Avaliar filme
                        </button>
                    </header>
                    <div className="flex flex-col gap-3">
                        <Review />
                    </div>
                </div>
            </div>
            {
                isReviewDialog && <Dialog />
            }
        </div>
    )
}

