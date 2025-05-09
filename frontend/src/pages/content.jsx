import React from "react";
import Empresa from "../components/empresa";

const Content = ()=>{
    return(
        <>
            <div className="flex flex-col items-center" id="sobre-mi">
                <div className="h-full flex xl:w-5/10 w-9/10 flex-col">
                    <span className='h-[80px] w-full'></span>
                    <h2 className="text-4xl text-amber-200 mb-3">Sobre mi</h2>
                    <div className="flex gap-3 lg:flex-nowrap flex-wrap">
                        <div className="bg-[url('../assets/teclado.jpeg')] bg-cover bg-no-repeat bg-center xl:w-5/10 h-96 rounded-lg flex justify-center items-center pl-3">
                            <div className="p-4 bg-[#13335b] rounded-l-lg">
                                <h2 className="text-xl text-amber-200">Descripcion personal</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur vitae porro explicabo culpa! Expedita distinctio quod a quibusdam ut aliquid iusto commodi libero dignissimos, suscipit quidem illo vel quam minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsa dicta voluptatem impedit cumque, ab architecto et deserunt eos sequi magni natus nisi odit nihil exercitationem hic eaque omnis error.
                                </p>
                            </div>
                        </div>
                        <div className="xl:w-5/10 flex flex-col gap-3">
                            <Empresa
                                title={'Empresa 1'}
                                text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsum repellat nostrum excepturi aspernatur ullam atque cum placeat maxime odit officia laudantium voluptas nisi, blanditiis inventore possimus sint perferendis est.'}
                            />
                            <Empresa
                                title={'Empresa 2'}
                                text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsum repellat nostrum excepturi aspernatur ullam atque cum placeat maxime odit officia laudantium voluptas nisi, blanditiis inventore possimus sint perferendis est.'}
                            />
                            <Empresa
                                title={'Empresa 3'}
                                text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ipsum repellat nostrum excepturi aspernatur ullam atque cum placeat maxime odit officia laudantium voluptas nisi, blanditiis inventore possimus sint perferendis est.'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content