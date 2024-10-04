function Navbar() {
    return (
        <>
            <img id="logo" src="INCLUIR_RUTA_DE_IMAGEN" ></img>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Preguntas</a></li>
                <li>
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle">Géneros</a>
                        <ul className="dropdown-menu">
                            <li>
                                <input type="checkbox" />Acción
                            </li>
                            <li>
                                
                                <input type="checkbox" />Comedia
                            </li>
                            <li>
                                <input type="checkbox" />Terror
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default Navbar;