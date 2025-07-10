import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';

export const Home: React.FC = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
