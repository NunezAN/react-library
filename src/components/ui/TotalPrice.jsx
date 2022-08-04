import React from 'react';

const TotalPrice = ({book}) => {
    function getTotalPrice(){
        return book.salePrice ? `$${(book.salePrice*book.quantity).toFixed(2)}`: `$${(book.originalPrice*book.quantity).toFixed(2)}`;  
    }
    return (
        <div>
        {getTotalPrice()}
        </div>
    );
}

export default TotalPrice;
