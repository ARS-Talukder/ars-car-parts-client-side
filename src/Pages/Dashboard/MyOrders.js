import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://lit-cove-72616.herokuapp.com/orders2/${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders)
    return (
        <div class="overflow-x-auto mt-4">
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Payment</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        orders.map((order, index) =>
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td>{order.productName}</td>
                                <td>
                                    {(order.productPrice && !order.paid)
                                        &&
                                        // <Link  to={`/dashboard/payment/${order._id}`}>
                                        //     <button className='btn btn-sm btn-success'>pay</button>
                                        // </Link>
                                        <button className='btn btn-sm btn-success'>pay</button>
                                    }
                                    {/* {(order.productPrice && order.paid)
                                        &&
                                        <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id:
                                                <span className='text-success'>
                                                    {order.transactionId}
                                                </span>
                                            </p>
                                        </div>
                                    } */}
                                </td>
                                <td>Blue</td>
                            </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;