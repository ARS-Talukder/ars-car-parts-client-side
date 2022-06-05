import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const [cardError, setCardError] = useState('');
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');

    const { orderAmount, productPrice } = order;
    // const totalPrice=parseInt(orderAmount)* parseInt(productPrice);
    // const totalPriceText=totalPrice.toString(2);


    useEffect(() => {
        if (productPrice) {
            fetch('https://lit-cove-72616.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'

                },
                body: JSON.stringify({ productPrice })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }


    }, [productPrice])
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setCardError(error?.message)
        }
        else {
            setCardError('');
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {cardError && <p className='text-red-400'>{cardError}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;