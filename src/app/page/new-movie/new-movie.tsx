import { Calendar, Clapperboard, Tag, Upload } from "lucide-react";


export default function NewMovie() {
    return (
        <div className="grid grid-cols-5 items-start gap-12">
            <div className="col-span-2 bg-[#1A1B2D] w-full h-full rounded-lg cursor-pointer">

                <label htmlFor="upload" className="cursor-pointer w-full h-full flex flex-col gap-3 justify-center items-center">
                    <Upload className="text-[#892CCD] size-10" />
                    <span>Fazer upload</span>
                    <input type="file" className="sr-only" id="upload" />
                </label>
            </div>
            <div className="col-span-3">
                <h3 className="text-2xl rajdhani-bold text-white ">Novo filme</h3>
                <form action="" className="space-y-7 mt-6">
                    <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#131320]">
                        <Clapperboard className="size-4" />
                        <input type="text" name="title" placeholder="Título" id="title" className="w-full outline-none pl-2 bg-transparent" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#131320]">
                            <Calendar className="size-4" />
                            <input type="text" name="date" placeholder="Ano" id="date" className="w-full outline-none pl-2 bg-transparent" />
                        </div>
                        <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500  border-[#131320]">
                            <Tag className="size-4" />
                            <input type="text" name="category" placeholder="Categoria" id="category" className="w-full outline-none pl-2 bg-transparent" />
                        </div>
                    </div>

                    <div className="border w-full py-3 flex items-center px-4 rounded-lg focus-within:border-blue-500 border-[#131320]">
                        <textarea name="" id="" className="w-full min-h-[200px] h-full outline-none pl-2 bg-transparent resize-y" placeholder="Descrição"  />
                    </div>

                    <div className="flex items-center ml-auto">
                        <button className="flex items-center gap-2  py-3 px-5 rounded-lg">Cancelar</button>
                        <button className="flex items-center gap-2 bg-[#892CCD] text-white  py-3 px-5 rounded-lg">Salvar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
