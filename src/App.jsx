import "./App.css";
import { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Portada from "./components/Portada";
import Categorias from "./components/Categorias";

function App() {
	
	return (
		<>
			<Categorias/>
		</>
	);
}

export default App;
