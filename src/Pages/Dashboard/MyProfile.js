import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    console.log(user)
    const handleUpdate = async event => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const phoneNumber = event.target.phone.value;
        const photoURL = event.target.photo.value;
        console.log(phoneNumber,photoURL)
        await updateProfile({ displayName,  phoneNumber,photoURL });
        alert('Updated profile');
    }
    return (
        <div>
            <h2 className='my-4 text-2xl font-bold text-red-400'>User Information</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>LinkedIn profie link</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>

                            <td>{user?.displayName}</td>
                            <td>{user?.email}</td>
                            <td>{user?.phoneNumber || "not Available"}</td>
                            <td>{user?.photoURL || "not Available"}</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            <h2 className='my-4 text-2xl font-bold text-red-400'>Update Information</h2>
            <form onSubmit={handleUpdate} action="">
                <input type="text" placeholder="Update Your Name" name='name' class="input input-bordered w-full max-w-xs my-2" />
                <br />
                <input type="text" placeholder="Update or Give Phone Number" name='phone' class="input input-bordered w-full max-w-xs" />
                <br />
                <input type="text" placeholder="LinkedIn profile link" name='photo' class="input input-bordered w-full max-w-xs my-2" />
                <br />
                <input type="submit" value="Update" class="btn w-full max-w-xs mt-2" />

            </form>
        </div>
    );
};

export default MyProfile;