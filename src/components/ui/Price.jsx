import React from 'react';

const Price = ({originalPrice, salePrice}) => {
    function getPrice(){
        return salePrice ? (
            <>
              <span className="book__price--normal">
                ${originalPrice.toFixed(2)}
              </span>
              ${salePrice.toFixed(2)}
            </>
          ) : (
              <>${originalPrice.toFixed(2)}</>
          )
    }
    return (
        <div>
            {getPrice()}
        </div>
    );
}

export default Price;
