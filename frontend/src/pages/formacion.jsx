import React, { useEffect, useState } from "react";

export default function Formacion() {
    const [data, setData] = useState([]) 

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await fetch('http://localhost:3000/api/education')
                const json = await res.json()
                console.log(res);
                setData(Array.isArray(json)?json:[])
            }catch(err){
                console.error('Error al cargar la formacion: ', err)
            }
        }
        fetchData()
    },[])


    return(
        <>
            <span className='h-[80px] w-full' id="formacion"></span>
            <div className="flex flex-col items-center justify-center mb-10 mt-5 bg-[#111177] py-10" >
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