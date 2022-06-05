import React, { useEffect, useState } from 'react';
import UsersRow from './UsersRow';

const MakeAdmin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('https://lit-cove-72616.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    console.log(users);
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <tbody>
                    {
                        users?.map(user=><UsersRow key={user._id} user={user}></UsersRow>)
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;