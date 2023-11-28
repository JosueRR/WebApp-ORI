import React, { useCallback } from 'react';
import {PackagePlus} from 'lucide-react';
import SearchBar from './search_bar';
import Table from './table';
import Popup from "./popup";
import CreateForm from './create_form';

const Responsables = () => {
    const [showCreatePopup, setShowCreatePopup] = React.useState(false);
    const [refresh, setRefresh] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [data, setData] = React.useState(null);
    
    /* Fetch for endpoint of responsables */
    const handleResponsables = useCallback(() => {
        fetch(`/backend/responsables/get?q=${query}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [query]);

    /* Set state */
    React.useEffect(() => {
        handleResponsables()
    }, [handleResponsables, refresh]);

    return (
        <div> 
            <h1 className=' font-myriad font-bold text-4xl mb-4 pointer-events-none'> Responsables </h1>
            <div className='flex justify-center my-5 space-x-24'>
                <div > <SearchBar onSearchChange={setQuery}/> </div>
                <div>
                    <button 
                        class="px-6 py-2 flex items-center font-myriad font-bold text-xl text-black transition 
                        bg-Celeste2UCR rounded hover:bg-CelesteUCR space-x-2"
                        onClick={() => {
                            setShowCreatePopup(true);
                        }}
                    >
                        <span>Crear nuevo responsable</span>
                        <PackagePlus size={21}/>
                    </button>
                </div>
            </div>
            {data ? (
                <div>
                    <Table setRefresh={setRefresh} data={data}/>
                    <Popup trigger={showCreatePopup} setTrigger={setShowCreatePopup}>
                        <div className="flex items-center">
                            <h3 className="text-center font-myriad font-bold text-xl">
                                Agregue un nombre para el nuevo responsable de activo
                            </h3>
                        </div>
                        <CreateForm trigger={showCreatePopup} setTrigger={setShowCreatePopup} setRefresh={setRefresh}/>
                    </Popup>
                </div>
            ) : ("Cargando información...")}
        </div>
    ); 
}; 

export default Responsables;



