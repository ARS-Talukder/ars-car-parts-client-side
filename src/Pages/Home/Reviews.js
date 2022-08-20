import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const {data:reviews, isLoading}=useQuery("allReviews",()=>fetch('https://lit-cove-72616.herokuapp.com/reviews').then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
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