import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Body from './Body';
import Chat from './Chat';

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/chat" element={<Chat/>}/>
    </Routes>
  )
};

export default AppRoutes;