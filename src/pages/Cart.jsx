import React from "react";
import Price from "../components/ui/Price";

const Cart = ({ books }) => {
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
                <div className="cart__item">
                  <div className="cart__book">
                    <img
                      src={books[0].url}
                      alt=""
                      className="cart__book--img"
                    />
                    <div className="cart__book--info">
                      <span className="cart__book--title">
                        {books[0].title}
                      </span>
                      <span className="cart__book--price">
                        <Price originalPrice={books[0].originalPrice} salesPrice={books[0].salesPrice}></Price>
                      </span>
                      <button className="cart__book--remove">Remove</button>
                    </div>
                  </div>
                  <div className="cart__quantity">
                    <input type="number" min={0} max={99} class="cart__input"/>
                  </div>
                  <div className="cart__total">{books[0].originalPrice}</div>
                </div>
              </div>
              <div className="total">
                <div className="total__item total__sub-total">
                    <span>Subtotal</span>
                    <span>$9.00</span>
                </div>
                <div className="total__item total__tax">
                    <span>Tax</span>
                    <span>$1.00</span>
                </div>
                <div className="total__item total__price">
                    <span>Total</span>
                    <span>$100.00</span>
                </div>
                <button className="btn btn__checkout no-cursor" onClick={()=>alert("Checkout feature is currently in development")}>Proceed to checkout</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
