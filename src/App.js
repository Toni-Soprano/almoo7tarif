// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/navbar';
import LoginForm from './auth/login';
import SignupForm from './auth/signup'; // Adjust the import path based on your actual file structure

const App = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
