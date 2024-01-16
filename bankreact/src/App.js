import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/Login';
import TransactionComponent from './components/Transaction';
import Menu from './components/Menu';
import ListAccountComponent from './components/ListAccountComponent';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/transaction" element={<TransactionComponent />} />
        <Route path="/list" element={<ListAccountComponent />} />
      </Routes>
    </Router>
  );
}

export default App;