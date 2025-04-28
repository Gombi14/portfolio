import React from "react";
import imgTeclado from "../assets/teclado.jpeg"

const Content = ()=>{
    return(
        <>
            <div className="h-screen flex flex-col bg-[#000236] items-center">
                <div className="h-full flex w-5/10 flex-col">
                    <span className='h-[80px] w-full'></span>
                    <h2 className="text-4xl text-amber-200 mb-3">Sobre mi</h2>
                    <div className="flex gap-3">
                        <div className="w-5/10 bg-[#13335b] rounded-lg h-fit">
                            <div class="bg-[url('../assets/teclado.jpeg')] bg-cover bg-no-repeat bg-center w-full h-48 rounded-lg"></div>
                            <p className="p-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vitae porro explicabo culpa! Expedita distinctio quod a quibusdam ut aliquid iusto commodi libero dignissimos, suscipit quidem illo vel quam minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsa dicta voluptatem impedit cumque, ab architecto et deserunt eos sequi magni natus nisi odit nihil exercitationem hic eaque omnis error.
                            </p>
                        </div>
                        <div className="w-5/10 flex flex-col gap-3">
                            <div className="bg-white rounded-lg text-[#000236] p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, quae sint non atque nesciunt iste dolorem maiores ipsa at inventore culpa delectus fuga voluptatem quidem aliquam porro enim fugiat repudiandae!</div>
                            <div className="bg-white rounded-lg text-[#000236] p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsum repellat nostrum excepturi aspernatur ullam atque cum placeat maxime odit officia laudantium voluptas nisi, blanditiis inventore possimus sint perferendis est.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content