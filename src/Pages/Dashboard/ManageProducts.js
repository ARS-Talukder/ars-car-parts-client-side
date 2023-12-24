import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const { data: products, isLoading, refetch } = useQuery("allProducts", () => fetch('https://ars-car-parts-server-side.onrender.com/products').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-blue-500 text-2xl font-bold my-4 underline'>All Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <ManageProduct key={product._id} index={index} product={product} refetch={refetch}></ManageProduct>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;