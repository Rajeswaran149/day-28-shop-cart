import React from 'react'
import "./App.css";

function Cart(props) {
  return (
    <div className="container card m-1 text-center" style={{ width: "17rem" }}>
    <img src={props.product.img} className="card-img-top gfg" alt="..." />
    {props.product.sale ? <h6 className="second-txt">Sale</h6> : ""}
    <div className="card-body">
      <h5 className="card-title">{props.product.title}</h5>
      <p className="card-text">
        {/*Using fontAwesome to display rating starts */}
        {props.product.rating ? <i className="fa fa-star  stars"></i> : ""}
        {props.product.rating ? <i className="fa fa-star  stars"></i> : ""}
        {props.product.rating ? <i className="fa fa-star  stars"></i> : ""}
        {props.product.rating ? <i className="fa fa-star  stars"></i> : ""}
        {props.product.rating ? <i className="fa fa-star  stars"></i> : ""}
      </p>
      <p className="card-text">
        {/* strick out the price */}
        Rs:
        <span style={{ textDecoration: "line-through" }}>
          {props.product.price}
        </span>
        {props.product.price1}
      </p>
    </div>
    {/* disable the button after click and onclick event for adding item to cart */}
    <button
      disabled={props.cartItems.some((obj) => obj.id === props.product.id)}
      onClick={() => props.handleCart(props.product)}
      className="btn btn-outline-dark mb-1 "
    >
      Add to Cart
    </button>
  </div>
  )
}

export default Cart