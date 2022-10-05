import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Book from "../components/ui/Book";
import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";

const BookDetails = ({ books, addToCart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to={`/books`} className="book__link">
                <h2 className="book__selected--title--top">Movies</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating}></Rating>
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  ></Price>
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">{book.description}</p>
                </div>
                <button className="btn" onClick={() => addToCart(book)}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Movies</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && book.id != +id)
                .slice(0, 4)
                .map((book) => (
                  <Book key={book.id} book={book}></Book>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetails;
