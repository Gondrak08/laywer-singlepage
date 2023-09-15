import {FaStar} from 'react-icons/fa';
import WhatssAppButton from './WhatssAppButton';

interface Card {
    text: string,
    author: string
}

const cardData: Card[] = [
    {
        text: "Apesar do atendimento ser a distância o dr Marcello conseguiu suprir a nossa necessidade e estruturar toda a Clínica de forma preventiva e eficiente. Além das orientações períodicas à equipe com as demandas que surgem no dia a dia, sua consultoria soma e muito, no auxilio e elaboração das propostas e notificações que a Clínica demandas. Obrigado Dr. Joaquim, vida longa a nossa parceria!",
        author: "Ave Clínica"
    },
    {
        text: "Tive a grata satisfação de contratar os serviços do Dr. Joaquim Mendes em meio a quatro supreendentes, inesperadas notificações Trabalhistas. O seu trabalho, lucidez, estratégia e persuasão sempre embasadas na verdade e transparência me garantiram o sucesso nas quatro ações Trabalhistas que fui notificado. Sou um entusiasta em recomendar os seus serviçoes. Que Deus continue o inesperado em sua atividade profissional",
        author: 'Vanessa Dourado'
    },
    {
        text: "Conheci o Dr. Joaquim Mendes através de uma amigo que O indicou. Aos poucos fui conhecendo o que já haviam me informado sobre sua competência, profissionalismo, dedicaçõe com que vem tratando o assunto que coloquei sob sua responsabilidade. Fica aqui minha eterna gratidão por este grande profissional que tive o privilégio de conhecer.",
        author: 'Marcelo Carlos Barreto'
    }
];

export default function ClientsDisplay() {
    return (
        <section className="w-full h-full bg-app-black py-24 relative clients" style={{
            backgroundImage: 'url("background.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', objectFit: 'contain'
        }} >
            <div className="container mx-auto h-full flex flex-col items-center justify-center gap-6 ">
                <div className="flex flex-col items-center gap-2 z-30 animation">
                    <span className="text-white uppercase font-thin text-sm">
                        avaliação de nossos clientes
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold text-white">Veja abaixo os <span className="text-app-yellow">depoimentos</span>
                    </h3>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 z-30 px-2 md:px-0 animation" >
                    {cardData.map((card: Card, index: number) => (
                        <div key={index} className="h-[33em] flex flex-col gap-3 text-white  p-6 bg-[#233342] ">
                            <div className='w-full flex gap-2'>
                                {[1,2,3,4,5].map((_, index:number) => (
                                    <FaStar key={index}  />
                                ))}
                            </div>
                            <p className="text-lg font-thin">
                                {card.text}
                            </p>
                            <span className="text-center text-lg">
                                {card.author}
                            </span>
                        </div>
                    ))}
                </div>
            
                <div className='mx-auto z-30'>
                    <WhatssAppButton/>
                </div>


            </div>
        </section>
    )
}