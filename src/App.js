import './App.css';
import api from './api/axiosConfig.js'
import { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState();

  const getMovies = async () =>{
    const response = await api.get("/api/v1/movies");
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
