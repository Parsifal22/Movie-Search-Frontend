import './App.css';
import api from './api/axiosConfig.js'
import { useState, useEffect } from 'react';
import Layout from './components/Layout.js';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home.js';
import Header from './components/header/Header.js';
import Trailer from './components/trailer/Trailer.js';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () =>{

    try{

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }


  }

  useEffect(() => {
    getMovies();
  }, [])

  return (   
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies} />} ></Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
