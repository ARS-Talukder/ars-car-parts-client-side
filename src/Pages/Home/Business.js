import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faStar, faTruck } from '@fortawesome/free-solid-svg-icons'

const Business = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-orange-500 font-bold mb-8 underline'>Business Summary</h2>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faPeopleGroup} style={{"height":"50px","color":"blue"}} />
                <h2 className='text-xl ml-8'>We Served 100+ CUSTOMERS</h2>
            </div>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faTruck} style={{"height":"50px","color":"black"}} />
                <h2 className='text-xl ml-8'>We Served Secured Shipment</h2>
            </div>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faStar} style={{"height":"50px","color":"orange"}} />
                <h2 className='text-xl ml-8'>We Have 33K+ Review</h2>
            </div>

        </div>
    );
};

export default Business;