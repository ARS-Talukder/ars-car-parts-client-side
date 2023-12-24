import React from 'react';
import { toast } from 'react-toastify';

const ManageOrder = ({ order, index, refetch }) => {
    const total = parseInt(order.orderAmount) * parseFloat(order.productPrice);
    const handleCancelOrder = () => {
        const proceed = window.confirm("Do You want to delete order?");
        if (proceed) {
            fetch(`http://localhost:5000/order-delete?id=${order._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success("Your Order is Canceled");
                    refetch();
                })
        }
        else {
            return;
        }
    }
    return (
        <tr key={order._id}>
            <th>{index + 1}</th>
            <td>{order.clientName}</td>
            <td>{order.email}</td>
            <td>{order.productName}</td>
            <td>{order.orderAmount}</td>
            <td>{total}</td>
            <td><button onClick={handleCancelOrder} className='btn btn-sm btn-success'>cancel</button></td>
        </tr>
    );
};

export default ManageOrder;