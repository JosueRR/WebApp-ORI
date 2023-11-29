import React, { useEffect, useState } from 'react';
import TableComponent from './log_table';

const Bitacora = ({ match }) => {
  const [data, setData] = useState({ nombreActivo: '', bitacora: [] });
  const { params } = match;
  const { IDActivo } = params;

  useEffect(() => {
    // Hacer la solicitud fetch al backend cuando el componente se monta
    fetch('/api/bitacora/${IDActivo}')
      .then(response => response.json())
      .then(resultData => setData(resultData))
      .catch(error => console.error('Error al obtener datos:', error));
  }, [IDActivo]);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Bitácora del Activo {data.nombreActivo}</h1>
        <TableComponent data={data} />
      </div>
    );
  };

export default Bitacora;