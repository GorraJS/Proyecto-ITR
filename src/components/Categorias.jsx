import '../index.css'
import { useState } from 'react';

const Categorias = () =>{
    const arr = ["Action ",
        "Adventure ",
        "Animation ",
        "Biography ",
        "Comedy ",
        "Crime ",
        "Documentary ",
        "Drama ",
        "Family ",
        "Fantasy ",
        "Film-Noir ",
        "History ",
        "Horror ",
        "Music ",
        "Musical ",
        "Mystery ",
        "Romance ",
        "Sci-Fi ",
        "Sport ",
        "Thriller ",
        "War ",
        "Western "]
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