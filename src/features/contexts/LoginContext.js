import React, { createContext, useEffect, useState } from 'react';


export const LoginContext = createContext(false);


export const LoginProvider = ({ children }) => {
    const [loginState, setLoginState] = useState(()=>{
        const savedLoginState = localStorage.getItem('loginState');
        return savedLoginState === 'true';
    });

    useEffect(()=>{
        localStorage.setItem('loginState', loginState)
    }, [loginState])

    return (
        <LoginContext.Provider value={{ loginState, setLoginState }}>
            {children}
        </LoginContext.Provider>
    );
};