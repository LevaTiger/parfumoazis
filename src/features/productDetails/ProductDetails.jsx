import { useEffect, useState } from "react";
import { useParams } from "react-router";
import './product-details.css';

const ProductDetails = () => {
    const [webshopData, setWebshopData] = useState([]);
    const { productId } = useParams();
    const [overlayVisible, setOverlayVisible] = useState(false); // State for overlay visibility
    const [cartItems, setCartItems] = useState([]); // State for cart items

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/assets/json/csvjson.json');
            const webshopItems = await response.json();
            setWebshopData(webshopItems);
        };
        fetchData();
    }, []);

    const productIdNumber = Number(productId);
    const product = webshopData.find(item => item.Azonosító === productIdNumber);
    if (!product) {
        return <p>A termék nem található.</p>;
    }

    const addToCart = (product) => {
        const existingItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingProduct = existingItems.find(item => item.Azonosító === product.Azonosító);

        if (existingProduct) {
            const updatedItems = existingItems.map(item =>
                item.Azonosító === product.Azonosító
                    ? { ...item, Mennyiség: item.Mennyiség + 1 }
                    : item
            );

            setCartItems(updatedItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        } else {
            // Extract only the required properties
            const newItem = {
                Azonosító: product.Azonosító,
                Kép: product.Képek,
                Mennyiség: 1,
                Név: product.Név,
                Ár: product[`Normál ár`],
            };
            const updatedItems = [...existingItems, newItem];

            setCartItems(updatedItems);
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        }

        // Show overlay
        setOverlayVisible(true);
        setTimeout(() => {
            setOverlayVisible(false); // Hide overlay after 2000ms
        }, 2000);
    };

    return (
        <div className="container product-page">
            {overlayVisible && (
                <div className="cart-overlay">
                    <p>Termék hozzáadva a kosárhoz!</p>
                </div>
            )}
            <figure>
                <img src={product.Képek} alt={product.Név} />
            </figure>
            <div className="product-info">
                <h1>{product.Név}</h1>
                <h4>Ár: {product[`Normál ár`]} Ft + Szállítási díj</h4>
                <p dangerouslySetInnerHTML={{ __html: product.Leírás }} />
                <p dangerouslySetInnerHTML={{ __html: product[`Rövid leírás`] }} />
                <button onClick={() => addToCart(product)}>Kosárba teszem</button>
                <small>Termék ID: {productId}</small>
            </div>
        </div>
    );
};

export default ProductDetails;