import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Form from './pages/Form';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { sdk } from './apis/api';
import Dashboard from './pages/Dashboard';
import SlackAuth from './pages/user/auth/SlackAuth';
import Teams from './pages/user/Teams';
import TeamsAuth from './pages/user/auth/TeamsAuth';

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
      <Route path="/user/teams" element={<Teams />} />
      <Route path="/user/auth/slack" element={<SlackAuth />} />
      <Route path="/user/auth/teams" element={<TeamsAuth />} />
    </Routes>
  );
};

export default App;