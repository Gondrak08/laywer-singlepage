import Image from 'next/image';
import WhatssAppButton from './WhatssAppButton';
export default function Header() {
    return (
        <section className="header w-full h-[70vh] relative"
            style={{
                backgroundImage: 'url("headerbackground.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', objectFit: 'contain'
            }}
        >
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 container mx-auto">
                <div className="col-1 flex flex-col justify-center gap-8 p-3">
                    <div className='w-full h-fit flex flex-col gap-4 z-50'>
                        <h1 className='text-app-yellow text-3xl uppercase font-bold ' >advogado trabalhista</h1>
                        <h2 className='text-2xl text-white font-bold'>
                            Garanta seus <span className='text-app-yellow' >direitos na empresa</span>
                        </h2>
                        <p className='text-white text-xl' >
                            Com <span className='font-bold' >30 anos de experiência</span> em advogacia trabalhista, o Dr. Joaquim Almeida pode te ajudar.
                        </p>
                        <p className='text-white text-xl' >
                            <span className='font-bold' >Entre em contato</span> agora e conquiste a justiça que você merece. Não espere mais para resolver suas questões trabalhistas.
                        </p>
                    </div>
                    <div className='w-full z-50'>
                        <WhatssAppButton/>
                    </div>
                </div>
                <div className="col-1 hidden md:flex w-full h-full relative items-end z-50 ">
                    <Image src="/laywer-one.png" alt="the laywer" width={'1000'} height={'1000'} className='absolute w-full h-[90%] object-contain opacity-[0.9] ' />
                </div>
            </div>
        </section>
    )
};

