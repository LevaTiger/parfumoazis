import { Link, NavLink } from "react-router";
import './header.css'
const Header=()=>{

    const selectedPage =()=>{
        const currentPath = window.location.href;
        console.log(`Current Path is: ${currentPath}`)
    }
    selectedPage();

    return(
        <div className="header-content">
            <div className="logo">
                <figure>
                    <img src="/assets/media/logo.jpeg" alt="Parfüm Oázis Logo" />
                    </figure>
                <h2>Parfüm Oázis</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'} 
                            className={({ isActive }) => (isActive ? 'active' : '')}>Főoldal
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/bejelentkezes'} className={({ isActive }) => (isActive ? 'active' : '')}>Bejelentkezés</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/ferfi-parfumok'} className={({ isActive }) => (isActive ? 'active' : '')}>Férfi Parfümök</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/noi-parfumok'} className={({ isActive }) => (isActive ? 'active' : '')}>Női Parfümök</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/unisex-parfumok'} className={({ isActive }) => (isActive ? 'active' : '')}>Unisex Parfümök</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/rolunk'} className={({ isActive }) => (isActive ? 'active' : '')}>Rólunk</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/kosar'} className={({ isActive }) => (isActive ? 'active' : '')}>Kosár</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;