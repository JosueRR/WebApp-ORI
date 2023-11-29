import React from "react";

const Log_Table = ({ data }) => {
  return (
    <div className="overflow-auto">
      <table className="w-full shadow rounded-lg">
        <thead className="bg-gray-100 border-b-2 border-gray-300">
          <tr>
            <th className="w-1/4 p-3 text-sm font-semibold text-left">Fecha del cambio</th>
            <th className="p-3 text-sm font-semibold text-left">Estado</th>
            <th className="w-1/4 p-3 text-sm font-semibold text-left">Usuario</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((Fila, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="p-3 text-sm text-gray-700">{Fila.fechaCambio}</td>
              <td className="p-3 text-sm text-gray-700">{Fila.estado}</td>
              <td className="p-3 text-sm text-gray-700">{Fila.usuario}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3" className="p-3 text-sm text-gray-700">
              No hay datos disponibles.
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Log_Table;