import{FaWhatsapp} from 'react-icons/fa';
import {AiOutlineMail } from 'react-icons/ai';
import {CiMapPin} from 'react-icons/ci';

export default function Footer(){
    return(
        <footer className="w-full h-full flex justify-center items-end  pt-52 pb-6 bg-app-gray-dark " >
            <div className="w-fit  h-full flex flex-col gap-3 ">
                <h4 className='text-center text-white'>OAB/PR 88.#00</h4>
                <div className='flex flex-col items-center justify-center'>
                    <span className='flex h-full items-center justify-center gap-2 text-white'><FaWhatsapp className="text-app-yellow"/> (+55) 99999-9999</span >
                    <span className='flex h-full items-center justify-center gap-2 text-white'><AiOutlineMail className="text-app-yellow" /> test@advgado.com</span >
                    <span className='flex h-full items-center justify-center gap-2 text-white'><CiMapPin className="text-app-yellow"/> Created by @{"<vitorAlecrim>"}</span >
                </div>
            </div>
        </footer>
    )
}