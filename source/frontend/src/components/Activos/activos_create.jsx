import React from 'react';
import {ArrowLeft} from 'lucide-react';
import InputForm from './input_form';


const CreateActivo = () => { 
return ( 
	<div>
        <div className='flex space-x-8 items-center mb-4'>
            <a href='/activos'>
                <button 
                    class="px-2 py-1 flex items-center font-myriad font-bold text-lg text-black transition bg-Celeste2UCR rounded hover:bg-CelesteUCR space-x-2"
                >
                    <ArrowLeft size={21}/>
                    <span> Ir atrás </span>
                </button>
            </a>
	        <h1 className=' font-myriad font-bold text-4xl pointer-events-none justify-center items-center'> Crear Activo </h1>
        </div>
        <InputForm/>
	</div> 
); 
}; 

export default CreateActivo;
