import React, { useContext }  from 'react';
import ProductItem from './dinningproitem';
import './dinning.css';
import Navbar from './navbar';
import Footer from './footer'; 
import d1 from './photo//dinning//d1.jpg'
import d2 from './photo//dinning//d2.jpeg'
import d4 from './photo//dinning//d3.jpg'
import d5 from './photo//dinning//d4.jpeg'
import d6 from './photo//dinning//d5.jpeg'
import d7 from './photo//dinning//d6.jpeg'
import { SearchContext } from './searchContext';


const Dinning = () => {
  const { searchQuery } = useContext(SearchContext);
  
  const products1 = [
    {
      id: 1,
      name: 'Chicken Briyani',
      imageUrl: d1 ,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Chicken Gravy',
      imageUrl: d2 ,
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Mutton Balls',
      imageUrl: d4 ,
      rating: 4.2,
    },
    {
      id: 4,
      name: 'Chicken 65',
      imageUrl: d5,
      rating: 4.5,
    },
    {
      id: 5,
      name: 'Fish Gravy',
      imageUrl: d6,
      rating: 3.8,
    },
    {
      id: 6,
      name: 'Prawn Masala',
      imageUrl: d7,
      rating: 4.2,
    },
    
  ];
  const filteredProducts = products1.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className='dinning_productList'>
      <h2 style={{fontFamily:'font-serif italic'}}>Non Veg Recipes</h2>
      <p style={{textAlign:'center',fontFamily:'font-serif italic'}}>"The key to everything is patience. You get the chicken by hatching the egg, not by smashing it.
 "</p>
      
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
export default Dinning;

