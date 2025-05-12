import { Link } from 'react-router';
import './product-card.css'

const ProductCard=({ product, addToCart })=>{



    return(
        <div className="card">
            <figure>
                <img src={product.Képek} alt={product.Név} />
            </figure>
            <h4 className="card-title">{product.Név}</h4>
            <p>Ár: {product['Normál ár']} </p>
            <div className="purchase-item">
                <button 
                
                    onClick={()=> addToCart({
                        Azonosító: product.Azonosító,
                        Név: product.Név,
                        Ár: product[`Normál ár`],
                        Kép: product.Képek,
                        Mennyiség: 1
                    })}>
                        Kosárba
                </button>
                <Link to={`/webshop/${product.Azonosító}`}>Részletek...</Link>
            </div>
        </div>
    )
}



export default ProductCard;