import React from "react";

const Aside = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { label: "Experiencia", value: "experiencia" },
        { label: "Formación", value: "formacion" },
        { label: "Tecnologías", value: "tecnologias" },
        { label: "Proyectos", value: "proyectos" },
        { label: "Mensajes", value: "mensajes" },
    ];

    return (
        <div className="flex flex-col h-full p-4 min-w-[200px] items-center fixed bg-[#101728]">
            <span className='h-[80px] w-full'></span>
            <h1 className="text-2xl mb-4">Dashboard</h1>
            <ul className="space-y-2">
                {tabs.map(tab => {
                    const isActive = activeTab === tab.value;
                    return (
                        <li
                            key={tab.value}
                            className={`cursor-pointer hover:text-amber-200 transition-all duration-500 hover:scale-140 hover:text-center ${
                                isActive ? 'text-amber-200 scale-130 text-center' : ''
                            }`}
                            onClick={() => setActiveTab(tab.value)}
                        >
                            {tab.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Aside;
