import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageOrder from './ManageOrder';

const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery("allOrders", () => fetch('http://localhost:5000/orders2').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    // console.log(orders)
    return (
        <div className="overflow-x-auto">
            <h2 className='text-blue-500 text-2xl font-bold my-4 underline'>All Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Amount</th>
                        <th>Total Price</th>
                        <th>Cancel Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) => <ManageOrder key={order._id} order={order} index={index} refetch={refetch}></ManageOrder>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;
