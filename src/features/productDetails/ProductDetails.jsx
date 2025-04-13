import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        <div className="container">
            <h1>{product.Név}</h1>

            <p>Termék ID: {productId} </p>
            <p dangerouslySetInnerHTML={{ __html: product.Leírás }} />
        </div>
    )
}

export default ProductDetails;