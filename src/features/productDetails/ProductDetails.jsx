import { useEffect, useState } from "react";
import { useParams } from "react-router";

import './product-details.css'

const ProductDetails =()=>{

        const [webshopData, setWebshopData] = useState([]);
        const {productId} = useParams();
        useEffect(()=>{
    
            const fetchData= async ()=>{
                const response = await fetch('/assets/json/csvjson.json')
                const webshopItems = await response.json();
                  setWebshopData(webshopItems);
                
            
                }
                fetchData();
        }, [])
    
    const productIdNumber = Number(productId);
    const product = webshopData.find(item=> item.Azonosító === productIdNumber)
    if (!product) {
        return <p>A termék nem található.</p>
    }
    return(
        <div className="container product-page">
            <figure>
                <img src={product.Képek} alt="" />
            </figure>
            <div className="product-info">
                <h1>{product.Név}</h1>
                <h4>Ár: {product[`Normál ár`]} Ft + Szállítási díj</h4>
                <p dangerouslySetInnerHTML={{ __html: product.Leírás }} />
                <p dangerouslySetInnerHTML={{__html: product[`Rövid leírás`]}} />
                <button>Kosárba teszem</button>
                <small>Termék ID: {productId} </small>
            </div>
        </div>
    )
}

export default ProductDetails;