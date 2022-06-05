import React, { useEffect, useState } from 'react';
import ManageOrder from './ManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://lit-cove-72616.herokuapp.com/orders2')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders)
    return (
        <div class="overflow-x-auto">
            <h2 className='text-blue-500 text-2xl font-bold my-4 underline'>All Orders</h2>
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        orders.map((order,index) =>
                            <tr key={order._id}>
                                <th>{index+1}</th>
                                <td>{order.clientName}</td>
                                <td>{order.productName}</td>
                                <td>{order.orderAmount}</td>
                            </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;
