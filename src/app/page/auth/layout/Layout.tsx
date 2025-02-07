import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="h-full min-h-full h-screen w-full flex items-center justify-center">
            <div className="grid md:grid-cols-2 items-center justify-center w-full h-full p-4">
                <div className="h-full w-full">
                    <div className="hidden relative h-full w-full md:flex flex-col justify-between roundend-lg overflow-hidden">
                        {/* Top logo */}
                        <div className="absolute top-0 left-0 h-10 z-10 m-7">
                            <img
                                src="/Logo.svg"
                                alt="logo"
                                className="object-cover w-full "
                            />
                        </div>

                        {/* Background image */}
                        <img src="/Login.png" alt="background" className="absolute inset-0 w-full h-full object-cover rounded-xl" />

                        {/* Bottom text - colocado acima do logo com z-20 */}
                        <div className="absolute bottom-0 left-0 flex flex-col text-white z-20 p-4 m-7">
                            <span className="text-lg font-bold text-[#B5B6C9] rammetto-one-regular">ab filmes</span>
                            <h5 className="text-lg font-semibold rammetto-one-regular">
                                O guia definitivo para os<br /> amantes do cinema
                            </h5>
                        </div>
                    </div>
                </div>

                <Outlet />
            </div>
        </div>
    )
}
