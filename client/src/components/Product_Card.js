import React from "react";
import './Product_Card.css';


function Product_Card(props) {
    const {name, price, star, img} = props;
    
    return (
    <div className="product">
        <img src={img} alt={name}></img>
        <h3>{name}</h3>
        <section>
            ⭐⭐⭐⭐⭐
            <small>{star}/5</small>
        </section>
        <strong>{price}</strong>
    </div>
      
    );
  }
  
  export default Product_Card;
  