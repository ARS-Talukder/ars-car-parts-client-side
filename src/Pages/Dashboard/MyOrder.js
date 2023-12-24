import React from 'react';
import { toast } from 'react-toastify';

const MyOrder = ({ order, index, refetch }) => {
    const total = parseInt(order.orderAmount) * parseFloat(order.productPrice);
    const handleCancelAppointment = () => {
        const proceed = window.confirm("Do You want to delete order?");
        if (proceed) {
            fetch(`https://ars-car-parts-server-side.onrender.com/order-delete?id=${order._id}`, {
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
            <td>{index + 1}</td>
            <td>{order.productName}</td>
            <td>{order.orderAmount}</td>
            <td>{total}</td>
            <td>
                <button onClick={handleCancelAppointment} className='btn btn-sm btn-success px-2'>Cancel</button>
            </td>
        </tr>
    );
};

export default MyOrder;