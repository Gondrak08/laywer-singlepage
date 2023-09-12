import WhatssAppButton from "./WhatssAppButton"

interface Card {
    title: string,
    message: string
}

const cardData: Card[] = [
    {
        title: 'escritório físico e digital:',
        message: 'Nossos clientes conseguem ser atendidos de forma presencial e também 100% on-line.'
    },

    {
        title: 'atendimento especializado:',
        message: 'Atendimento com Advogado especialista em demandas trabalhistas, garantido-lhe a segurança e o conforto de que o seu caso está com profissional capacitado.'
    },
    {
        title: 'transparência e clareza:',
        message: 'Mantemos nossos clientes atualizados a todo momento sobre o seu caso.'
    }
]

export default function QualitiesPressentation() {
    return (
        <section className="w-full h-full bg-app-blue py-24">
            <div className="container mx-auto h-full flex flex-col items-center gap-5">
                <div className="w-full flex flex-col items-center">
                    <h3 className="text-white text-2xl md:text-4xl uppercase font-bold">
                        nossos diferenciais
                    </h3>
                    <span className="text-center md:text-left indent-4 text-white text-md md:text-lg w-full md:w-[38em]">
                        Uma advogada especializada é capaz de trazer paz e tranquilidade. Através de sua capacitação e experiência, é possível evitar erros, solucionar problemas e ter segurança.
                    </span>
                </div>
                <div className="w-[75%] h-full flex flex-col md:flex-row  items-center gap-3  ">
                    {
                        cardData.map((card: Card, index: number) => (
                            <div key={index} className="py-2  w-full h-[22em]  flex flex-col items-center relative border border-white rounded-2xl shadow-app-black shadow-2xl  z-20 ">
                                <div className="absolute top-24 bottom-0 px-5 py-3 flex flex-col gap-3">
                                    <h4 className="text-md text-white uppercase" >
                                        {card.title}
                                    </h4>
                                    <p className="text-white text-left">
                                        {card.message}
                                    </p>
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
                <div className="my-5 md:my-0 mx-auto z-30">
                    <WhatssAppButton />
                </div>
            </div>
        </section>
    )
}