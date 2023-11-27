import React, { useCallback } from 'react';
import {PackagePlus} from 'lucide-react';
import Table from './table';


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
            {data ? (
                <div>
                    <Table setRefresh={setRefresh} data={data}/>
                </div>
            ) : ("Cargando información...")}
        </div>
    ); 
}; 

export default Responsables;



