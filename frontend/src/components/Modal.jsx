import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, data, onSave, isNew }) => {
    const [form, setForm] = useState({});
    const [preview, setPreview] = useState({}); // ✅ AHORA SIEMPRE SE DEFINE

    useEffect(() => {
        setForm(data || {});
        // Si hay una imagen en modo edición, también la seteamos en preview
        const newPreview = {};
        if (data) {
            for (const key in data) {
                if ((key === "img" || key === "foto") && typeof data[key] === "string") {
                    newPreview[key] = data[key];
                }
            }
        }
        setPreview(newPreview);
    }, [data]);

    const handleChange = (key, value) => {
        setForm({ ...form, [key]: value });
    };

    const handleFileChange = (key, file) => {
        setForm({ ...form, [key]: file });
        const previewUrl = URL.createObjectURL(file);
        setPreview({ ...preview, [key]: previewUrl });
    };

    const handleSubmit = () => {
        onSave(form);
        onClose();
    };

    // ✅ Esto viene después de declarar hooks
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-[#1c253b] text-black p-6 rounded-xl w-[95%] max-w-md shadow-2xl transform transition-transform duration-300 scale-100 opacity-100 animate-[fadeIn_0.3s_ease-out]">
                <h3 className="text-2xl font-bold mb-4 text-center text-amber-200">
                    {isNew ? "Crear Nuevo" : "Editar"}
                </h3>
                <div className="space-y-4">
                    {Object.entries(form).map(([key, value]) => (
                        !["_id", "__v"].includes(key) && (
                            <div key={key} className="flex flex-col">
                                <label className="font-semibold mb-1 capitalize text-amber-200">{key}</label>

                                {(key === "img" || key === "foto") ? (
                                    <>
                                        {(preview[key]) && (
                                            <div className="flex justify-center h-48 mb-4">
                                                <img
                                                    src={preview[key]}
                                                    alt="Vista previa"
                                                    className="max-w-full h-48 object-cover rounded mb-2"
                                                />
                                            </div>
                                        )}

                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(key, e.target.files[0])}
                                            className="w-full p-2 border border-gray-300 rounded bg-white"
                                        />
                                    </>
                                ) : (
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange(key, e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded bg-white"
                                    />
                                )}
                            </div>
                        )
                    ))}
                </div>

                <div className="flex justify-end mt-6 gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                        Guardar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
