import { useEffect, useState } from 'react';
import './cart.css'; // CSS fájl a stílusokhoz
import { handleTouch } from '../../features/functions/handleTouch';

const Cart = () => {
    const [products] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            try {
                const parsedItems = JSON.parse(storedItems);
                // Frissítjük a mennyiségeket a termékek alapértelmezett értékeivel
                const updatedItems = parsedItems.map(item => {
                    const product = products.find(p => p.id === item.Azonosító);
                    return {
                        ...item,
                        quantity: product ? item.Mennyiség : 1 // Ha a termék nem található, alapértelmezett mennyiség
                    };
                });
                setCartItems(updatedItems);
            } catch (error) {
                console.error("Hiba a JSON elemzésében:", error);
            }
        }
    }, [products]);


    const handleQuantityChange = (azonosito, newQuantity) => {
        const quantity = parseInt(newQuantity, 10); // Konvertáljuk számra
        if (isNaN(quantity) || quantity < 1) return; // Ha nem szám vagy kisebb mint 1, ne frissítsük
    
        const updatedItems = cartItems.map(product => 
            product.Azonosító === azonosito ? { ...product, Mennyiség: quantity } : product
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };
    
    const handleRemoveProduct = (azonosito) => {
        const updatedItems = cartItems.filter(product => product.Azonosító !== azonosito);
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems)); // Frissítjük a localStorage-t is
    };
    

    return (
        <div className="cart-container">
            <h1>Kosár</h1>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Termék</th>
                        <th>Ár</th>
                        <th>Mennyiség</th>
                        <th>Részösszeg</th>
                        <th>Törlés</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((product, index) => (
                        <tr key={index}>
                            <td>
                                <div className="product-name-img">
                                    <img src={product.Kép} alt={product.Név} />
                                    <p><b>{product.Név}</b></p>
                                </div>
                            </td>
                            <td>{product.Ár} Ft</td>
                            <td className='value-td'>
                                <div className="value-td-div">
                                    <button 
                                        onTouchStart={handleTouch}
                                        className='value-add-btn'
                                        onClick={() => handleQuantityChange(product.Azonosító, product.Mennyiség + 1)}    
                                    >+</button>
                                    <input
                                        type="number"
                                        value={product.Mennyiség}
                                        min={1}
                                        onChange={(e) => handleQuantityChange(product.Azonosító, parseInt(e.target.value))}
                                    />
                                    <button 
                                        onTouchStart={handleTouch}
                                        className='value-subtract-btn'
                                        onClick={() => handleQuantityChange(product.Azonosító, product.Mennyiség - 1)}    
                                    >-</button>
                                </div>
                            </td>
                            <td>{product.Ár * product.Mennyiség} Ft</td>
                            <td>
                                <button onClick={() => handleRemoveProduct(product.Azonosító)}>Törlés</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
