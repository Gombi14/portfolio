import React from "react";

const DashboardHome = ({ activeTab }) => {
    return (
        <div className="flex flex-col w-full h-full">
            <span className='h-[80px] w-full'></span>
            <div className="min-h-[calc(100vh-80px)] bg-blue-950 p-8">
                <h2 className="text-3xl capitalize">{activeTab}</h2>
                {/* Aquí podrías renderizar contenido condicional según activeTab */}
            </div>
        </div>
    );
};

export default DashboardHome;
