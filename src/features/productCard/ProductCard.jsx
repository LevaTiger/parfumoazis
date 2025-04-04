import './product-card.css'

const ProductCard=({ product })=>{



    return(
        <div className="card">
            <figure>
                <img src={product.Képek} alt={product.Név} />
            </figure>
            <h4 className="card-title">{product.Név}</h4>
            <p>Ár: {product['Normál ár']} </p>
            <button>Kosárba</button>
        </div>
    )
}



export default ProductCard;