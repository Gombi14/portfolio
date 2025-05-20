import React, { useState, useEffect } from "react";

const categorias = ["frontend", "backend", "aprendiendo", "herramientas"];

const Tecnologias = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    const fetchTecnologias = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/skill");
        const json = await res.json();
        setTecnologias(Array.isArray(json) ? json : []);
      } catch (error) {
        console.error("Error al cargar las tecnologias:", error);
      }
    };

    fetchTecnologias();
  }, []);

  const tecnologiasFiltradas = tecnologias.filter(
    (tech) => tech.categoria === activeTab
  );

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-9/10 xl:w-5/10 justify-center" id="tecnologias">
        <span className="h-[80px] w-full"></span>

        {/* Tabs Header */}
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full font-medium transition-colors w-[140px] duration-200 ${
                activeTab === cat
                  ? "bg-[#5050ff] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-300 cursor-pointer"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Contenido dinámico */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-6xl px-4">
          {tecnologiasFiltradas.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center bg-[#13335b] p-4 rounded-xl shadow hover:shadow-lg transition h-[140px]"
            >
              <img src={tech.foto} alt={tech.nombre} className="w-16 mb-2" />
              <span className="text-center font-semibold">{tech.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
