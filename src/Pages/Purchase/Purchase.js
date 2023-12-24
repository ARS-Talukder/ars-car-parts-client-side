import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://ars-car-parts-server-side.onrender.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [id])
    const { img, name, sd, minimum, available, price } = product;
    const [orderQuantity, setOrderQuantity] = useState(null);
    useEffect(() => {
        if (product.minimum) {
            setOrderQuantity(product.minimum)
        }
    }, [product])

    // console.log(orderQuantity)


    const handleConfirmOrder = event => {
        event.preventDefault();
        const availableQuantity = parseInt(available);
        const minimumQuantity = parseInt(minimum);
        const clientName = event.target.name.value;
        const productName = name;
        const productPrice = price;
        const email = user.email;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const orderAmount = event.target.orderAmount.value;
        const order = { clientName, productName, email, address, phone, orderAmount, productPrice };
        if (orderAmount > availableQuantity) {
            alert('You are crossing available quantity');
        }
        else if (orderAmount < minimumQuantity) {
            alert('You need to order minimum pcs ' + minimum);
        }
        else {
            fetch('https://ars-car-parts-server-side.onrender.com/orders2', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Order Placed Successfully");
                    navigate("/")
                })
        }

    }
    return (
        <div className='border p-2 grid grid-cols-1 lg:grid-cols-2 mb-4'>
            <div className='mx-auto border p-2'>
                <img style={{ "width": "100%", "height": "450px" }} src={img} alt="" />
                <h4 className='text-left mt-3'><span className='font-bold text-red-500'>Product Name:</span> {name}</h4>
                <h4 className='text-left'><span className='font-bold text-red-500'>Description:</span>  {sd}</h4>
                <h4 className='text-left'><span className='font-bold text-red-500'>Minimum Order Quantity:</span> {minimum}</h4>
                <h4 className='text-left'><span className='font-bold text-red-500'>Available Quantity:</span> {available}</h4>
                <h4 className='text-left mb-3'><span className='font-bold text-red-500'>Price/unit:</span> {price}</h4>
            </div>
            <form onSubmit={handleConfirmOrder} className='grid grid-cols-1 justify-items-center border' action="">
                <h2 className='text-orange-400 font-bold text-xl mb-4 underline'>Your Information</h2>
                <input type="text" placeholder="Your Name" name='name' className="input input-bordered w-full max-w-xs" required />
                <input type="text" value={name} className="input input-bordered w-full max-w-xs" disabled />
                <input type="text" value={`${price} BDT/pcs`} className="input input-bordered w-full max-w-xs" disabled />
                <input type="email" value={user.email} className="input input-bordered w-full max-w-xs" disabled />
                <input type="text" placeholder="Your Address" name='address' className="input input-bordered w-full max-w-xs" required />
                <input type="text" placeholder="Phone Number" name='phone' className="input input-bordered w-full max-w-xs" required />
                <input type="number" placeholder={`Quantity (Minimum ${orderQuantity})`} name='orderAmount' className="input input-bordered w-full max-w-xs" required />

                {/* <div className='flex'>
                    <button onClick={handleDecrease} className='btn mr-2'>-50</button>
                    <input type="text" name='orderAmount' value={orderQuantity} className="input input-bordered w-full max-w-xs" />
                    <button onClick={handleIncrease} className='btn ml-2'>+50</button>
                </div> */}

                <input type="submit" value="Confirm" className="btn w-full max-w-xs mt-2" />

            </form>

        </div>
    );
};

export default Purchase;