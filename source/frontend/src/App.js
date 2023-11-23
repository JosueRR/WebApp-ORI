import React from "react";
import { Routes, Route, Navigate} from 'react-router-dom';

import Home from './components/GeneralPages';
import About from './components/GeneralPages/about';
import Events from './components/GeneralPages/events';
import ActivosGeneralView from "./components/Activos/activos_general_view";
import CreateActivo from "./components/Activos/activos_create";

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
          <Route path='/about' element ={<About/>}></Route>
          <Route path='/events' element ={<Events/>}></Route>
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
