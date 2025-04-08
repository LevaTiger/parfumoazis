import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import ProductCard from '../../features/productCard/ProductCard';
import './webshop.css'

const Webshop =()=>{

    const [webshopData, setWebshopData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        'women-parfumes': false,
        'men-parfumes': false,
        'unisex-parfumes': false,
        'onsale-parfumes': false
    })

    const location = useLocation()

    useEffect(()=>{

        const fetchData= async ()=>{
            const response = await fetch('/assets/json/csvjson.json')
            const webshopItems = await response.json();
            setWebshopData(webshopItems);
        }
        fetchData();
    }, [])
    console.log("Webshop Data:", webshopData);
    
    useEffect(()=>{

        const params = new URLSearchParams(location.search);
        setFilters({
            'women-parfumes': params.get('noi') === 'true',
            'men-parfumes': params.get('ferfi') === 'true',
            'unisex-parfumes': params.get('unisex') === 'true',
            'onsale-parfumes': params.get('akcio') === 'true'
        });
        setSearchTerm(params.get('search') || '');
    }, [location.search]);

    useEffect(() => {
      // URL frissítése a szűrők és a keresési feltételek alapján
      const queryParams = new URLSearchParams();
      if (filters['women-parfumes']) queryParams.set('noi', 'true');
      if (filters['men-parfumes']) queryParams.set('ferfi', 'true');
      if (filters['unisex-parfumes']) queryParams.set('unisex', 'true');
      if (filters['onsale-parfumes']) queryParams.set('akcio', 'true');
      if (searchTerm) queryParams.set('search', searchTerm);

      window.history.replaceState({}, '', `${location.pathname}?${queryParams.toString()}`);
  }, [filters, searchTerm, location.pathname]);


    const handleCheckboxChange =(e) =>{
        const {id, checked} = e.target;
        setFilters(prev=>({
            ...prev,
            [id]: checked,
        }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };

      const handleSearchSubmit = (e) => {
        e.preventDefault();
      };
    
      const filteredProducts = webshopData.filter(item => {
        const name = item.Név?.toLowerCase() || '';
        const category = item.Kategória?.toLowerCase() || '';
        const isOnSale = category.includes('akció') || item['Akciós ár'] !== '';
      
        const matchesSearch = searchTerm
          .toLowerCase()
          .split(' ')
          .every(word => name.includes(word));
      
        const anyCategoryFilterActive =
          filters['women-parfumes'] ||
          filters['men-parfumes'] ||
          filters['unisex-parfumes'] ||
          filters['onsale-parfumes'];
      
        const matchesCategory =
          !anyCategoryFilterActive || (
            (filters['women-parfumes'] && category.includes('női parfümök')) ||
            (filters['men-parfumes'] && category.includes('férfi parfümök')) ||
            (filters['unisex-parfumes'] && category.includes('unisex parfümök')) ||
            (filters['onsale-parfumes'] && isOnSale)
          );
      
        return matchesSearch && matchesCategory;
      });
      

    return(
       <div className='container webshop'>
      <div className="sidebar">
        <form onSubmit={handleSearchSubmit} className="searchbar">
          <input
            type="search"
            placeholder="Parfümök keresése..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">KERESÉS</button>
        </form>
        <div>
          <input type="checkbox" id='women-parfumes' checked={filters['women-parfumes']} onChange={handleCheckboxChange} />
          <label htmlFor="women-parfumes">Női Parfümök</label>
        </div>
        <div>
          <input type="checkbox" id='men-parfumes' checked={filters['men-parfumes']} onChange={handleCheckboxChange} />
          <label htmlFor="men-parfumes">Férfi Parfümök</label>
        </div>
        <div>
          <input type="checkbox" id='unisex-parfumes' checked={filters['unisex-parfumes']} onChange={handleCheckboxChange} />
          <label htmlFor="unisex-parfumes">Unisex Parfümök</label>
        </div>
        <div>
          <input type="checkbox" id='onsale-parfumes' checked={filters['onsale-parfumes']} onChange={handleCheckboxChange} />
          <label htmlFor="onsale-parfumes">Akciós Parfümök</label>
        </div>
        <button onClick={() => setFilters({
            'women-parfumes': false,
            'men-parfumes': false,
            'unisex-parfumes': false,
            'onsale-parfumes': false
            })}>
            Szűrők törlése
        </button>

      </div>
      <div className="product-list">
        {filteredProducts.map(item => (
          <ProductCard key={item.Azonosító} product={item} />
        ))}
      </div>
    </div>
    )
}

export default Webshop;