import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Book = ({ book }) => {

    function getRating(){
        const wholeRating = Math.trunc(book.rating)
        let rating = new Array(wholeRating).fill(0).map(()=><FontAwesomeIcon icon="star"></FontAwesomeIcon>);

        if(!book.rating %1){
            rating.push(<FontAwesomeIcon icon="star-half-alt"></FontAwesomeIcon>)
        }  
        return rating;
    }
    getRating();
  return (
    <div className="book">
      <a href="">
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </a>
      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>
      <div className="book__ratings">
        {getRating()}
      </div>
      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">
              ${book.originalPrice.toFixed(2)}
            </span>
            ${book.salePrice.toFixed(2)}
          </>
        ) : (
            <>${book.originalPrice.toFixed(2)}</>
        )}
      </div>
    </div>
  );
};

export default Book;
