import React from 'react';
import Navbar from './navbar';
import css from './App.css'
import Home from './Home/home';
import HandleActive from './Sign Up/handleActivity.js';
import Footer from './footer';
import AboutUs from './aboutUs/aboutUs.js';
import Cartel from './cartel/cartel.js';
import Products from './products/products.js';
import Profile from './profile/profile.js';
import UpdateItemBox from './profile/components/manageItems/updateItem/updateItemBox';
class App extends React.Component{
  constructor(){
    super();
    this.state = {

    }
  }
  

  render(){
    return (
      <div id="app-container">
        <Navbar />
        <Home />
        <HandleActive />
        <AboutUs />
        <Cartel />
        <Products />
        <Profile />
        <UpdateItemBox />
        <Footer />
      </div>
    );
  }
}
export default App; 
