import { useEffect, useState } from 'react';
import ProductCard from '../../features/productCard/ProductCard';
import './webshop.css'

const Webshop =()=>{

    const [webshopData, setWebshopData] = useState([]);


    useEffect(()=>{

        const fetchData= async ()=>{
            const response = await fetch('/assets/json/csvjson.json')
            const webshopItems = await response.json();
            setWebshopData(webshopItems);
        }
        fetchData();
    }, [])

    return(
        <div className='container webshop'>
            <div className="sidebar">
                <input type="search" placeholder='Parfümök keresése...' />
                    <div>
                        <input type="checkbox" id='women-parfumes' />
                        <label htmlFor="women-parfumes">Női Parfümök</label>

                    </div>
                    <div>
                        <input type="checkbox" id='men-parfumes' />
                        <label htmlFor="men-parfumes">Férfi Parfümök</label>

                    </div>
                    <div>
                        <input type="checkbox" id='unisex-parfumes' />
                        <label htmlFor="unisex-parfumes">Unisex Parfümök</label>

                    </div>
                    <div>
                        <input type="checkbox" id='onsale-parfumes' />
                        <label htmlFor="onsale-parfumes">Akciós Parfümök</label>

                    </div>
              
            </div>
            <div className="product-list">
                {webshopData.map(item => {
                    console.log(item); // Debugging: elemek ellenőrzése
                    return <ProductCard key={item.Azonosító} product={item} />;
                })}
            </div>
        </div>
    )
}

export default Webshop;