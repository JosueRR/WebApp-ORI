import React, { useState } from 'react';
import { Edit, Trash2, AlertTriangle } from 'lucide-react';
// Assuming you have a Popup component to use
import Popup from './popup_delete';

const ProveedoresTable = ({ data, onDeleteRefresh, onEdit }) => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [proveedorToDelete, setProveedorToDelete] = useState(null);

  const handleDelete = (id) => {
    fetch(`/backend/proveedores/delete/${proveedorToDelete}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        onDeleteRefresh(prev => !prev);
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      });
      setShowDeletePopup(false);
  };

  return (
    <>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              ID
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Nombre
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Correo
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Opciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((proveedor, index) => (
            <tr key={index} className="odd:bg-white even:bg-slate-50">
              <td className="p-3 text-sm text-gray-700">{proveedor.IDProveedor}</td>
              <td className="p-3 text-sm text-gray-700">{proveedor.Nombre}</td>
              <td className="p-3 text-sm text-gray-700">{proveedor.Email}</td>
              <td className="p-3 text-sm text-gray-700 flex justify-around">
                <button className="px-2 py-2 text-white bg-blue-400 rounded hover:bg-blue-500"
                        onClick={() => {
                            onEdit(proveedor)
                        }}>
                  <Edit size={18} />
                </button>
                <button className="px-2 py-2 text-white bg-red-400 rounded hover:bg-red-500 ml-2"
                        onClick={() =>{
                            setProveedorToDelete(proveedor.IDProveedor);
                            setShowDeletePopup(true);
                        }}>
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
          <Popup trigger={showDeletePopup} setTrigger={setShowDeletePopup}>
            <div className="flex items-center">
            <AlertTriangle className=' w-9 h-8 p-1 text-yellow-600 bg-yellow-400 rounded-full  mr-2' size={10} />
            <h3 className="text-center font-myriad font-bold text-xl">
                ¿Estás seguro de que quieres eliminar este proveedor?
            </h3>
            </div>
            <p className="text-sm italic text-center">El activo será eliminado de forma permanente</p>
            <div className="flex justify-center mt-7 space-x-8">
            <button
                className="ml-4 px-2 py-1 flex items-center font-myriad text-lg transition rounded-lg bg-gray-200 hover:bg-gray-300 space-x-2"
                onClick={() => setShowDeletePopup(false)}>
                Cancelar
            </button>
            <button
                className="ml-4 px-2 py-1 flex items-center font-myriad font-bold text-lg text-yellow-700 transition bg-yellow-400 rounded hover:bg-yellow-500 space-x-2"
                onClick={() => {
                handleDelete(proveedorToDelete);
                setShowDeletePopup(false);
                }}
            > 
                Confirmar
            </button>
            </div>
        </Popup>
        </tbody>
      </table>        
    </>
  );
};

export default ProveedoresTable;
