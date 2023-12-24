import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddAReview = () => {
    const navigate = useNavigate();
    const handleAddReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const product = event.target.product.value;
        const review = event.target.review.value;
        const reviews = { name, product, review };
        fetch('https://ars-car-parts-server-side.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Thanks For The Review');
                navigate('/')
            })


    }
    return (
        <div>
            <h2 className='my-4 text-xl text-blue-400 font-bold'>Give Us Review About Product</h2>
            <form onSubmit={handleAddReview} action="">
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <input type="text" name='product' placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <textarea className="textarea textarea-bordered w-full max-w-xs mb-2" name='review' placeholder="Your Review" required></textarea>
                <br />
                <input type="submit" value="Confirm" className="btn w-full max-w-xs mt-2" />



            </form>
        </div>
    );
};

export default AddAReview;