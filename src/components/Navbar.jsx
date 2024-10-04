import React, { useState, useEffect,  useRef } from 'react';
import axios from 'axios';

function Navbar() {
    const [genres, setGenres] = useState([]);
    const [visible, setVisible] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        axios.request({
            method: 'POST',
            url: 'https://online-movie-database.p.rapidapi.com/v2/search-advance',
            headers: {
                'x-rapidapi-key': 'Sign Up for Key',
                'x-rapidapi-host': 'online-movie-database.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            data: {
                allGenreIds: [] 
            }
        })
            .then(response => {
                const genres = response.data.allGenreIds;
                setGenres(genres);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <nav className="navbar">
            <h1>Filtro</h1>
            <div id="list1" className="dropdown-check-list" ref={listRef}>
                <span className="anchor" onClick={handleToggle}>
                    Seleccione un género
                </span>
                <ul className="items">
                    {genres.map(genre => (
                        <li key={genre}>
                            <input type="checkbox" /> {genre.name}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
