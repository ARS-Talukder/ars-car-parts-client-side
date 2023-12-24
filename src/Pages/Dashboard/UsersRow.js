import { signOut } from 'firebase/auth';
import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    
    const makeAdmin = () => {
        let proceed = window.prompt("If you want want make him Admin, Please write 'admin'");
        if (proceed === null || proceed === "") {
            return
        }
        else if (proceed === 'admin') {
            fetch(`https://ars-car-parts-server-side.onrender.com/user/admin/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refetch();
                    toast.success("Admin Added Successfully")
                })
        }
        else {
            return
        }
    }
    const removeAdmin = () => {
        let proceed = window.prompt("If you want want remove him from Admin, Please write 'remove'");
        if (proceed === null || proceed === "") {
            return
        }
        else if (proceed === 'remove') {
            fetch(`https://ars-car-parts-server-side.onrender.com/user/remove/${email}`, {
                method: 'PUT',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    refetch();
                    toast.success("Admin Removed Successfully")
                })
        }
        else {
            return
        }

    }
    return (
        <tr>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-sm btn-secondary'>Make Admin</button>}</td>
            <td>{role === 'admin' && <button onClick={removeAdmin} className='btn btn-sm'>Remove Admin</button>}</td>

        </tr>
    );
};

export default UsersRow;