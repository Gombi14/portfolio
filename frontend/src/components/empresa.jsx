import React from "react";

const Empresa = ({title, text})=>{
    return(
        <>
            <div className="bg-[#5050ff] rounded-lg p-4">
                <h2 className="text-xl text-amber-200">{title}</h2>
                <p>
                    {text}
                </p>
            </div>
        </>
    )
}
export default Empresa