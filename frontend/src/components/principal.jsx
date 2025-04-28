import React from "react";

const Principal = ()=>{
    return(
        <>
            <div className="h-screen flex flex-col bg-[linear-gradient(to_bottom,_#5050ff,_#13335b,_#000236)] justify-center items-center">
                <div className="h-full flex justify-center items-center w-8/10 flex-col">
                    <h1 className="text-amber-200 text-[49px]">Fullstack web developer</h1>
                    <h1 className="text-6xl">Hola! soy Eric Gasull</h1>
                    <div className="flex mt-2">
                        <a href="https://www.linkedin.com/in/eric-gasull-serrano-037587308/">
                            <div className="p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="text-white">
                                    <path fill="currentColor" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                </svg>
                            </div>
                        </a>
                        <div className="p-2">
                            <div className="text-white text-[25px] w-[30px] h-[30px] flex justify-center items-center cursor-pointer" title="Descargar CV">
                                <i className="fa-solid fa-file-arrow-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg absolute bottom-[5%] flex flex-col items-center justify-center text-2xl">
                    <i className="fa-solid fa-angle-down animate-[moveY_1s_ease-in-out_infinite_alternate] mb-4"></i>
                </div>
            </div>
        </>
    )
}
export default Principal