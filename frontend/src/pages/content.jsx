import React from "react";
import Empresa from "../components/empresa";

const data = [
    {
        empresa : 'Consultoria XMI (Desarrollador fullstack)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis illum in maiores voluptatem explicabo quidem sit. Quidem sequi hic et harum cum nihil. Provident eligendi laborum incidunt ad molestiae.'
    },
    {
        empresa : 'Escola jungfrau (tecnico informatico)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis illum in maiores voluptatem explicabo quidem sit. Quidem sequi hic et harum cum nihil. Provident eligendi laborum incidunt ad molestiae.'
    },
    {
        empresa : 'Encantes del colchon (tecnico informatico)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis illum in maiores voluptatem explicabo quidem sit. Quidem sequi hic et harum cum nihil. Provident eligendi laborum incidunt ad molestiae.'
    },    
]

const Content = ()=>{
    return(
        <>
            <div className="flex flex-col items-center" id="sobre-mi">
                <div className="h-full flex xl:w-5/10 w-9/10 flex-col">
                    <span className='h-[80px] w-full'></span>
                    <h2 className="text-4xl text-amber-200 mb-3">Sobre mi</h2>
                    <div className="flex gap-3 lg:flex-nowrap flex-wrap">
                        <div className="bg-[url('../assets/teclado.jpeg')] bg-cover bg-no-repeat bg-center xl:w-5/10 h-96 rounded-lg flex justify-center items-center pl-3">
                            <div className="p-4 bg-[#13335b] rounded-l-lg">
                                <h2 className="text-xl text-amber-200">Descripcion personal</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vitae porro explicabo culpa! Expedita distinctio quod a quibusdam ut aliquid iusto commodi libero dignissimos, suscipit quidem illo vel quam minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsa dicta voluptatem impedit cumque, ab architecto et deserunt eos sequi magni natus nisi odit nihil exercitationem hic eaque omnis error.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-5/10 flex flex-col gap-3">
                            {data.map((element, index) => (
                                <Empresa
                                    key={index}
                                    title={element.empresa}
                                    text={element.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content