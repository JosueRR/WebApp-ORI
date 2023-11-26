import React, { useState } from 'react';
import Popup from './popup';

const CreateForm = ({ trigger, setTrigger, setRefresh }) => {
    /* Manages popup */
    const [formStatus, setFormStatus] = useState(false);
    const [Descripcion, setDescripcion] = React.useState(null);

    /* Handles the form, passes the data to backend and creates an tipo */
    function handleForm(event) {
        event.preventDefault()
        let tipo = {
            Descripcion: Descripcion
        }
        fetch('/backend/tipos/create/guardar', {
            method: 'POST',
            body: JSON.stringify(tipo),
            headers: { "Content-Type": "application/json" }
        })
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function (body) {
            console.log(body);
            setFormStatus({ success: true, message: 'El tipo ha sido creado de forma exitosa.' });
        })
        .catch(function (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setFormStatus({ success: false, message: 'Se produjo un error y no se pudo crear el nuevo tipo.' });
        });
    }

    return ( 
        <div>
            <div className=''>
                <form method="POST" onSubmit={handleForm}
                    class="flex justify-center items-center w-">
                    <div class="">
                        <div class="pt-5 w-full md:w-6/12">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Descripcion">
                                Descripción
                            </label>
                            <input class="appearance-none block outline-none bg-white border-gray-500 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:shadow-[inset_0_0_0_1px_rgb(0,192,243)]"
                            onChange={e => setDescripcion(e.target.value)}
                            id="Descripcion" type="text" placeholder="Descripcion"/>
                        </div>
                        <div className="flex justify-center mt-7 space-x-8">
                            <button
                                className="ml-4 px-2 py-1 flex items-center font-myriad text-lg text-white transition rounded-lg bg-red-500 hover:bg-red-700 space-x-2"
                                onClick={() => setTrigger(false)}>
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="ml-4 px-2 py-1 flex items-center font-myriad text-lg text-white transition bg-blue-500 rounded hover:bg-blue-700 space-x-2"
                            > 
                                Confirmar
                            </button>
                        </div>
                    </div>
                </form>
                <Popup trigger={formStatus} setTrigger={setFormStatus} success={formStatus.success}>
                    <p className={`text-lg font-bold ${formStatus.success ? 'text-black' : 'text-red-400'}`}>
                        {formStatus.message}
                    </p>
                    <div className="flex justify-center mt-7 space-x-8">
                        <button
                            className="ml-4 px-2 py-1 flex items-center font-myriad text-lg text-white transition rounded-lg bg-blue-500 hover:bg-blue-700 space-x-2"
                            onClick={() => {
                                setTrigger(false);
                                setRefresh(prev => !prev);
                            }}>
                            Aceptar
                        </button>
                    </div>
                </Popup>
            </div>
        </div>
    ); 
};

export default CreateForm;