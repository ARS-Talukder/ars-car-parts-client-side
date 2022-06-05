import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

//This pk_test is our coppied published key
const stripePromise = loadStripe('pk_test_51L60shGAQ9TdksKxnx4viZcUdkkXV0qO4FPfPwss0QSfl4KV7dBGruGIkSyfgIiUa6pDtX2ao4eW7N5cWq4V93B700cmACJTVt');

const Payment = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`https://lit-cove-72616.herokuapp.com/orders2/byid/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className='flex justify-center mt-8'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl font-bold text-success text-center">Hello, {order.clientName}</h2>
                    <p>Please pay for <span className='font-bold'>{order.productName}</span></p>
                    <div class="mt-4">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order}></CheckoutForm>
                    </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;