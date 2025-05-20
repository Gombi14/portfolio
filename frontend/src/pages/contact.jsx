import React, { useState } from 'react';

const Contact = ({ onClose }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = async () => {
        const payload = { nombre, email, mensaje };

        try {
            const res = await fetch('http://localhost:3000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Error al enviar el mensaje');
            }
            onClose();
        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
            alert('Ocurrió un error al enviar el mensaje.');
        }
    };

    return (
        <div className="h-screen w-screen bg-[#00000053] fixed flex items-center justify-center z-50">
            <div className="sm:w-[500px] w-11/12 bg-blue-900 p-4 rounded-2xl text-white">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">Contacto</h1>
                    <div className="relative top-1 right-1 h-[40px] w-[40px] flex items-center justify-center text-2xl cursor-pointer select-none" onClick={onClose}> &times;</div>
                </div>
                <div className="w-full h-full">
                    <div className='flex flex-col'>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            className='border-gray-100 border p-2 rounded-lg bg-white'
                            placeholder='Nombre'
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className='border-gray-100 border p-2 rounded-lg bg-white'
                            placeholder='Email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea
                            className='border-gray-100 border p-2 rounded-lg resize-none bg-white'
                            placeholder='Mensaje'
                            rows={5}
                            value={mensaje}
                            onChange={e => setMensaje(e.target.value)}
                        ></textarea>
                        <button
                            className='bg-blue-500 text-white p-2 rounded-lg mt-4 transition-all duration-300 hover:bg-blue-600 cursor-pointer'
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
