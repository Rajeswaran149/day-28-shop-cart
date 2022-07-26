import React from 'react'

function CartItem(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{props.item.title}</div>
      {props.item.price1}
    </div>
    {/* onclick event for removing items from cart */}
    <button
      onClick={() => {
        props.handleRemoveCart(props.item);
      }}
      className="btn badge bg-danger rounded-pill"
    >
      del
    </button>
  </li>

  )
}

export default CartItem