import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './sidebar.css';
import avatar from './photo//avatar.jpg';
import { useSelector } from 'react-redux'
import { selectUser } from './redux/userSlice.js'

export default props => {
  const user=useSelector(selectUser)
  return (
    <Menu>
        <div>
            <center>
        <div className='sidebar_img'>
        <img src={avatar} alt="Avatar" className="profile-card_avatar" /><br></br>
        <b><i>{user.username}</i></b>
        </div>
        ------------------------<br></br>
        
      <Link to='/' className="menu-item" >
        Sign in
      </Link><br></br>
      <Link to='/register' className="menu-item" >
        Registration   
      </Link><br></br>
      <Link to='/about' className="menu-item" >
        About Us   
      </Link><br></br>
      ------------------------
      <h2>Recipes</h2>
      <Link to='/home/bed' className="menu-item" >
        Veg 
      </Link><br></br>
      <Link to='/home/dinning_set' className="menu-item" >
        Non Veg   
      </Link><br></br>
      <Link to='/home/sofa' className="menu-item" >
        Snacks
      </Link><br></br>
      <Link to='/home/dressing' className="menu-item" >
        Drinks   
      </Link><br></br>
      ------------------------
      </center>
      </div>
    </Menu>
  );
};