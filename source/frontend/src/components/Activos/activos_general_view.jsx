import React from 'react';
import {PackagePlus} from 'lucide-react';
import SearchBar from './search_bar';
import Table from './table';

const ActivosGeneralView = () => {
    const [query, setQuery] = React.useState('');
    const [data, setData] = React.useState(null);
    
    /* Fetch for endpoint of tarifas */
    const handleActivos = () => {
        fetch(`/backend/activos/get?q=${query}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    /* Set state */
    React.useEffect(() => {
        handleActivos()
    }, [query]);

    return (
        <div> 
            <h1 className=' font-myriad font-bold text-4xl mb-4 pointer-events-none'> Gestión de Activos </h1>
            <div className='flex justify-center my-5 space-x-24'>
                <div > <SearchBar onSearchChange={setQuery}/> </div>
                <div>
                    <button 
                        class="px-6 py-2 flex items-center font-myriad font-bold text-xl text-black transition bg-Celeste2UCR rounded hover:bg-CelesteUCR space-x-2"
                        onClick={'handleEdit'}
                    >
                        <span> Crear Activo </span>
                        <PackagePlus size={21}/>
                    </button>
                </div>
            </div>
            {data ? (
                <Table data={data}/>
               // Si aun no esta la data tira este mensaje
            ) : ("Cargando información...")}
        </div>
    ); 
}; 

export default ActivosGeneralView;

// https://www.youtube.com/watch?v=MY6ZZIn93V8 for the search