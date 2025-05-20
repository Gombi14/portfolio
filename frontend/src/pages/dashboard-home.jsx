import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import DataCard from "../components/DataCard";

const endpoints = {
    experiencia: "/api/experience",
    formacion: "/api/education",
    tecnologias: "/api/skill",
    proyectos: "/api/projects",
    mensajes: "/api/messages"
};

const DashboardHome = ({ activeTab }) => {
    const [data, setData] = useState([]);
    const [modalData, setModalData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNew, setIsNew] = useState(false);

    const fetchData = async () => {
        if (!endpoints[activeTab]) return;
        try {
            const res = await fetch(`http://localhost:3000${endpoints[activeTab]}`);
            const json = await res.json();
            setData(Array.isArray(json) ? json : []);
        } catch (error) {
            console.error("Error al obtener datos:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [activeTab]);

    const openEditModal = (item) => {
        setModalData(item);
        setIsNew(false);
        setIsModalOpen(true);
    };

    const openCreateModal = () => {
        const emptyTemplate = data[0]
            ? Object.keys(data[0]).reduce((acc, key) => {
                if (!["_id", "__v"].includes(key)) acc[key] = "";
                return acc;
            }, {})
            : { titulo: "", contenido: "" };
        setModalData(emptyTemplate);
        setIsNew(true);
        setIsModalOpen(true);
    };

    const handleSave = async (formData) => {
        const url = `http://localhost:3000${endpoints[activeTab]}`;
        const method = isNew ? "POST" : "PUT";
        const fullUrl = isNew ? url : `${url}/${formData._id}`;
        const token = localStorage.getItem("token");

        const hasFile = Object.values(formData).some(value => value instanceof File);

        let options;

        if (hasFile) {
            const data = new FormData();
            for (const key in formData) {
                if (formData[key] !== undefined && formData[key] !== null) {
                    data.append(key, formData[key]);
                }
            }
            options = {
                method,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: data
            };
        } else {
            options = {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            };
        }

        try {
            const res = await fetch(fullUrl, options);
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Error al guardar");
            }
            fetchData();
        } catch (error) {
            console.error("Error al guardar:", error.message);
            alert("Error al guardar. Revisa los campos o la conexión.");
        }
    };

    const handleDelete = async (id) => {
        const confirmed = window.confirm("¿Estás seguro de eliminar este elemento?");
        if (!confirmed) return;

        const url = `http://localhost:3000${endpoints[activeTab]}/${id}`;
        const token = localStorage.getItem("token");

        try {
            await fetch(url, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchData();
        } catch (error) {
            console.error("Error al eliminar:", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };

    return (
        <div className="flex flex-col w-full h-full">
            <span className='h-[80px] w-full'></span>
            <div className="min-h-[calc(100vh-80px)] bg-[#273048] p-8">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl capitalize text-amber-200">{activeTab}</h2>
                    <div className="flex gap-4">
                        <button
                            onClick={openCreateModal}
                            className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-white cursor-pointer" title="Nuevo elemento"
                        >
                            <i class="fa-solid fa-square-plus cursor-pointer" title="Nuevo elemento"></i>
                        </button>
                        <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded text-white cursor-pointer" title="cerrar sessión">
                            <i class="fa-solid fa-right-from-bracket" ></i>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {data.map(item => (
                        <DataCard
                            key={item._id}
                            item={item}
                            onDetail={() => openEditModal(item)}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    data={modalData}
                    onSave={handleSave}
                    isNew={isNew}
                />
            </div>
        </div>
    );
};

export default DashboardHome;
