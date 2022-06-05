import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile mt-4">
            <input id="dashboard-side-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col ">
                <h2 className='text-3xl font-bold text-orange-400 underline'>Welcome To THE Dashboard</h2>

                {/* Outlet is the Part of Nested Routes */}
                <Outlet></Outlet>


                {/* <!-- Page content here --> */}


            </div>
            <div className="drawer-side">
                <label for="dashboard-side-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {!admin && <li><Link to="/dashboard/myorders/:email">My Orders</Link></li>}
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>

                    {!admin && <li><Link to="/dashboard/addareview">Add A Review</Link></li>}
                    {admin && <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>}
                    {admin && <li><Link to="/dashboard/manageproducts/:id">Manage Products</Link></li>}
                    {admin && <li><Link to="/dashboard/makeadmin">Make Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>}


                </ul>

            </div>
        </div>
    );
};

export default Dashboard;