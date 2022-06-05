import React from 'react';

const Review = ({preview}) => {
    const {_id,name,product,review}= preview;
    return (
        <div className='border p-2'>
           <h4 className='text-center mt-3'><span className='font-bold text-blue-400'>Reviewer Name:</span> {name}</h4>
           <h4 className='text-center'><span className='font-bold text-blue-400'>Product:</span>  {product}</h4>
           <h4 className='text-center'><span className='font-bold text-blue-400'>Review: </span> {review}</h4>
           
        </div>
    );
};

export default Review;