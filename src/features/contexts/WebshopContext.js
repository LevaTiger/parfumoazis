import React, { createContext, useState } from 'react';

export const WebshopContext = createContext();

export const WebshopProvider = ({ children }) => {
    const [webshopData, setWebshopData] = useState([]);

    return (
        <WebshopContext.Provider value={{ webshopData, setWebshopData }}>
            {children}
        </WebshopContext.Provider>
    );
};

/**Context arra, hogy a ProuctDetails-ben elérhető és megjeleníthető legyen a kiválasztott termék */