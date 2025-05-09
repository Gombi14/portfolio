import React from "react";

const Proyecto = ({title,content,img, style})=>{
    return (
        <>
            <div className={`w-full h-fit flex flex-col gap-3 p-4 bg-[#5050ff] rounded-lg`}>
                <div className="w-full">
                    <img className="rounded-lg" src={img} alt="" />
                </div>
                <div className="w-full">
                    <h3 className="text-xl text-amber-200">{title}</h3>
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}
export default Proyecto