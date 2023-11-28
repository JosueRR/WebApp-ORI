import React, { useCallback } from 'react';
import PopupCreate from './popup_create';
import ProveedoresTable from './table';
import SearchBar from './search_bar';
import PopupEdit from './popup_edit';
import {PackagePlus} from 'lucide-react';

const ProveedoresGeneralView = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState(null);
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [currentProveedor, setCurrentProveedor] = React.useState(null);

  // Function to open edit modal with the proveedor data
  const handleEditProveedor = (proveedor) => {
    setCurrentProveedor(proveedor);
    setEditModalOpen(true);
  };
  
  // Function to toggle refresh state
  const toggleRefresh = () => {
    setRefresh(prev => !prev);
  };

  const handleProveedores = useCallback(() => {
    fetch(`/backend/proveedores/get?q=${query}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [query]);    

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  React.useEffect(() => {
    handleProveedores();
  }, [handleProveedores, refresh]);

  return (
    <div>
      <h1 className=' font-myriad font-bold text-4xl mb-4 pointer-events-none'> Proveedores </h1>
      <div className='flex justify-center my-5 space-x-24'>
        <div> <SearchBar onSearchChange={setQuery}/> </div>
        <button onClick={openModal} class="px-6 py-2 flex items-center font-myriad font-bold text-xl text-black transition bg-Celeste2UCR rounded hover:bg-CelesteUCR space-x-2">
          <span>Crear proveedor</span>
          <PackagePlus size={21}/>
        </button>
        <PopupCreate isOpen={modalOpen} onClose={closeModal} onAdded={toggleRefresh} />
        <PopupEdit isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} proveedorData={currentProveedor} onUpdated={() => setRefresh(prev => !prev)} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full leading-normal">
            {data ? (
              <ProveedoresTable onDeleteRefresh={setRefresh} data={data} onEdit={handleEditProveedor} />
            ) : (
              'Cargando información'
            )}
          
        </table>
      </div>
    </div>
  );
};

export default ProveedoresGeneralView;
