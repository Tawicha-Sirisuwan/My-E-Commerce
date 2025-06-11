import React from "react";
import './Main.css';
import Navbar from "../components/Navbar";
import Product_Card from "../components/Product_Card";
import Review_Card from "../components/Review_Card";
function Main() {
    return (
    <body>
      <title>Shop.co</title>
      <Navbar/>
      <div className="Main">  </div>
      <header>
        <section id="header-left">
        <section id="header-title">
          <h1> Find Clothes that Matches Your style</h1>
          <small>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality 
            and cater to your sense of style.
          </small>
          <div>
          <a id="shop-btn" href="">Shop Now</a>
          </div>
        </section>   
        <section id="header-stats">
          <ul>
            <li>
              <strong>200+</strong>
              <small>International Brands</small>
            </li>
            <li>
              <strong>2000+</strong>
              <small>Hight-Quality Products</small>
            </li>
            <li>
              <strong>30,000+</strong>
              <small>Happy Customers</small>
            </li>
          </ul>
        </section>
        </section>
        <section id="header-img">
          <img src="https://placehold.co/800x800" alt=""></img>
        </section> 
      </header>

      <section id="brands">
          <img src="https://placehold.co/150x50" alt=""></img>
          <img src="https://placehold.co/150x50" alt=""></img>
          <img src="https://placehold.co/150x50" alt=""></img>
          <img src="https://placehold.co/150x50" alt=""></img>
          <img src="https://placehold.co/150x50" alt=""></img>
      </section> 

      <section id="new-arrival">
        <h2>New Arrival</h2>
        <section id="new-arrival-list">
        <Product_Card name="Product Name" price="$99.99" star="4.8" img="https://placehold.co/200x200"/>
        <Product_Card name="Product Name" price="$99.99" star="4.8" img="https://placehold.co/200x200"/>
        <Product_Card name="Product Name" price="$99.99" star="4.8" img="https://placehold.co/200x200"/>
        <Product_Card name="Product Name" price="$99.99" star="4.8" img="https://placehold.co/200x200"/>
        </section>
      </section>
      <section id="dress-style">
      <h3>BROWSE BY DRESS STYLE</h3>
        <section id="style-list">
          <div id="style-list-Casual" className="dress-style-list">
            <strong>Casual</strong>
            {/* <img src="https://placehold.co/400x400" alt=""></img> */}
          </div>
          <div id="style-list-Format" className="dress-style-list" >
            <strong>Format</strong>
            {/* <img src="https://placehold.co/400x400" alt=""></img> */}
          </div>
          <div id="style-list-Party" className="dress-style-list" >
            <strong>Party</strong>
            {/* <img src="https://placehold.co/400x400" alt=""></img> */}
          </div>
          <div id="style-list-Gym" className="dress-style-list" >
            <strong>Gym</strong>
            {/* <img src="https://placehold.co/400x400" alt=""></img> */}
          </div>
        </section>
      </section>
     
      <section id="review">
        <h4>our Happy Customers</h4>
        <section id="review-item">
          <Review_Card name="John S.✅" review="Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."/>
          <Review_Card name="Alex K.✅" review="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."/>
          <Review_Card name="Sarah M.✅" review="As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."/>
        </section>
      </section>
    </body>
      
    );
  }
  
  export default Main;
  