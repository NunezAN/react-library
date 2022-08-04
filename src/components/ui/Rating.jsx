import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({rating}) => {
    function getRating(){
        const wholeRating = Math.trunc(rating)
        let starRating = new Array(wholeRating).fill(0).map((_,index)=><FontAwesomeIcon icon="star" key={index}></FontAwesomeIcon>);
        if(!Number.isInteger(rating)){
            starRating.push(<FontAwesomeIcon icon="star-half-alt" key={starRating.length}></FontAwesomeIcon>)
        } 
        return starRating;
    }
    return (
        <div className='book__ratings'>
            {getRating()}
        </div>
    );
}

export default Rating;
