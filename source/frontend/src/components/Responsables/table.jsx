import React from "react";
import { Edit, Trash2, AlertTriangle} from 'lucide-react';
import Popup from "./popup";
import EditForm from "./edit_form";

const Table = ({data, setRefresh}) => {
    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const [responsableToDelete, setResponsableToDelete] = React.useState(null);
    const [showEditPopup, setShowEditPopup] = React.useState(false);
    const [id, setId] = React.useState(null);
    const [nombre, setNombre] = React.useState(null);

    function handleDelete() {
        fetch(`/backend/responsables/delete/${responsableToDelete}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        });
        setShowDeletePopup(false);
    }
    
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
                                    onClick={() => {
                                        setId(responsable.IDResponsable);
                                        setNombre(responsable.Nombre);
                                        setShowEditPopup(true);
                                    }}
                                >
                                    <Edit size={18} />
                                </button>
                            </td>
                            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">
                                <button 
                                    class="px-2 py-2 font-bold text-white transition bg-red-500 rounded hover:bg-red-700"
                                    onClick={() => {
                                        setResponsableToDelete(responsable.IDResponsable);
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
                        <AlertTriangle className=' w-9 h-8 p-1 text-white bg-yellow-500 rounded-full  mr-2' size={10} />
                        <h3 className="text-center font-myriad font-bold text-xl">
                            ¿Estás seguro de que quieres eliminar este responsable?
                        </h3>
                    </div>
                    <p className="text-sm italic text-center"> El responsable será eliminado de forma permanente </p>
                    <p className="text-sm italic text-center"> (No se podrá eliminar un responsable si este se encuentra asignado a un activo) </p>
                    <div className="flex justify-center mt-7 space-x-8">
                        <button
                            className="ml-4 px-2 py-1 flex items-center font-myriad text-lg text-white transition rounded-lg bg-red-500 hover:bg-red-700 space-x-2"
                            onClick={() => setShowDeletePopup(false)}>
                            Cancelar
                        </button>
                        <button
                            className="ml-4 px-2 py-1 flex items-center font-myriad text-lg text-white transition bg-blue-500 rounded hover:bg-blue-700 space-x-2"
                            onClick={() => {
                                handleDelete();
                                setRefresh(prev => !prev);
                            }}
                        > 
                            Confirmar
                        </button>
                    </div>
                </Popup>
                <Popup trigger={showEditPopup} setTrigger={setShowEditPopup}>
                    <div className="flex items-center">
                        <h3 className="ms-8 me-8 text-center font-myriad font-bold text-xl">
                            Editando nombre del responsable {id}
                        </h3>
                    </div>
                    <EditForm trigger={showEditPopup} setTrigger={setShowEditPopup} setRefresh={setRefresh} id={id} nombre={nombre}/>
                </Popup>
                </tbody>
            </table>
        </div>
    )
}

export default Table