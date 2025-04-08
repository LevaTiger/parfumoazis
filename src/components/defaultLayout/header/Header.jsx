import { NavLink, useLocation } from "react-router";
import './header.css'
import { useState } from "react";
const Header=()=>{

    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation();


    return(
        <div className="header-content">
            <div className="logo">
                <figure>
                    <img src="/assets/media/logo.jpeg" alt="Parfüm Oázis Logo" />
                    </figure>
                <h2>Parfüm Oázis</h2>
            </div>
            <div className="hamburger" onClick={()=> setMenuVisible(!menuVisible)}>
                {`${!menuVisible? '☰' : 'X'}`}
            </div>
            <nav className={menuVisible? "open" : ""}>
                <ul>
                    <li>
                        <NavLink to={'/'} 
                            className={({ isActive }) => (isActive ? 'active' : '')}>Főoldal
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={'/webshop'} className={({ isActive }) => (isActive && location.pathname === '/webshop' && location.search === '' ? 'active' : '')}>Webshop</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={'/webshop?ferfi=true'} className={({ isActive }) => (isActive && location.pathname=== '/webshop' && location.search === '?ferfi=true' ? 'active' : '')}>Férfi Parfümök</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/webshop?noi=true'} className={({ isActive }) => (isActive && location.pathname === '/webshop' && location.search === '?noi=true' ? 'active' : '')}>Női Parfümök</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/webshop?unisex=true'} className={({ isActive }) => (isActive && location.pathname === '/webshop' && location.search === '?unisex=true' ? 'active' : '')}>Unisex Parfümök</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/rolunk'} className={({ isActive }) => (isActive ? 'active' : '')}>Rólunk</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/kosar'} className={({ isActive }) => (isActive ? 'active' : '')}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag active" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/bejelentkezes'} className={({ isActive }) => (isActive ? 'active' : '')}>
                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;