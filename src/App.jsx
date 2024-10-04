<<<<<<< HEAD
import { useState } from 'react'
import './App.css'
import axios from 'axios';

  const options = {
    method: 'GET',
    url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
    params: {q: 'john wick'},
    headers: {
      'x-rapidapi-key': 'cb71281a97msh036212d3e3bc848p18e3e2jsn541ec39839d0',
      'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
    }
  };

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
=======
import "./App.css";
import Footer from "./components/Footer";
import Portada from "./components/Portada";
import Navbar from "./components/Navbar";

>>>>>>> REACT

function App() {
	return (
		<>
			<Navbar />
			<Portada />
			<Footer />
		</>
	);
}

export default App;
