import React from "react";

const data = [
    {
        title : 'Grado Superior en Desarrollo de Aplicaciones Web',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quam deserunt totam placeat, nostrum odit ex quidem, minus qui, consequuntur voluptatum est aliquam perspiciatis quaerat at nisi nulla. Impedit, eos!',
    },
    {
        title : 'Grado Medio en Sistemas Microinformáticos y Redes',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quam deserunt totam placeat, nostrum odit ex quidem, minus qui, consequuntur voluptatum est aliquam perspiciatis quaerat at nisi nulla. Impedit, eos!',
    },
    ,
    {
        title : 'Curso Udemy de Desarrollo Frontend con React',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quam deserunt totam placeat, nostrum odit ex quidem, minus qui, consequuntur voluptatum est aliquam perspiciatis quaerat at nisi nulla. Impedit, eos!',
    }
]

export default function Formacion() {
    return(
        <>
            <span className='h-[80px] w-full' id="formacion"></span>
            <div className="flex flex-col items-center justify-center mb-10 mt-5 bg-[#5050ff] py-10" >
                <div className="xl:w-5/10 w-9/10">
                    <h1 className="text-2xl text-amber-200 mb-3">Formación</h1>
                    {data.map((formacion, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-xl text-white">{formacion.title}</h2>
                            <p className="text-gray-200">{formacion.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}