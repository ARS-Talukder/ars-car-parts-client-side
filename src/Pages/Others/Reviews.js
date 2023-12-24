import { useQuery } from 'react-query';
import Footer from '../Home/Footer';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const {data:reviews, isLoading}=useQuery("allReviews",()=>fetch('https://ars-car-parts-server-side.onrender.com/reviews').then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-orange-500 font-bold mb-4 underline'>What Our Customer Says</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review key={review._id} preview={review}></Review>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Reviews;