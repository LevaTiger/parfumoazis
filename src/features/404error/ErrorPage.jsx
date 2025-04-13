import { Link } from 'react-router';
import './error-page.css'
const ErrorPage = () =>{


    return(
        <div className=" error">
            <p><i>"Itt nincsenek parfümök {`:(`} "</i></p>
            <h1>404</h1>
            <h3>Hiba a betöltés során</h3>

            <Link to={'/'}>
                <div className="back">Vissza a Főoldalra</div>
            </Link>
        </div>
    )
}

export default ErrorPage;