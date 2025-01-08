import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Sign from './pages/Sign';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign" />} />
      <Route path="/sign" element={<Sign />} />
      <Route path="/form" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;