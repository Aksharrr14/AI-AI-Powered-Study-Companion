import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />}/>
        </Route>
        <Route path="/userprofile" element={<Layout />}>
        <Route index element={<UserProfile />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;