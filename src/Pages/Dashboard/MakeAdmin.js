import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery("allProducts", () => fetch('http://localhost:5000/user').then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-blue-500 text-2xl font-bold my-4 underline'>Admin Access</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>User Email</th>
                        <th>Give Access</th>
                        <th>Remove Access</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <UsersRow key={user._id} user={user} refetch={refetch}></UsersRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;