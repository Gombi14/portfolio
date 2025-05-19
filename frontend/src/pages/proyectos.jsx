import React, {useState} from "react";
import Proyecto from "../components/proyecto"
import apeles from "../assets/apeles-fenosa.png";
import tienda from "../assets/tienda-laravel.png";
import portfolio from "../assets/portfolio.png";


const data = [
    {
        title : 'Museo Apel·les fenosa',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quam deserunt totam placeat, nostrum odit ex quidem, minus qui, consequuntur voluptatum est aliquam perspiciatis quaerat at nisi nulla. Impedit, eos!',
        img : apeles
    },
    {
        title : 'Portfolio',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quam deserunt totam placeat, nostrum odit ex quidem, minus qui, consequuntur voluptatum est aliquam perspiciatis quaerat at nisi nulla. Impedit, eos!',
        img : portfolio
    },
    {
        title : 'Tienda online Rick y Morty',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque quam deserunt totam placeat, nostrum odit ex quidem, minus qui, consequuntur voluptatum est aliquam perspiciatis quaerat at nisi nulla. Impedit, eos!',
        img : tienda
    }    
]

const Proyectos = ()=>{
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);

        try {
        const res = await axios.post('http://localhost:5000/api/upload', formData);
        setImageUrl(res.data.imageUrl);
        } catch (err) {
        console.error(err);
        }
    };
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
                    
                    <form onSubmit={handleUpload} className="flex flex-col w-full mt-4">
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg mt-4 transition-all duration-300 hover:bg-blue-600 cursor-pointer">Subir</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Proyectos