import { NavLink, useLocation } from "react-router";
import './header.css';
import { useContext, useState, useEffect, useRef } from "react";
import { LoginContext } from "../../../features/contexts/LoginContext";
import { handleLogout } from "../../../features/functions/userLoginOut";

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [logoutMessageVisible, setLogoutMessageVisible] = useState(false); // State for logout overlay
    const location = useLocation();
    const menuRef = useRef(null); // Reference for the menu

    // Bejelentkezési állapot tesztelése:
    const { loginState, setLoginState } = useContext(LoginContext);
    console.log(`Bejelentkezés állapota: ${loginState}`);
    // Bejelentkezési állapot tesztelése //

    const mainPage = () => {
        window.location.assign('/');
    };

    const handleLogoutWithMessage = () => {
        handleLogout(setLoginState); // Perform the logout logic
        setLogoutMessageVisible(true); // Show the logout overlay
        setTimeout(() => {
            setLogoutMessageVisible(false); // Hide the logout overlay after 2000ms
        }, 2000);
    };

    // Close menu when navigating to another page
    useEffect(() => {
        setMenuVisible(false);
    }, [location]);

    // Close menu when clicking outside its borders
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header-content">
            {logoutMessageVisible && (
                <div className="logout-overlay">
                    <p>Kijelentkezett!</p>
                </div>
            )}
            <div onClick={mainPage} className="logo">
                <figure>
                    <img src="/assets/media/logo.jpeg" alt="Parfüm Oázis Logo" />
                </figure>
                <h2>Parfüm Oázis</h2>
            </div>
            <div
                className="hamburger"
                onMouseDown={(e) => {
                    e.stopPropagation(); // Prevent the click from propagating to the document
                }}
                onClick={() => {
                    setMenuVisible(!menuVisible);
                }}
            >
                {`${!menuVisible ? '☰' : 'X'}`}
            </div>
            <nav ref={menuRef} className={menuVisible ? "open" : ""}>
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
                        <NavLink to={'/webshop?ferfi=true'} className={({ isActive }) => (isActive && location.pathname === '/webshop' && location.search === '?ferfi=true' ? 'active' : '')}>Férfi Parfümök</NavLink>
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
                    {
                        loginState === true? 
                        <li className="logout" onClick={handleLogoutWithMessage}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                            <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                            </svg>
                        </li>
                        :
                        ''
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;