
import './App.css';
import Cart from './Cart';
import CartItem from './CartItem';
import {useState} from "react";



const product = [
  {
    id: 1,
    title: "R15V4",
    price1: 170000,
    view: true,
    img: "https://mc.webpcache.epapr.in/pro.php?size=large&in=https://mc.webpcache.epapr.in/mcms.php?size=large&in=https://mcmscache.epapr.in/post_images/website_300/post_22405190/thumb.jpg",
  },
  {
    id: 2,
    title: "NS200",
    rating: true,
    price: 150000,
    price1: 140000,
    sale: true,
    img: "https://www.bajajautofinance.com/uploads/vehicles/Pulsar-200NS.png",
  },
  {
    id: 3,
    title: "RS200",
    price: 160000,
    price1: 150000,
    sale: true,
    img: "https://images.bikeshala.com/sound/3D9E48C5A4/bajaj-pulsar-rs200-engine-and-stock-exhaust-sound-800x800.webp",
  },
  {
    id: 4,
    title: "KTM RC 200",
    rating: true,
    price1: 200000,
    img: "https://imgd.aeplcdn.com/393x221/n/cw/ec/102895/rc-200-2021-right-side-view-11.jpeg?isig=0&q=75",
  },
  {
    id: 5,
    title: "KTM RC 390",
    price: 300000,
    price1: 250000,
    sale: true,
    img: "https://bd.gaadicdn.com/processedimages/ktm/ktm-rc-390/494X300/ktm-rc-3905fd47e21be07d.jpg?imwidth=380&impolicy=resize",
  },
  {
    id: 6,
    title: "NINJA 400",
    price1: 350000,
    view: true,
    img: "https://kawasaki-india.com/wp-content/uploads/2019/08/Lime-Green-Ebony.jpeg",
  },
  {
    id: 7,
    title: "RE classic 350",
    rating: true,
    price: 200000,
    price1: 180000,
    sale: true,
    img: "https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/royal-enfield-select-model-redditch-sage-green-1630481643318.png?q=75",
  },
  {
    id: 8,
    title: "RE continental gt 650",
    rating: true,
    price1: 400000,
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/specifications-1611600744.jpg",
  },
];

function App() {

   //Creating useState for display Cart item data using Array
  

   const [cartitems, setCartItems] = useState([]);
   const [total, setTotal] = useState(0);
   const [cartAdd, setCartAdd] = useState(0);
 
   //function for adding items to cart
   let handleCart = (item) => {
     setCartItems([...cartitems, item]);
     setTotal(total + item.price1);
     setCartAdd(cartAdd + 1);
   };
 
   //function for removing item from cart
   let handleRemoveCart = (item) => {
     let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
     cartitems.splice(itemIndex, 1);
     setCartItems([...cartitems]);
     setTotal(total - item.price1);
     setCartAdd(cartAdd - 1);
   };
  return (
    //Creating nav bar
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
              <div className="btn btn-outline-dark p-1" >
                <img
                  alt="_targer"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/30/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-fill-vitaly-gorbachev.png"
                />
                Cart
                <span className="badge bg-dark rounded-pill ms-2">
                  {cartAdd}
                </span>
                <hr />
                <ol className="list-group list-group-numbered">
                  {/* maping array data to cart component */}
                  {cartitems.map((item) => {
                    console.log(cartitems)
                    return (
                      <CartItem
                        item={item}
                        handleRemoveCart={handleRemoveCart}
                      />
                    );
                  })}
                </ol>
                {/* display total amount in cart */}
                {cartitems.length > 0 ? (
                  <div className="col-lg-12 text-center">
                    <h6>Total : {total}</h6>
                  </div>
                ) : (
                  <div className="col-lg-12 text-center">
                    <h6>No Items in Cart</h6>
                  </div>
                )}
              </div>
          </div>
        </div>
      </nav>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>
      <div className="container empty"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {/* maping product array to cart component to display items detail */}
              {product.map((product) => {
                return (
                  <Cart key={product.id}
                    product={product}
                    cartItems={cartitems}
                    handleCart={handleCart}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="card text-center">
          <div className="card-body text-light division1">
            <p className="card-title text-center mt-5">
              Copyright © Your Website 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
