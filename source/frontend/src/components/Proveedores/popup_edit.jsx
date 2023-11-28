import React, { useState, useEffect } from 'react';

const PopupEdit = ({ isOpen, onClose, proveedorData, onUpdated }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (proveedorData) {
      setNombre(proveedorData.Nombre);
      setEmail(proveedorData.Email);
    }
  }, [proveedorData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Construct the data object to send
    const updatedData = {
      Nombre: nombre,
      Email: email
    };

    // Send POST request to the backend
    // Assuming the ID is included in the proveedorData
    fetch(`/backend/proveedores/edit/${proveedorData.IDProveedor}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.message);
      onClose(); // Close the popup
      onUpdated(); // Refresh the data
    })
    .catch((error) => {
      console.error('There was an error updating the proveedor:', error);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      {/* Popup UI similar to PopupCreate */}
      <div className="relative top-20 mx-auto p-5 border shadow-lg rounded-md bg-white" style={{ width: '50%' }}>
        <h3 className="text-lg font-bold">Editar datos del proveedor</h3>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mt-3">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full p-2 border rounded"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <input
              type="email"
              placeholder="Correo"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Buttons */}
          <div className="flex justify-between items-center mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">Cancelar</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupEdit;
