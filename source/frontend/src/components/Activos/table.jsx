import React from "react";
import { Edit, Trash2, AlertTriangle} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Popup from "./popup_delete";



const Table = ({data, onDeleteRefresh}) => {
    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const [activoToDelete, setActivoToDelete] = React.useState(null);
    const navigate = useNavigate();

    function handleDelete() {
        fetch(`/backend/activos/delete/${activoToDelete}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Refresh the data
            //handleActivos();
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
        // Close the popup
        setShowDeletePopup(false);
    }
    

    return (
        <div class="overflow-auto flex items-center justify-center">
                    <table class=" w-8/12 shadow rounded-lg">
                        <thead class="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Id</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Tipo</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Estado</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Descripción</th>
                                <th class="p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Fijo</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Placa</th>
                                <th class="w-24 p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Responsable</th>
                                <th class="w-28 p-3 text-sm font-semibold tracking-wide text-center pointer-events-none"></th>
                                <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center pointer-events-none"></th>
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
                                            onClick={() => navigate(`/activos/edit/${activo.IDActivo}`)}
                                        >
                                            <Edit size={18} />
                                        </button>
                                    </td>
                                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                        <button 
                                            class="px-2 py-2 font-bold text-white transition bg-red-400 rounded hover:bg-red-500"
                                            onClick={() => {
                                                setActivoToDelete(activo.IDActivo);
                                                setShowDeletePopup(true);
                                            }}
                                        >
                                                <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                        <Popup trigger={showDeletePopup} setTrigger={setShowDeletePopup}>
                            <div className="flex items-center">
                                <AlertTriangle className=' w-9 h-8 p-1 text-yellow-600 bg-yellow-400 rounded-full  mr-2' size={10} />
                                <h3 className="text-center font-myriad font-bold text-xl">
                                    ¿Estás seguro de que quieres eliminar este activo?
                                </h3>
                            </div>
                            <p className="text-sm italic text-center"> El activo será eliminado de forma permanente </p>
                            <div className="flex justify-center mt-7 space-x-8">
                                <button
                                    className="ml-4 px-2 py-1 flex items-center font-myriad text-lg transition rounded-lg bg-gray-200 hover:bg-gray-300 space-x-2"
                                    onClick={() => setShowDeletePopup(false)}>
                                    Cancelar
                                </button>
                                <button
                                    className="ml-4 px-2 py-1 flex items-center font-myriad font-bold text-lg text-yellow-700 transition bg-yellow-400 rounded hover:bg-yellow-500 space-x-2"
                                    onClick={() => {
                                        handleDelete();
                                        onDeleteRefresh(prev => !prev);
                                    }}
                                > 
                                    Confirmar
                                </button>
                            </div>
                        </Popup>
                        </tbody>
                    </table>
                </div>
    )
}

export default Table