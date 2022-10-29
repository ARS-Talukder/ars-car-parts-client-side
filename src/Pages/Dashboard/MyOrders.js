import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery("allTools", () => fetch(`http://localhost:5000/orders2/${user.email}`).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="overflow-x-auto mt-4">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <MyOrder key={order._id} order={order} index={index} refetch={refetch}></MyOrder>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;