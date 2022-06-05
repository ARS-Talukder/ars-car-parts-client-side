import React from 'react';

const UsersRow = ({user}) => {
    const {email,role}=user;
    const makeAdmin=()=>{
        fetch(`https://lit-cove-72616.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <tr>
            
                <td>{email}</td>
                <td>{role!=='admin'&&<button onClick={makeAdmin} className='btn'>make admin</button>}</td>
                
            </tr>
        </div>
    );
};

export default UsersRow;