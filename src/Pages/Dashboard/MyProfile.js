import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { TiEdit } from "react-icons/ti";
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleNameChange = () => {
        let proceed = window.prompt("Enter Your New Name");
        if (proceed === null || proceed === "") {
            return
        }
        else {
            updateProfile({ displayName: proceed });
        }
    }
    return (
        <div>
            <div className='flex justify-center'>
                <div className="border-2 rounded border-gray-500 p-1">
                    <div className="w-52 h-48 rounded-full">
                        <img className='h-full w-full' src="https://i.ibb.co/ctFS6Qt/login-Avatar.png" alt='Profile_Picture' />
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Your Name</th>
                            <th>Email</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='px-4 flex items-center'>
                                <span>{user?.displayName}</span>
                                <button className='ml-2' onClick={handleNameChange}><span className='text-3xl text-blue-800'><TiEdit></TiEdit></span></button>
                            </td>
                            <td>{user?.email} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProfile;