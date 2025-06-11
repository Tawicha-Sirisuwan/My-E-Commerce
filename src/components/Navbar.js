import React from "react";
import './์Navbar.css';


function Navbar() {
  return (
  <body>
    <nav>
        <section id="title">
           <div>Shop.co</div>
        </section>
        <section id="links">
          <ul>
            <li><a href="">Shop</a></li>
            <li><a href="">On Sale</a></li>
            <li><a href="">New Arrival</a></li>
            <li><a href="">Brands</a></li>
          </ul>    
        </section>
        <section id="search">
           <input type="search" placeholder=" Search for Product... "></input>
        </section>
        <section  id="account">
          <ul>
            <li><a href=""><img src="/image/shopping-cart.png" alt="Shopping-Cart"></img></a></li>
            <li><a href=""><img src="/image/profile-user.png" alt="profile-user"></img></a></li>
          </ul>    
        </section>
    </nav>
  </body>
    
  );
}

export default Navbar;
