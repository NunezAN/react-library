import Book from "./ui/Book.jsx"
import React from 'react';
import {books} from "../data.js";

const Featured = () => {

    function getFeatured(){
        return books.filter(book => book.rating === 5).slice(0,4).map(book => <Book key={book.id} book={book}></Book>);
    }

    getFeatured();
    return (
        <section id="features">
            <div className="containe">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className='purple'>Movies</span>
                    </h2>
                    <div className="books">
                        {getFeatured()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
