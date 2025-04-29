import React from "react";
import logoHtml from "../assets/logo-html.png"
import logoCSS from "../assets/logo-css.png"
import logoJS from "../assets/logo-js.png"
import logoSASS from "../assets/logo-sass.png"
import logoReact from "../assets/logo-react.png"

const Tecnologias = ({frontend, backend})=>{
    return (
        <>
            <div className="h-screen flex flex-col items-center">
                <div className="h-full flex w-7/10 flex-col">
                    <span className='h-[80px] w-full'></span>
                    <h2 className="text-4xl text-amber-200 mb-3">Tecnologias</h2>
                    <div className="flex gap-3">
                        <div className="w-5/10">
                            <h2 className="text-amber-200 text-xl mb-3">Frontend</h2>
                            <div className="flex justify-around">
                                <div className="flex flex-col justify-between items-center">
                                    <img src={logoHtml} alt="" width={60} />
                                    <p>HTML</p>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <img src={logoCSS} alt="" width={60} />
                                    <p>CSS</p>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <img src={logoJS} alt="" width={60} />
                                    <p>JavaScript</p>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <img src={logoSASS} alt="" width={60} />
                                    <p>HTML</p>
                                </div>
                                <div className="flex flex-col justify-between items-center">
                                    <img src={logoReact} alt="" width={60} />
                                    <p>React</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-5/10">
                            <h2 className="text-4xl text-amber-200 mb-3">Backend</h2>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tecnologias