import React from 'react';
import {books} from "../data"
import Book from "./ui/Book"



const Discounted = () => {
    
    function getDiscounted(){
        const discountedBooks = books.filter(book => book.salePrice).slice(0,8);
        return discountedBooks.map((book) => <Book key={book.id} book={book} />)
    }

    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discount <span className="purple">Books</span>
                    </h2>
                    <div className="books">
                        {
                        getDiscounted()
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
