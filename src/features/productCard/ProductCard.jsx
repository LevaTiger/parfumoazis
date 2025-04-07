import { Link } from 'react-router';
import './product-card.css'

const ProductCard=({ product })=>{



    return(
        <div className="card">
            <figure>
                <img src={product.Képek} alt={product.Név} />
            </figure>
            <h4 className="card-title">{product.Név}</h4>
            <p>Ár: {product['Normál ár']} </p>
            <div className="purchase-item">
                <button>Kosárba</button>
                <Link>Részletek...</Link>
            </div>
        </div>
    )
}



export default ProductCard;