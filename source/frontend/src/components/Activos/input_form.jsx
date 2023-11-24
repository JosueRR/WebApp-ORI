import React from 'react';
import { Check, X } from 'lucide-react';


const InputForm = () => { 
    return ( 
        <div>
            <div className=''>
                <form class="pt-6 mb-8 w-auto flex items-center justify-center">
                    <div class="bg-white shadow border-b-2 border-gray-200 rounded-lg grid grid-cols-2 p-4 gap-x-8">
                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Id
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="1"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Tipo
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="Silla de escritorio"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Placa
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="1234"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Descripción
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="Silla de escritorio"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Fecha de adquisición
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="2023-11-22 01:38:50"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Estado
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="Asignado"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-placa">
                                    Responsable
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-placa" type="text" placeholder="ORI"/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Provedor">
                                    Provedor
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-Provedor" type="text" placeholder="Provedor #1"/>
                            </div>
                        </div>

                        <div class="col-span-2 flex justify-center w-full h-auto">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-Observaciones">
                                    Observaciones
                                </label>
                                <input class="appearance-none w-96 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-Observaciones" type="text" placeholder="Daños en el asiento"/>
                            </div>
                        </div>

                        <div class="col-span-2 flex justify-center w-full h-auto mb-5">
                            <a href='/activos'>
                                <button 
                                    class=" ml-4 px-2 py-1 flex items-center font-myriad font-bold text-lg text-green-800 transition bg-green-300 rounded hover:bg-green-400 space-x-2"
                                >
                                    <Check size={21}/>
                                    <span> Confirmar </span>
                                </button>
                            </a>
                            <a href='/activos'>
                                <button 
                                    class="ml-4 px-2 py-1 flex items-center font-myriad font-bold text-lg text-red-800 transition bg-red-300 rounded hover:bg-red-400 space-x-2"
                                    type="button"
                                >
                                    <X size={21}/>
                                    <span> Cancelar </span>
                                </button>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    ); 
}; 

export default InputForm;