import {BsWhatsapp} from 'react-icons/bs';

export default function WhatssAppButton(){
    return(
        <button className='flex items-center gap-2 bg-app-green text-white text-xl font-bold rounded-md  px-5 py-2 z-50 shadow-app-green shadow-sm hover:shadow-app-green hover:shadow-md  ' >
            <BsWhatsapp/>
            Falar no Whatsapp
        </button>
    )
}