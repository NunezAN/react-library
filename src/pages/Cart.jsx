import React from "react";
import Price from "../components/ui/Price";
import TotalPrice from "../components/ui/TotalPrice";

const Cart = ({ cart }) => {
    let subtotal = getSubTotal();
    let tax = getTax();
    function getSubTotal(){
        let subTotal = 0
        cart.forEach(cartBook => {
           cartBook.salePrice ? subTotal += cartBook.salePrice * cartBook.quantity : subTotal += cartBook.originalPrice * cartBook.quantity
        });
        return subTotal.toFixed(2);
    }
    function getTax(){
        return (subtotal * .08).toFixed(2);
    }
    function getTotal(){
        return ((+subtotal)+ (+tax)).toFixed(2);
    }
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__price">Price</span>
              </div>
              <div className="cart__body">
                {cart.map((cartBook) => {
                  return (
                    <div className="cart__item">
                      <div className="cart__book">
                        <img
                          src={cartBook.url}
                          alt=""
                          className="cart__book--img"
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {cartBook.title}
                          </span>
                          <span className="cart__book--price">
                            <Price
                              originalPrice={cartBook.originalPrice}
                              salePrice={cartBook.salePrice}
                            ></Price>
                          </span>
                          <button className="cart__book--remove">Remove</button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          className="cart__input"
                          value={cartBook.quantity}
                        ></input>
                      </div>
                      <div className="cart__total">
                        {<TotalPrice book={cartBook} />}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="total">
                <div className="total__item total__sub-total">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="total__item total__tax">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="total__item total__price">
                  <span>Total</span>
                  <span>${getTotal()}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() =>
                    alert("Checkout feature is currently in development")
                  }
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
