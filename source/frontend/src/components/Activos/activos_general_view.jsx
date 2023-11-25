import React, { useCallback } from 'react';
import {PackagePlus} from 'lucide-react';
import SearchBar from './search_bar';
import Table from './table';

const ActivosGeneralView = () => {
    // for refreshing the table when data is changed
    const [refresh, setRefresh] = React.useState(false);
    // search bar query
    const [query, setQuery] = React.useState('');
    // the activos
    const [data, setData] = React.useState(null);
    
    /* Fetch for endpoint of tarifas */
    const handleActivos = useCallback(() => {
        fetch(`/backend/activos/get?q=${query}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [query]);

    /* Set state */
    React.useEffect(() => {
        handleActivos()
    }, [handleActivos, refresh]);

    return (
        <div> 
            <h1 className=' font-myriad font-bold text-4xl mb-4 pointer-events-none'> Gestión de Activos </h1>
            <div className='flex justify-center my-5 space-x-24'>
                <div > <SearchBar onSearchChange={setQuery}/> </div>
                <div>
                    <a href='/activos/create'>
                        <button 
                            class="px-6 py-2 flex items-center font-myriad font-bold text-xl text-black transition bg-Celeste2UCR rounded hover:bg-CelesteUCR space-x-2"
                        >
                            <span> Crear Activo </span>
                            <PackagePlus size={21}/>
                        </button>
                    </a>
                </div>
            </div>
            {data ? (
                <Table onDeleteRefresh={setRefresh} data={data}/>
               // Si aun no esta la data tira este mensaje
            ) : ("Cargando información...")}
        </div>
    ); 
}; 

export default ActivosGeneralView;