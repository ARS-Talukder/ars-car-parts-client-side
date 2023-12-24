import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({ product, index, refetch }) => {
    const { name } = product;
    const handleDelete = id => {
        const proceed = window.confirm('Do You want to delete?')
        if (proceed) {
            const url = `https://ars-car-parts-server-side.onrender.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        toast.success("Product Deleted")
                    }
                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td><span onClick={() => handleDelete(product._id)} className='btn ml-4'>delete</span></td>

        </tr>
    );
};

export default ManageProduct;