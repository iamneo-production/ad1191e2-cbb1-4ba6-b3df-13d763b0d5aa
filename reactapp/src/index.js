import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login';
import RegistrationPage from './signup';
// import Upload from './addrec';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './homepage';
import Profile from './profile';
import Cart from './cart';
import Bed from './bed';
import Dressing from './dressing';
import Sofa from './sofa';
import Dinning from './dinning';
import { SearchProvider } from './searchContext';
import { CartProvider } from './cartContext';
import { Provider } from 'react-redux'
import store from './redux/store.js'
import AboutUs from './aboutus';
import CheckOut from './checkout';
import Upload from './addrec';
import ContactPage from './contact';
// import DeliveryForm from './delivery';

ReactDOM.render(
  // <BrowserRouter>
  <Provider store={store}>
  <Router>     
  <SearchProvider>
    <CartProvider>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/checkout" element={<CheckOut/>} />
        {/* <Route path="/delivery" element={<DeliveryForm/>} /> */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/home/bed" element={<Bed/>}/>
        <Route path="/home/dressing" element={<Dressing/>}/>
        <Route path="/home/sofa" element={<Sofa/>}/>
        <Route path="/home/dinning_set" element={<Dinning/>}/>
        <Route path="/addrec" element={<Upload/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </React.StrictMode>
    </CartProvider>
    </SearchProvider>
  </Router>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

