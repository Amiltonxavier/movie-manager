import { Clapperboard, LogOut, Popcorn } from "lucide-react";

export function Header() {
    return (
        <div>
            <button>
                <img src="/Logo.svg" alt="logo" className="object-cover w-full " />
            </button>

            <div>
                <button type="button">
                    <Popcorn />
                    Explorar
                </button>
                <button type="button">
                    <Clapperboard />
                    Meus filmes
                </button>
            </div>

            <div>
                <span>Olá, Jordan</span>
                <div />

                <button type="button">
                    <LogOut />
                </button>
            </div>
        </div>
    )
}
