import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7111/api/Student/');
        console.log(response);
        setStudents(response.data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreate = async (newStudent) => {
    try {
      const response = await axios.post('https://localhost:7111/api/Student/', newStudent);
      console.log(response);
      setStudents([...students, response.data]);
    } catch (error) {
      console.log('Error creating student', error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7111/api/Student/${id}`);
      setStudents(students.filter((student) => student.id != id));
    } catch (error) {
      console.log('Error deleting student', error);
    }
  };

  return (
    <div className="">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/home" element={<Home students={students} loading={loading} handleDelete={handleDelete} />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create handleCreate={handleCreate} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
