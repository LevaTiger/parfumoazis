import { useEffect, useState } from 'react';
import './cart.css'; // CSS fájl a stílusokhoz

const Cart = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Termék 1',
            price: 1000,
            quantity: 1,
            image: 'https://picsum.photos/100',
        },
        {
            id: 2,
            name: 'Termék 2',
            price: 1500,
            quantity: 1,
            image: 'https://picsum.photos/100',
        },
        // További termékek...
    ]);

    const [cartItems, setCartItems] = useState([]);

    useEffect(()=>{
        const storedItems = localStorage.getItem('cartItems');
        if (storedItems) {
            setCartItems(JSON.parse(storedItems));
        }
    }, []);

    const handleQuantityChange = (id, newQuantity) => {
        const quantity = parseInt(newQuantity, 10); // Konvertáljuk számra
        if (isNaN(quantity) || quantity < 1) return; // Ha nem szám vagy kisebb mint 1, ne frissítsük

        const updatedItems = cartItems.map(product => 
            product.Azonosító === id ? { ...product, quantity } : product
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleRemoveProduct = (id) => {
        setProducts(cartItems.filter(product => product.id !== id));
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
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => handleQuantityChange(product.Azonosító, parseInt(e.target.value))}
                                />
                            </td>
                            <td>{product.Ár * product.quantity} Ft</td>
                            <td>
                                <button onClick={() => handleRemoveProduct(product.id)}>Törlés</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;
