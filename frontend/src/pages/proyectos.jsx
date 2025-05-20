import React, { useState, useEffect } from "react";
import Proyecto from "../components/proyecto";

const Proyectos = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/projects");
                const json = await res.json();
                setData(Array.isArray(json) ? json : []);
            } catch (error) {
                console.error("Error al cargar los proyectos:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <div className="flex flex-col items-center justify-center mb-10" id="proyectos">
                <span className='h-[80px] w-full'></span>
                <div className="xl:w-5/10 w-9/10">
                    <h1 className="text-2xl text-amber-200 mb-3">Proyectos</h1>
                    <div className="columns-1 sm:columns-2 gap-4">
                        {data.map((proyecto, index) => (
                            <div key={index} className="mb-4 break-inside-avoid">
                                <Proyecto
                                    title={proyecto.title}
                                    content={proyecto.content}
                                    img={proyecto.img}
                                    style={index % 2 === 0 ? 0 : 1}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Proyectos;
