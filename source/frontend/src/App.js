import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';

import About from './components/GeneralPages/about';
import Events from './components/GeneralPages/events';
/* Activos imports */
import ActivosGeneralView from "./components/Activos/activos_general_view";
import CreateActivo from "./components/Activos/activos_create";
import EditActivo from "./components/Activos/activos_edit";
import ProveedoresGeneralView from "./components/Proveedores/proveedores_general_view";

/* Log */
import Bitacora from "./components/Bitácora/Bitacora";

import Tipos from './components/Tipos/tipos';
import Responsables from './components/Responsables/responsables';
/* Layout of app with the navbar */
import RootLayout from "./components/Layout/RootLayout";

/* Authentication 
import Login from './components/Authentication/login';
import withAuth from './components/Authentication/withAuth';
const AuthenticatedRootLayout = withAuth(RootLayout); */

// Routing structure of the app
const AdminApp = () => {
  return (
    <div>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route path="/" element={<Navigate to="/activos" />} />
          <Route path='/activos' element ={<ActivosGeneralView/>}></Route>
          <Route path='/activos/create' element={<CreateActivo/>}></Route>
          <Route path='/activos/edit/:id' element={<EditActivo/>}></Route>
		      <Route path='/tipos' element ={<Tipos/>}></Route>
		      <Route path='/responsables' element ={<Responsables/>}></Route>
          <Route path='/about' element ={<About/>}></Route>
          <Route path='/events' element ={<Events/>}></Route>
          <Route path='/proveedores' element ={<ProveedoresGeneralView/>}></Route>;
          <Route path='/bitacora/:IDActivo' element ={<Bitacora/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}


/**
 * This is the component in charge of handling the routing for the whole
 * web application.
 */
const App = () => {
  return (AdminApp());
}

export default App;
