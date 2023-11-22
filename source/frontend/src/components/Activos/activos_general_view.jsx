import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import SearchBar from './search_bar';

const ActivosGeneralView = () => {
    const [data, setData] = React.useState(null);

    
    /* Fetch for endpoint of tarifas */
    const handleActivos = () => {
        fetch("/backend/activos/get")
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    /* Set state */
    React.useEffect(() => {
        handleActivos()
    }, []);

    return (
        <div> 
            <h1 className=' font-myriad font-bold text-4xl mb-4'> Gestión de Activos </h1>
            <div className='flex justify-center my-5'>
                <div > <SearchBar/> </div>
                <div> Aqui va el boton de crear </div>
            </div>
            {data ? (
                <div class="overflow-auto flex items-center justify-center">
                    <table class=" w-8/12 shadow rounded-lg">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Tipo</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Estado</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Descripción</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Fijo</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Placa</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Responsable</th>
                                <th class="w-28 p-3 text-sm font-semibold tracking-wide text-center"></th>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                        {data.map((activo, index) => {
                            return (
                                <tr key={index} class="odd:bg-white even:bg-slate-50">
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="font-bold text-CelesteUCR">{activo.IDActivo}</span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {activo.Tipo}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {activo.Estado}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {activo.Descripcion}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span 
                                            className={`p-1.5 text-xs font-medium tracking-wider rounded-lg bg-opacity-50 ${
                                                activo.ActivoFijo === 1 ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'
                                              }`}>
                                            {activo.ActivoFijo === 1 ? 'Sí' : 'No'}
                                        </span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                                            {activo.Placa}
                                        </span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {activo.ResponsableNombre}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap items-center justify-center flex">
                                        <button 
                                            class="px-2 py-2 font-bold text-white transition bg-blue-400 rounded hover:bg-blue-500"
                                            onClick={'handleEdit'}
                                        >
                                            <Edit size={18} />
                                        </button>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <button 
                                                class="px-2 py-2 font-bold text-white transition bg-red-400 rounded hover:bg-red-500"
                                                onClick={'handleEdit'}
                                            >
                                                <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
               // Si aun no esta la data tira este mensaje
            ) : ("Cargando información...")}
        </div> 
    ); 
}; 

export default ActivosGeneralView;

// https://www.youtube.com/watch?v=MY6ZZIn93V8 for the search