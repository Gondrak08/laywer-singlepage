import Image from 'next/image';
import WhatssAppButton from "./WhatssAppButton";

export default function Service() {
    return (
        <section className="w-full h-full relative service "
         style={{
            backgroundImage: 'url("service_header.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', objectFit: 'contain'
        }} >
            <div className="container mx-auto h-full px-2 md:px-0 ">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 py-24 z">
                    <div className="w-full h-full flex flex-col gap-5 z-50">
                        <h3 className="text-2xl md:text-4xl text-white font-bold" >
                            Serviço jurídico exepcional <span className="text-app-yellow" >e personalizado</span>
                        </h3>
                        <div className="w-full h-full flex flex-col text-white text-lg text-start gap-3">
                            <p>
                                Você está enfretando um problema trabalhista e não sabe por onde começar? Não se preocupe, nós estamos aqui para ajudá-lo. Com 30 anos de expiriência no direito do trabalho, nosso escritório de advocacia tem o conhecimento e a expertise necessários para lhe oferecer o melhor serviço jurídico.
                            </p>
                            <p>
                                Nosso comproisso é fornecer um atendimento personalizado, que leve em conta as suas necessidades e objetivos. Desde a propositura de ação até o acompanhamento nos tribunais superiores, estaremos ao seu lado em todas as etapas do processo.
                            </p>
                        </div>
                        <div className='w-full'>
                            <WhatssAppButton/>
                        </div>
                    </div>
                    <div className='w-full h-full hidden md:flex flex-col justify-center z-50' >
                        <Image src="/justice.png" alt="justice" width={"1000"}  height={"1000"} className='h-[27em] object-contain opacity-[.45]'/>
                    </div>
                </div>
            </div>
        </section>
    )
}