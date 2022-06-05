import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://lit-cove-72616.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-orange-500 font-bold mb-4 underline'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    reviews.map(review => <Review key={review._id} preview={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;