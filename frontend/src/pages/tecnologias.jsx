import React, { useState } from "react";

const tecnologias = [
  // Frontend
  { nombre: "HTML", foto: "http://localhost:3000/uploads/logo-html.png", categoria: "frontend" },
  { nombre: "CSS", foto: "http://localhost:3000/uploads/logo-css.png", categoria: "frontend" },
  { nombre: "JavaScript", foto: "http://localhost:3000/uploads/logo-js.png", categoria: "frontend" },
  { nombre: "SASS", foto: "http://localhost:3000/uploads/logo-sass.png", categoria: "frontend" },
  { nombre: "React", foto: "http://localhost:3000/uploads/logo-react.png", categoria: "frontend" },
  { nombre: "Tailwind", foto: "http://localhost:3000/uploads/logo-tailwind.png", categoria: "frontend" },

  // Backend
  { nombre: "Python", foto: "http://localhost:3000/uploads/logo-python.png", categoria: "backend" },
  { nombre: "PHP", foto: "http://localhost:3000/uploads/logo-php.png", categoria: "backend" },
  { nombre: "Laravel", foto: "http://localhost:3000/uploads/logo-laravel.png", categoria: "backend" },
  { nombre: "Java", foto: "http://localhost:3000/uploads/logo-java.png", categoria: "backend" },
  { nombre: "Node JS", foto: "http://localhost:3000/uploads/logo-node.png", categoria: "backend" },

  // Aprendiendo
  { nombre: "Django", foto: "http://localhost:3000/uploads/logo-django.png", categoria: "aprendiendo" },
  { nombre: "SpringBoot", foto: "http://localhost:3000/uploads/logo-spring.png", categoria: "aprendiendo" },
  { nombre: "Next JS", foto: "http://localhost:3000/uploads/logo-next.png", categoria: "aprendiendo" },
  { nombre: "Astro", foto: "http://localhost:3000/uploads/logo-astro.png", categoria: "aprendiendo" },

  // Herramientas
  { nombre: "Git", foto: "http://localhost:3000/uploads/logo-git.png", categoria: "herramientas" },
  { nombre: "Figma", foto: "http://localhost:3000/uploads/logo-figma.png", categoria: "herramientas" },
  { nombre: "npm", foto: "http://localhost:3000/uploads/logo-npm.png", categoria: "herramientas" },
  { nombre: "Terminal", foto: "http://localhost:3000/uploads/logo-terminal.png", categoria: "herramientas" },
];

const categorias = ["frontend", "backend", "aprendiendo", "herramientas"];

const Tecnologias = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tecnologiasFiltradas = tecnologias.filter(
    (tech) => tech.categoria === activeTab
  );

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center w-9/10 xl:w-5/10 justify-center" id="tecnologias">
        {/* Tabs Header */}
        <span className="h-[80px] w-full"></span>
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
