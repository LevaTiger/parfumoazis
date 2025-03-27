import { Link } from 'react-router';
import './footer.css'
const Footer =()=>{

    return(
        <footer>
            <div>
                <div className='logo-footer'>
                    <h4>Parfüm Oázis</h4>
                    <figure>
                        <img src="/assets/media/logo.jpeg" alt="Parfüm Oázis Logo" />
                    </figure>
                </div>
                <ul>
                    <li>
                        <Link>Valahova</Link>
                    </li>
                    <li>
                        <Link>Valahova</Link>
                    </li>
                    <li>
                        <Link>Valahova</Link>
                    </li>
                    <li>
                        <Link>Valahova</Link>
                    </li>
                    <li>
                        <Link>Valahova</Link>
                    </li>                    
                </ul>
            </div>
                <ul>
                    <li>|_FB_|</li>
                    <li>|_IG_|</li>
                    <li>|_TIKTOK_|</li>
                    <li>|_X_|</li>
                </ul>
        </footer>
    )
}

export default Footer;