import './login-page.css';
import { handleLogin } from '../../features/functions/userLoginOut';
import { LoginContext } from '../../features/contexts/LoginContext';
import { useContext, useState } from 'react';

const LoginPage = () => {
    const { loginState, setLoginState } = useContext(LoginContext);
    const [loginMessageVisible, setLoginMessageVisible] = useState(false);

    const handleLoginWithMessage = () => {
        handleLogin(setLoginState); // Perform the login logic
        setLoginMessageVisible(true); // Show the login overlay
        setTimeout(() => {
            setLoginMessageVisible(false); // Hide the login overlay after 2000ms
        }, 2000);
    };

    return (
        <div className="login-page">
            {loginMessageVisible && (
                <div className="login-overlay">
                    <p>Sikeresen bejelentkezett!</p>
                </div>
            )}
            <div className="login-container">
                {/* Login Section */}
                <div className="login-section">
                    <h3>Bejelentkezés</h3>
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">E-mail cím</label>
                            <div className="input-wrapper">
                                <i className="bi bi-envelope"></i>
                                <input type="text" name="email" id="email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Jelszó</label>
                            <div className="input-wrapper">
                                <i className="bi bi-lock"></i>
                                <input type="password" name="password" id="password" placeholder="Jelszó" />
                            </div>
                        </div>
                        <button type="button" onClick={handleLoginWithMessage}>
                            Bejelentkezés
                        </button>
                    </form>
                </div>

                {/* Registration Section */}
                <div className="register-section">
                    <h3>Regisztráció</h3>
                    <form>
                        <div className="input-group">
                            <label htmlFor="register-email">E-mail cím</label>
                            <div className="input-wrapper">
                                <i className="bi bi-envelope"></i>
                                <input type="text" name="register-email" id="register-email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div className="input-group">
                            <label htmlFor="register-password">Jelszó</label>
                            <div className="input-wrapper">
                                <i className="bi bi-lock"></i>
                                <input type="password" name="register-password" id="register-password" placeholder="Jelszó" />
                            </div>
                        </div>
                        <div className="checkbox-group">
                            <label htmlFor="adatkezeles">
                                <input type="checkbox" id="adatkezeles" />
                                Elfogadom az Adatkezelési Feltételeket
                            </label>
                        </div>
                        <div className="checkbox-group">
                            <label htmlFor="aszf">
                                <input type="checkbox" id="aszf" />
                                Elfogadom az Általános Szerződési Feltételeket
                            </label>
                        </div>
                        <button type="submit">Regisztráció</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;