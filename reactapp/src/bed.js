import React, { useContext }   from 'react';
import ProductItem from './bedproitem';
import './bed.css';
import Navbar from './navbar';
import Footer from './footer';
import b1 from './photo//bed//b1.jpeg';
import b2 from './photo//bed//b2.jpeg';
import b3 from './photo//bed//b3.jpg';
import b4 from './photo//bed//b4.jpeg';
import b5 from './photo//bed//b5.jpg';
import b6 from './photo//bed//b6.jpg';
import { SearchContext } from './searchContext';


const Bed = () => {
  const { searchQuery } = useContext(SearchContext);

  const products = [
    {
      id: 1,
      name: 'Veg Briyani',
      imageUrl: b1,
      rating: 4.5,
      
      
    },
    {
      id: 2,
      name: 'Veg Kurma',
      imageUrl: b2,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Channa Masala',
      imageUrl: b3,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Sambar',
      imageUrl: b4,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Masala Dosa',
      imageUrl: b5,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Lemon Rice',
      imageUrl: b6,
      rating: 4.2,
    },
    
  ];
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
    <Navbar/>
    <h2 style={{fontFamily:'font-serif italic',paddingTop:'100px'}}>Veg Recipe List</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"The more colorful the food, the better. I try to add color to my diet, which means vegetables and fruits."</p>
    <div className='bed_productList'>
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

export default Bed;
