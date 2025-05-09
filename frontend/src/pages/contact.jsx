import React from 'react';

const Contact = ({ onClose }) => {
    return (
        <div className="h-screen w-screen bg-[#00000053] fixed flex items-center justify-center z-50">
            <div className="sm:w-[500px] w-19/20 bg-white p-4 rounded-2xl text-black">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">Contacto</h1>
                    <div className="relative top-1 right-1 h-[40px] w-[40px] flex items-center justify-center text-2xl cursor-pointer select-none" onClick={onClose}> &times;</div>
                </div>
                <div className="w-full h-full">
                    <div className='flex flex-col'>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className='border-gray-100 border p-2 rounded-lg' placeholder='Nombre'/>
                        <label htmlFor="email">Email</label>
                        <input type="email" className='border-gray-100 border p-2 rounded-lg' placeholder='Email'/>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea className='border-gray-100 border p-2 rounded-lg resize-none' placeholder='Mensaje' rows={5}></textarea>
                        <button className='bg-blue-500 text-white p-2 rounded-lg mt-4 transition-all duration-300 hover:bg-blue-600 cursor-pointer' onClick={onClose}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
