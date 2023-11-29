import React from 'react'
import { Check, X } from 'lucide-react';
import Popup from './popup_create';
import { Link, useNavigate } from 'react-router-dom';

function FormEdit({ data }) {
    /* Manages popup */
    const [formStatus, setFormStatus] = React.useState(false);
    /* Fetches existing Tipo and Responsable from DB */
    const [TipoDB, setTipoDB] = React.useState(null);
    const [ResponsableDB, setResponsableDB] = React.useState(null);
    const [ProveedorDB, setProveedorDB] = React.useState(null);
    /* keeps track of data input from user */
    const [IDActivo] = React.useState(data.IDActivo);
    const [Placa, setPlaca] = React.useState(data.Placa);
    const [Descripcion, setDescripcion] = React.useState(data.Descripcion);
    const [FechaAdquisicion, setFechaAdquisicion] = React.useState(data.FechaAdquisicion.split('T')[0]);
    const [Estado, setEstado] = React.useState(data.Estado);
    const [ActivoFijo, setFijo] = React.useState(data.ActivoFijo);
    const [IDResponsable, setIDResponsable] = React.useState(data.IDResponsable);
    const [IDTipo, setIDTipo] = React.useState(data.IDTipo);
    const [IDProveedor, setIDProveedor] = React.useState(data.IDProveedor);
    const [Observaciones, setObservaciones] = React.useState(data.Observaciones);
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        let activo = {
            IDActivo: IDActivo,
            Placa: Placa,
            Descripcion: Descripcion,
            FechaAdquisicion: FechaAdquisicion,
            Estado: Estado,
            ActivoFijo: ActivoFijo,
            IDProveedor: IDProveedor,
            IDResponsable: IDResponsable,
            IDTipo: IDTipo,
            Observaciones: Observaciones
        }
        fetch(`/backend/activos/edit/guardar`, {
            method: 'POST',
            body: JSON.stringify(activo),
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
            setFormStatus({ success: true, message: 'El activo ha sido editado de forma exitosa.' });
        })
        .catch(function (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setFormStatus({ success: false, message: 'Se produjo un error y no se pudo editar el activo.' });
        });
    }

    /* Fetch for endpoint of TIPOS */
    const getTipos = () => {
        fetch(`/backend/activos/tipo/all`)
            .then((res) => res.json())
            .then((TipoDB) => {setTipoDB(TipoDB)});
    }

    /* Fetch for endpoint of TIPOS */
    const getResponsables = () => {
        fetch(`/backend/activos/responsable/all`)
            .then((res) => res.json())
            .then((ResponsableDB) => { setResponsableDB(ResponsableDB) });
    }

    /* Fetch for endpoint of TIPOS */
    const getProveedores = () => {
        fetch(`/backend/activos/proveedor/all`)
            .then((res) => res.json())
            .then((ProveedorDB) => { setProveedorDB(ProveedorDB) });
    }

    /* Set state */
    React.useEffect(() => {
        getResponsables()
        getTipos()
        getProveedores()
    }, []);

    const handleBitacoraClick = () => {
        if (IDActivo) {
          navigate(`/bitacora/${IDActivo}`);
        }
      };
    
    return (
        <div>
            <div className=''>
                <form method="POST" onSubmit={handleForm}
                    class="pt-6 mb-8 w-auto flex items-center justify-center">
                    <div class="bg-white shadow border-b-2 border-gray-200 rounded-lg grid grid-cols-2 p-4 gap-x-12">

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="IDTipo">
                                    Id
                                </label>
                                <input class="appearance-none italic text-center w-full block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="IDTipo" type="text" placeholder={IDActivo} disabled/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Placa">
                                    Placa
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={e => setPlaca(e.target.value)}
                                id="Placa" type="text" placeholder={Placa}/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="FechaAdquisicion">
                                    Fecha de adquisición
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={e => setFechaAdquisicion(e.target.value)}
                                id="FechaAdquisicion" type="text" placeholder={FechaAdquisicion}/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Estado">
                                    Estado
                                </label>
                                <input class="appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={e => setEstado(e.target.value)}
                                id="Estado" type="text" placeholder={Estado}/>
                            </div>
                        </div>

                        <div class="col-span-2 flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Descripcion">
                                    Descripción
                                </label>
                                <input class="appearance-none w-96 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={e => setDescripcion(e.target.value)}
                                id="Descripcion" type="text" placeholder={Descripcion}/>
                            </div>
                        </div>

                        <div class="col-span-2 flex justify-center w-full h-auto">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="Observaciones">
                                    Observaciones
                                </label>
                                <input class="appearance-none w-96 block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                onChange={e => setObservaciones(e.target.value)}
                                id="Observaciones" type="text" placeholder={Observaciones}/>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="IDProveedor">
                                Proveedor
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full text-center bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={IDProveedor}
                                    onChange={e => setIDProveedor(e.target.value)}
                                    id="IDProveedor">
                                        { ProveedorDB ? (
                                            ProveedorDB.map(proveedor => (
                                                <option value={proveedor.IDProveedor}> {proveedor.Nombre} </option>
                                            ))
                                        ) : (<option disabled> Cargando... </option>) }
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="IDResponsable">
                                    Responsable
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full text-center bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={IDResponsable}
                                    onChange={e => setIDResponsable(e.target.value)}
                                    id="IDResponsable">
                                        { ResponsableDB ? (
                                            ResponsableDB.map(responsable => (
                                                <option value={responsable.IDResponsable}> {responsable.Nombre} </option>
                                            ))
                                        ) : (<option disabled> Cargando... </option>) }
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="ActivoFijo">
                                    ¿Es fijo?
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-36 text-center bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                                    value={ActivoFijo}
                                    onChange={e => setFijo(e.target.value)}
                                    id="ActivoFijo">
                                        <option value={1} >Sí</option>
                                        <option value={0} >No</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-center w-full h-auto items-center">
                            <div class="mb-6">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="IDTipo">
                                    Tipo
                                </label>
                                <div class="relative">
                                    <select class="block appearance-none w-full text-center bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    value={IDTipo}
                                    onChange={e => setIDTipo(e.target.value)}
                                    id="IDTipo">
                                        { TipoDB ? (
                                            TipoDB.map(tipo => (
                                                <option value={tipo.IDTipo}> {tipo.Descripcion} </option>
                                            ))
                                        ) : (<option disabled> Cargando... </option>) }
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-span-2 flex justify-center w-full h-auto">
                            <div class="mb-6 flex-col items-center">
                                <div class="relative">
                                    <a href={`/bitacora/${data.IDActivo}`}> 
                                        <button 
                                            class="ml-4 px-2 py-1 flex items-center font-myriad font-bold text-lg text-white transition bg-blue-500 rounded hover:bg-blue-600 space-x-2"
                                            type="button"
                                        >
                                            <span> Bitácora </span>
                                        </button>
                                    </a>   
                                </div>
                            </div>
                        </div>

                        <div class="col-span-2 flex justify-center w-full h-auto mb-5">
                            <button 
                                type="submit"
                                class=" ml-4 px-2 py-1 flex items-center font-myriad font-bold text-lg text-green-800 transition bg-green-300 rounded hover:bg-green-400 space-x-2"
                            >
                                <Check size={21}/>
                                <span> Guardar cambios </span>
                            </button>
                            
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
                        <Popup trigger={formStatus} setTrigger={setFormStatus} success={formStatus.success}>
                            <p className={`text-lg font-bold ${formStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                                {formStatus.message}
                            </p>
                        </Popup>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormEdit