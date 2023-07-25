import React, { useState } from 'react';
import Navbar from './navbar';
import "./upload.css"
import axios from 'axios';
const Upload = () => {

  const [recipeName, setRecipeName] = useState('');
  const [image, setimage] = useState('');
  const [ingredient, setIngredient] = useState('');
  
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data={
      recipename:recipeName,
      imageurl:image,
      ingredients:ingredient,
     tipsandtechnique:instructions,
    
  };
  axios.post("http://localhost:8080/addRecipe",data);
    

    // Do something with the recipe data (e.g., send it to an API)
    console.log({
      recipeName,
      image,
      ingredient,
      
      instructions
    });

    // Clear the form
    setRecipeName('');
    setimage('');
    setIngredient('');
    
    setInstructions('');
  };

  return (
    <div className='imgi'>
    <Navbar/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='upload-container '>

    <form onSubmit={handleSubmit}>
      <h1 className='upload-heading' > Add Recipe</h1>
      <label className='form-label' htmlFor="recipeName">Recipe Name:</label>
      <input
      className='input-field'
        type="text"
        id="recipeName"
        value={recipeName}
        onChange={(e) => setRecipeName(e.target.value)}
        required
      />
      <label className='form-label' htmlFor="recipeName">Image URL:</label>
      <input
      className='input-field'
        type="text"
        id="recipeName"
        value={image}
        onChange={(e) => setimage(e.target.value)}
        required
      />

      <label className='form-label' htmlFor="ingredients">Ingredients :</label>
      <textarea
      className='textarea-field'
        id="ingredients"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        required
      ></textarea>
      
      <label className='form-label' htmlFor="instructions">Cooking Tips and Technique:</label>
      <textarea
      className='textarea-field '
        id="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      ></textarea>

      <button className="submit-button" type="submit">Upload</button>
    </form>
    </div>
    </div>
  );
};

export default Upload;
