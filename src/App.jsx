import React, { useState } from 'react';
import LandingPage from './LandingPage';
import SignupPage from './SignupPage';
import Dashboard from './Dashboard';

function App() {
  const [page, setPage] = useState('landing');

  return (
    <>
      {page === 'landing' && <LandingPage goToSignup={() => setPage('signup')} />}
      {page === 'signup' && <SignupPage goToDashboard={() => setPage('dashboard')} />}
      {page === 'dashboard' && <Dashboard />}
    </>
  );
}

export default App;
