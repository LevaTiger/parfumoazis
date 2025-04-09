import { useState } from 'react';
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

    const handleQuantityChange = (id, newQuantity) => {
        setProducts(products.map(product => 
            product.id === id ? { ...product, quantity: newQuantity } : product
        ));
    };

    const handleRemoveProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
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
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.name} />
                                {product.name}
                            </td>
                            <td>{product.price} Ft</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={product.quantity}
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                />
                            </td>
                            <td>{product.price * product.quantity} Ft</td>
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
