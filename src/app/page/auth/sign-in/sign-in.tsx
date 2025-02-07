import { MailIcon, User2 } from "lucide-react";
import { useState } from "react";

const tabsAuth = [
    {
        name: 'Login',
        id: 'login'
    },
    {
        name: 'Cadastro',
        id: 'register'
    }
]

export default function SignIn() {
    const [tab, setTab] = useState(tabsAuth[0].id);

    function handleActiveTab(id: string) {
        setTab(id)
    }

    return (
        <div className="h-full flex flex-col gap-13 items-center justify-center w-full mx-auto max-w-[408px]">
            <div className="flex items-center justify-center rounded-lg gap-4 bg-[#1A1B2D] p-1 w-full">
                {
                    tabsAuth.map((item) => (
                        <button type="button" key={item.id}
                            className={`w-1/2 py-3 rounded-lg text-center cursor-pointer ${tab === item.id ? 'bg-[#892CCD]' : 'bg-[#1A1B2D]'} ${tab === item.id ? 'text-white' : 'text-[#7A7B9F]'} `}
                            onClick={() => handleActiveTab(item.id)}
                        >
                            {item.name}
                        </button>
                    ))
                }
            </div>

            <div className="flex flex-col items-center gap-5 w-full ">
                {
                    tab === tabsAuth[0].id && (
                        <>
                            <h2 className="text-white text-xl rammetto-one-regular text-left mr-auto">Acesse sua conta</h2>
                            <form action="" className="flex flex-col gap-4 w-full">
                                <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#7A7B9F]">
                                    <MailIcon className="size-4" />
                                    <input type="email" name="email" placeholder="E-mail" id="email" className="w-full outline-none pl-2 bg-transparent" />
                                </div>
                                <div className="border py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#7A7B9F]">
                                    <img src="/Password.svg" alt="logo" className="size-4" />
                                    <input type="password" name="password" id="password" placeholder="Senha" className="w-full outline-none pl-2 bg-transparent " />
                                </div>
                                <button type="submit" className="mt-4 w-full bg-[#892CCD] py-3 text-white rounded-lg">Entrar</button>
                            </form>
                        </>
                    )
                }

                {
                    tab === tabsAuth[1].id && (
                        <>
                            <h2 className="text-white text-xl rammetto-one-regular text-left mr-auto">Crie sua conta</h2>
                            <form action="" className="flex flex-col gap-4 w-full">
                                <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#7A7B9F]">
                                    <User2 className="size-4" />
                                    <input type="text" name="name" placeholder="Nome" id="name" className="w-full outline-none pl-2 bg-transparent" />
                                </div>
                                <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#7A7B9F]">
                                    <MailIcon className="size-4" />
                                    <input type="email" name="email" placeholder="E-mail" id="email" className="w-full outline-none pl-2 bg-transparent" />
                                </div>
                                <div className="border py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#7A7B9F]">
                                    <img src="/Password.svg" alt="logo" className="size-4" />
                                    <input type="password" name="password" id="password" placeholder="Senha" className="w-full outline-none pl-2 bg-transparent " />
                                </div>
                                <button type="submit" className="mt-4 w-full bg-[#892CCD] py-3 text-white rounded-lg">Entrar</button>
                            </form>
                        </>
                    )
                }

            </div>
        </div>
    )
}
