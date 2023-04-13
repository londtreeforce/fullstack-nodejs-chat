import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Body from './Body';

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Body/>}/>
    </Routes>
  )
};

export default AppRoutes;