import Image from 'next/image';
export default function About(){
    return(
        <section className="w-full h-full bg-app-black py-24">
            <div className="container mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-16 px-2 md:px-0">
                <div className="image-container w-full h-full relative flex justify-start md:justify-center">
                    <div className="image-square h-[18em] w-[16em] border border-white rounded-2xl" >
                        <div className='relative  h-[18em] w-[16em] top-6 left-8 '>
                            <Image src="/laywer-two.jpg" alt="Joaquim Mendez" width={1000} height={1000} className='h-full w-full object-cover bg-center  rounded-2xl' />
                            <div className='black-square w-[4.5em] h-[5em] bg-app-blue absolute bottom-[-1.5em] right-[-1.5em] rounded-lg drop-shadow-md'/>
                        </div>

                    </div>
                </div>

                <div  className="w-full h-full flex flex-col gap-3">
                    <span className="text-[18px] text-app-yellow font-thin ">OAB/PR 77.032</span>
                    <h3 className="text-white text-xl md:text-4xl font-bold" >Marcello Scaglioni Flores</h3>
                    <p className="text-white text-md">
                        Professional graduado em 1995 pela Faculdade de Direitode São Bernardo do Campo/SP, como pós graduação em Direito e Processo do Trabalho pela Escola Paulista de Direito, tendo na experiência o diferencialque você precisa. Mantém como característica principal a adoção de uma abordagem estratégica e clareza no atendimento, alinhando a técnica jurídica às necessidades do client, proporcionando tranquilidade e segurança em cada etapa do processo. 
                    </p>
                </div>
            </div>
        </section>
    )
}