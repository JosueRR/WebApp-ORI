import React from 'react'
import { useParams } from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';
import FormEdit from './edit_form';


function EditActivo() {
  // the specific activo
  let { id } = useParams();
  const [data, setData] = React.useState(null);

  /* Fetch for endpoint of tarifas */
  const handleActivos = React.useCallback(() => {
    fetch(`/backend/activos/get/${id}`)
      .then((res) => res.json())
      .then((data) => {setData(data)} );
  }, [id]);

  /* Set state */
  React.useEffect(() => {
    handleActivos()
  }, [handleActivos]);

  return (
    <div>
      <div className='flex space-x-8 items-center mb-4'>
          <a href='/activos'>
              <button 
                  class="px-2 py-1 flex items-center font-myriad font-bold text-lg text-black transition bg-Celeste2UCR rounded hover:bg-CelesteUCR space-x-2"
              >
                  <ArrowLeft size={21}/>
                  <span> Ir atrás </span>
              </button>
          </a>
        <h1 className=' font-myriad font-bold text-4xl pointer-events-none justify-center items-center'> Editar Activo </h1>
      </div>
      {data ? (
        <FormEdit data={data[0]} />
        ) : ("Cargando información...")
      }
  </div> 
  )
}

export default EditActivo