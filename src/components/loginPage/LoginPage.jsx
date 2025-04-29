import './login-page.css'
import { handleLogin } from '../../features/functions/userLoginOut'
import { LoginContext } from '../../features/contexts/LoginContext';
import { useContext } from 'react';

const LoginPage = ()=>{

    const { loginState, setLoginState } = useContext(LoginContext);
    
    return(

        <div className='bg'>
            <div className="blur-bg">
                <div className='login-body'>
                    <form>
                    <h3>Jelentkezzen be!</h3>
                        <div className="user-input">
                            <label className='input-label' htmlFor="email">E-mail cím: </label>
                            <input  type="text" name="email" id="email" placeholder='E-mail' />
                
                        </div>
                        <div className="user-input">
                            <label className='input-label' htmlFor="password">Jelszó: </label>
                            <input type="password" name="password" id="password" placeholder='Jelszó'/>
                
                        </div>
                        <button onClick={()=>handleLogin(setLoginState)}>Bejelentkezés</button>
                    </form>
                    <h5>...vagy regisztráljon!</h5>
                    <form action="">
                    <h3>Regisztráljon!</h3>
                        <div className="user-input">
                            <label className='input-label' htmlFor="register-email">E-mail cím: </label>
                            <input  type="text" name="register-email" id="register-email" placeholder='E-mail' />
                
                        </div>
                        <div className="user-input">
                            <label className='input-label' htmlFor="register-password">Jelszó: </label>
                            <input type="password" name="register-password" id="register-password" placeholder='Jelszó'/>
                
                        </div>
                        <div>
                            <label htmlFor="adatkezeles">Elfogadom az Adatkezelési Feltételeket</label>
                            <input type='checkbox' id='adatkezeles' />
                            
                        </div>
                        <div>
                        <label htmlFor="aszf">Elfogadom az Általános Szerződési Feltételeket</label>
                        <input type='checkbox' id='aszf' />
                        </div>
                        <button>Regisztrálás</button>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default LoginPage;