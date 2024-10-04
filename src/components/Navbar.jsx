import React, { useState, useEffect } from 'react';
import '../App.css';

function Navbar() {
    let checkList = document.getElementById('list1');
    checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
        if (checkList.classList.contains('visible'))
            checkList.classList.remove('visible');
        else
            checkList.classList.add('visible');
    }

    return (
        <nav className="navbar">
            <h1>Filtro</h1>
            <div id="list1" class="dropdown-check-list" tabindex="100">
                <span class="anchor">Seleccione una categoria</span>
                <ul class="items">
                    <li><input type="checkbox" />Comedia </li>
                    <li><input type="checkbox" />Horror</li>
                    <li><input type="checkbox" />Romance </li>
                    <li><input type="checkbox" />Suspenso </li>
                    <li><input type="checkbox" />Ciencia ficción </li>
                    <li><input type="checkbox" />Drama </li>
                    <li><input type="checkbox" />Acción</li>
                    <li><input type="checkbox" />Aventura</li>
                    <li><input type="checkbox" />Animación</li>
                    <li><input type="checkbox" />Biografía</li>
                    <li><input type="checkbox" />Crimen</li>
                    <li><input type="checkbox" />Documental</li>
                    <li><input type="checkbox" />Familiar</li>
                    <li><input type="checkbox" />Fantasía</li>
                    <li><input type="checkbox" />Film-Noir</li>
                    <li><input type="checkbox" />Game-Show</li>
                    <li><input type="checkbox" />Historia</li>
                    <li><input type="checkbox" />Musical</li>
                    <li><input type="checkbox" />Música</li>
                    <li><input type="checkbox" />Misterio</li>
                    <li><input type="checkbox" />Caballeriza</li>
                    <li><input type="checkbox" />Reality-TV</li>
                    <li><input type="checkbox" />Deporte</li>
                    <li><input type="checkbox" />Programa de entrevistas</li>
                    <li><input type="checkbox" />Guerra</li>
                    <li><input type="checkbox" />Occidental</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;