import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Form from './pages/Form';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ThriveStackSDK from "@thrivestack/javascript-sdk";

const App = () => {
  useEffect(() => {
    const sdk = ThriveStackSDK.getInstance(
      "K1Qhjt5Ia",  // ThriveStack productId
      "mzNCeIeua",  // ThriveStack environmentId
      "https://api.dev.app.thrivestack.ai/v1/GetTSDefaultManagementToken", // URL of the endpoint
      true // TEST MODE: Enable this in development
    );
  }, []);

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