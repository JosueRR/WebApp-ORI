import React from 'react';
import {ArrowLeft} from 'lucide-react';


const InputForm = () => { 
    return ( 
        <div>
            <div className=''>
                <form class="bg-white shadow border-b-2 border-gray-200 rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div class=" grid grid-cols-2 gap-4 justify-center">
                        <div class="flex justify-center w-full px-3 mb-6 md:mb-0">
                            <div class="">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Placa
                                </label>
                                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                        </div>
                        <div class="bg-Celeste2UCR">02</div>
                        <div class="bg-Celeste2UCR">03</div>
                        <div class="bg-Celeste2UCR">04</div>
                        <div class="bg-Celeste2UCR">05</div>
                        <div class="bg-Celeste2UCR">06</div>
                        <div class="bg-Celeste2UCR">07</div>
                        <div class="bg-Celeste2UCR">08</div>
                        <div class="col-span-2 bg-Celeste2UCR">09</div>
                        <div class="col-span-2 bg-Celeste2UCR">Confirm button</div>
                    </div>
                </form>
            </div>
        </div>
    ); 
}; 

export default InputForm;