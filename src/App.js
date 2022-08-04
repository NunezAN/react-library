import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookDetails from "./pages/BookDetails";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

function addToCart(book){
  const dupeItem = cart.find(cartBook => +cartBook.id === +book.id)
  if(dupeItem){
    setCart(cart.map(cartBook => {
      if(cartBook.id === dupeItem.id){
        return {
          ...cartBook, quantity: cartBook.quantity + 1,
        }
      }
    }))
  } 
  else{
  setCart([...cart,{...book,quantity: 1}]);
}
}

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          exact
          render={() => <BookDetails books={books} addToCart={addToCart} />}
        />
        <Route path="/cart" exact render={() => <Cart books={books}></Cart>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
