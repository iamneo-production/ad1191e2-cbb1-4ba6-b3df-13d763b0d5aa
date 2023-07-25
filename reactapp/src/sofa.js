import React, { useContext }   from 'react';
import ProductItem from './sofaproitem';
import './sofa.css';
import Navbar from './navbar';
import Footer from './footer';
import s1 from './photo//sofa//s1.jpeg'
import s2 from './photo//sofa//s2.jpeg'
import s3 from './photo//sofa//s3.jpeg'
import s4 from './photo//sofa//s4.jpeg'
import s5 from './photo//sofa//s5.jpeg'
import s6 from './photo//sofa//s6.jpg'
import { SearchContext } from './searchContext';

const Sofa = () => {
  const { searchQuery } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: 'Samosa',
      imageUrl: s1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Bajji',
      imageUrl: s2,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Mixture',
      imageUrl: s3,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Gulab Jamun',
      imageUrl: s4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Murukku',
      imageUrl: s5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Veg Pizza',
      imageUrl: s6,
      rating: 4.2,
    },
    
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className='sofa_productList'>
      <h2 style={{fontFamily:'font-serif italic'}}>Snacks Items</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"Keep your friends close and your snacks closer."</p><br></br>
      
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

export default Sofa;
