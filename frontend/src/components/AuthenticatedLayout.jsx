// frontend/src/components/AuthenticatedLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthenticatedLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* This layout intentionally does NOT include Header or Footer */}
      <Outlet /> {/* This renders the child route (Dashboard) */}
    </div>
  );
};

export default AuthenticatedLayout;