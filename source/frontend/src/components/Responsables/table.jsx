import React from "react";
import { Edit, Trash2, AlertTriangle} from 'lucide-react';

const Table = ({data, setRefresh}) => {
    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const [tipoToDelete, setTipoToDelete] = React.useState(null);
    const [showEditPopup, setShowEditPopup] = React.useState(false);
    const [id, setId] = React.useState(null);
    const [descripcion, setDescripcion] = React.useState(null);
    
    return (
        <div class="overflow-auto flex items-center justify-center">
            <table class=" w-8/12 shadow rounded-lg">
                <thead class="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Id</th>
                        <th class="p-3 text-sm font-semibold tracking-wide text-left pointer-events-none">Nombre</th>
                        <th class="w-28 p-3 text-sm font-semibold tracking-wide text-center pointer-events-none"></th>
                        <th class="w-20 p-3 text-sm font-semibold tracking-wide text-center pointer-events-none"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                {data.map((responsable, index) => {
                    return (
                        <tr key={index} class="odd:bg-white even:bg-slate-50">
                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <span class="font-bold text-CelesteUCR">{responsable.IDResponsable}</span>
                            </td>
                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                {responsable.Nombre}
                            </td>
                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap items-center justify-center flex">
                                <button 
                                    class="px-2 py-2 font-bold text-white transition bg-blue-500 rounded hover:bg-blue-700"
                                >
                                    <Edit size={18} />
                                </button>
                            </td>
                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button 
                                    class="px-2 py-2 font-bold text-white transition bg-red-500 rounded hover:bg-red-700"
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
    )
}

export default Table