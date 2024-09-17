import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to /signup */}
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;
