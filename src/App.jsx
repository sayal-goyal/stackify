import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { sdk } from './apis/api';

const App = () => {

  useEffect(async () => {
    const { managementToken } = await sdk.getThriveStackToken("STACKIFY's Auth Token");
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default App;