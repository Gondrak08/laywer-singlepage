import {IoIosArrowDroprightCircle} from 'react-icons/io';
import WhatssAppButton from './WhatssAppButton';
export default function QA() {
    const liStyle='w-full h-fit text-white text-lg flex gap-2 items-center'
    return (
        <section className="w-full h-full bg-app-blue py-16 flex flex-col justify-center gap-5  ">
            <h3 className="text-center text-2xl md:text-4xl text-bold text-white animation">Você tem algum <span className="text-app-yellow">destes problemas?</span></h3>
            <div className="container mx-auto w-full h-full flex flex-col gap-12 animation">
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2  px-2 md:px-20 ">
                    <ul className='h-full w-full'>
                        {['Horas extras não pagas ou pagas a menos', 'Verbas rescisórias não pagas ou pagas a menos', 'Demissão em período de estabilidade', ' Afastamento por doença e acidente de trabalho', 'Adicionais de periculosidade e insalubridade',  'Demissão com justa causa', 'Teletrabalho', 'Salários quitados a menos ou "por fora"', 'Demissão e indenização trabalhista', 'Reconhecimento de vínculo'].map((text:string, index:number)=>(
                            <li key={index} className={`${liStyle}`}>
                                <IoIosArrowDroprightCircle className="text-app-yellow text-2xl" />
                                {text}
                            </li>
                        ))
                        }
                    </ul>
                    <ul className="h-full w-full">
                        {
                            ['integração de comissões ao salário', 'orientações sobre registro de carteira de trabalho', 'Análise de FGTS, abono, horas extras, férias e 13º slário', 'Indenização por assédio, danos morais e materiais', 'Doença ocupacional', 'Diferença Salarial', 'Redução ou inexistencia de intervalos', 'Acidente de trabalho', 'Descansos semanais não remunerados'].map((text: string, index: number) => (
                                <li key={index} className={`${liStyle}`}>
                                    <IoIosArrowDroprightCircle className="text-app-yellow text-2xl" />
                                    {text}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='mx-auto'>
                    <WhatssAppButton/>
                </div>
            </div>
        </section>
    )
}

