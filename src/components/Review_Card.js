import React from "react";
import './Review_Card.css'
function Review_Card(reviews){
    
    const {name, review} = reviews
    
    return (
    <section className="review-card">
        <small>⭐⭐⭐⭐⭐</small>
        <h3>{name}</h3>
        <q>{review}</q>
    </section>
          
        );
}

export default Review_Card;