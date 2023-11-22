import React from 'react';
import { Edit, Delete } from 'lucide-react';

const ActivosGeneralView = () => {
    const [data, setData] = React.useState(null);

    /* Fetch for endpoint of tarifas */
    const handleTarifas = () => {
        fetch("/backend/activos/get")
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    /* Set state */
    React.useEffect(() => {
        handleTarifas()
    }, []);

    return ( 
        <div> 
            <h1 className=' font-myriad font-bold text-4xl mb-4'> Activos </h1>

            {data ? (
                <div class="overflow-auto flex items-center justify-center">
                    <table class="w-auto shadow rounded-lg">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left">Descripción</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Placa</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left">Responsable</th>
                                <th class="w-28 p-3 text-sm font-semibold tracking-wide text-center"></th>
                                <th class="w-28 p-3 text-sm font-semibold tracking-wide text-center"></th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                        {data.map((activo, index) => {
                            return (
                                <tr key={index} class="odd:bg-white even:bg-slate-50">
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <a href="#" class="font-bold text-blue-500 hover:underline">{activo.IDActivo}</a>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {activo.TipoDescripcion}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                                            {activo.Placa}
                                        </span>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        {activo.ResponsableNombre}
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap items-center justify-center flex">
                                        <button 
                                            class="px-2 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                                            onClick={'handleEdit'}
                                        >
                                            <Edit size={18} />
                                        </button>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <button 
                                                class="px-2 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
                                                onClick={'handleEdit'}
                                            >
                                                <Delete size={18} />
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