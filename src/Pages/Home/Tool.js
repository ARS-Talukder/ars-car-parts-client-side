import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id,img,name,sd,price,available,minimum}= tool;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div className='border p-2'>
           <img style={{"width":"100%", "height":"400px"}} src={img} alt="" />
           <h4 className='text-left mt-3'><span className='font-bold text-red-500'>Name:</span> {name}</h4>
           <h4 className='text-left'><span className='font-bold text-red-500'>Description:</span>  {sd}</h4>
           <h4 className='text-left'><span className='font-bold text-red-500'>Minimum Order Quantity:</span> {minimum}</h4>
           <h4 className='text-left'><span className='font-bold text-red-500'>Available Quantity:</span> {available}</h4>
           <h4 className='text-left mb-3'><span className='font-bold text-red-500'>Price/unit:</span> {`${price} BDT`}</h4>
           
           <button onClick={() => navigateToInventory(_id)} className='btn btn-block btn-error  btn-outline'>Order</button>
           
        </div>
    );
};

export default Tool;<h2>Tool</h2>