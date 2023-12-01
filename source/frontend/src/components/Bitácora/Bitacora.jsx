import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TableComponent from './log_table';

const Bitacora = ({}) => {
  const { IDActivo } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    // Esto trae la bitácora del activo según su ID, está en bitacora.js
    fetch(`/backend/bitacora/bitacora/${IDActivo}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [IDActivo]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bitácora del Activo {data.nombreActivo}</h1>
      <TableComponent data={data} />
    </div>
  );
};

export default Bitacora;