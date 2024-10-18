import '../index.css'
import { useState } from 'react';

const Categorias = () =>{
    const arr = ["Action (Acción)",
        "Adventure (Aventura)",
        "Animation (Animación)",
        "Biography (Biografía)",
        "Comedy (Comedia)",
        "Crime (Crimen)",
        "Documentary (Documental)",
        "Drama (Drama)",
        "Family (Familiar)",
        "Fantasy (Fantasía)",
        "Film-Noir (Cine negro)",
        "History (Historia)",
        "Horror (Terror)",
        "Music (Música)",
        "Musical (Musical)",
        "Mystery (Misterio)",
        "Romance (Romance)",
        "Sci-Fi (Ciencia ficción)",
        "Sport (Deportes)",
        "Thriller (Suspenso)",
        "War (Guerra)",
        "Western (Western)"]
    return(<>
        <h1>Categorias</h1>
        <button></button>
        <select>
            {arr.map((cat) => (
                <option>{cat}</option>
            ))}
        </select>
    </>)
}

export default Categorias;