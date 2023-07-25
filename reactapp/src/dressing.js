import React, { useContext }   from 'react';
import ProductItem from './dressingproitem';
import './dressing.css';
import Navbar from './navbar';
import Footer from './footer';
import dr1 from './photo//dressing//dr1.jpeg'
import dr2 from './photo//dressing//dr2.jpeg'
import dr3 from './photo//dressing//dr3.jpeg'
import dr4 from './photo//dressing//dr4.jpeg'
import dr5 from './photo//dressing//dr5.jpeg'
import dr6 from './photo//dressing//dr6.jpeg'
import { SearchContext } from './searchContext';


const ProductList = () => {
  const { searchQuery } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: 'Masala Chai',
      imageUrl: dr1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Filter Coffee',
      imageUrl: dr2,
      rating: 3.8,
    },
    {    
      id: 3,
      name: 'Badam Milk',
      imageUrl: dr3,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Soup',
      imageUrl: dr4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Fresh Juices',
      imageUrl: dr5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Milkshakes',
      imageUrl: dr6,
      rating: 4.2,
    },
    
  ];
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <Navbar/>
    <div className='dressing_productList'>
      <h2 style={{fontFamily:'font-serif italic'}}>Drinks</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"It's strange how 8 glasses of water a day seems impossible but 8 beers is so damn easy."</p>
      
      <br></br>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductList;
