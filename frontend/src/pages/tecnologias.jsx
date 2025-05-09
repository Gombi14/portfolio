import React from "react";
import { useState } from "react";
// Frontend
import logoHtml from "../assets/logo-html.png";
import logoCSS from "../assets/logo-css.png";
import logoJS from "../assets/logo-js.png";
import logoSASS from "../assets/logo-sass.png";
import logoReact from "../assets/logo-react.png";
import tailwind from "../assets/logo-tailwind.png";

// Backend
import logoPython from "../assets/logo-python.png";
import logoPHP from "../assets/logo-php.png";
import logoLaravel from "../assets/logo-laravel.png";
import logoJava from "../assets/logo-java.png";
import logoNode from "../assets/logo-node.png";

// Aprendiendo
import logoDjango from "../assets/logo-django.png";
import logoSpring from "../assets/logo-spring.png";
import logoNext from "../assets/logo-next.png";
import logoAstro from "../assets/logo-astro.png";

// Herramientas
import logoGit from "../assets/logo-git.png";
import logoFigma from "../assets/logo-figma.png";
import logoNpm from "../assets/logo-npm.png";
import logoTerminal from "../assets/logo-terminal.png";

const data = [
    {
      frontend: [
        { nombre: "HTML", foto: logoHtml },
        { nombre: "CSS", foto: logoCSS },
        { nombre: "JavaScript", foto: logoJS },
        { nombre: "SASS", foto: logoSASS },
        { nombre: "React", foto: logoReact },
        { nombre: "Tailwind", foto: tailwind },
      ],
      backend: [
        { nombre: "Python", foto: logoPython },
        { nombre: "PHP", foto: logoPHP },
        { nombre: "Laravel", foto: logoLaravel },
        { nombre: "Java", foto: logoJava },
        { nombre: "Node JS", foto: logoNode },
      ],
      aprendiendo: [
        { nombre: "Django", foto: logoDjango },
        { nombre: "SpringBoot", foto: logoSpring },
        { nombre: "Next JS", foto: logoNext },
        { nombre: "Astro", foto: logoAstro },
      ],
      herramientas: [
        { nombre: "Git", foto: logoGit },
        { nombre: "Figma", foto: logoFigma },
        { nombre: "npm", foto: logoNpm },
        { nombre: "Terminal", foto: logoTerminal },
      ],
    },
];
const categorias = ["frontend", "backend", "aprendiendo", "herramientas"];

const Tecnologias = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center w-9/10 xl:w-5/10 justify-center" id="tecnologias">
            
          {/* Tabs Header */}
          <span className='h-[80px] w-full'></span>
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
            {data[0][activeTab].map((tech, idx) => (
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
    </>
  );
};

export default Tecnologias;