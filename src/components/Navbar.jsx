import './Navbar.css';

function Navbar() {
    return (
        <>
            <img id="logo" src="INCLUIR_RUTA_DE_IMAGEN" ></img>
            <ul>
                <li><a href="#">Home</a></li>
                <li>
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle">Genders</a>
                        <ul className="dropdown-menu">
                            <li>
                                <input type="checkbox" />Action
                            </li>
                            <li>
                                <input type="checkbox" />Comedy
                            </li>
                            <li>
                                <input type="checkbox" />Horror
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Questions</a></li>
                <li><a href="#">Front page</a></li>
                <li><a href="#">Trailers</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Favorites</a></li>
            </ul>
        </>
    );
}

export default Navbar;