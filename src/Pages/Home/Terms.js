import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointRight, faHandshakeSimple} from '@fortawesome/free-solid-svg-icons'

const Terms = () => {
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-orange-500 font-bold mb-8 underline'>Terms and Conditions</h2>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faHandPointRight} style={{"height":"40px","color":"red"}} />
                <h2 className='text-xl ml-8'>For Orders, You have to Login</h2>
            </div>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faHandPointRight} style={{"height":"40px","color":"red"}} />
                <h2 className='text-xl ml-8'>You Must Give All The Right Information</h2>
            </div>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faHandPointRight} style={{"height":"40px","color":"red"}} />
                <h2 className='text-xl ml-8'>Shipment Cost is Yours</h2>
            </div>
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faHandPointRight} style={{"height":"40px","color":"red"}} />
                <h2 className='text-xl ml-8'>Delivery Date can be Changed for Technical Issues</h2>
            </div>
            
            <div className='flex justify-center items-center border border-red-400 p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faHandPointRight} style={{"height":"40px","color":"red"}} />
                <h2 className='text-xl ml-8'>All The Payment Have to be Cleared</h2>
            </div>
            <div className='flex justify-center items-center p-2 font-bold mt-4'>
                <h2 className='text-xl ml-8'>If You Can Accept all those, Then <span className='text-blue-500'> WELCOME</span></h2>
            </div>
            <div className='flex justify-center items-center  p-2 font-bold mb-1'>
                <FontAwesomeIcon icon={faHandshakeSimple} style={{"height":"70px","color":"orange"}} />
            </div>
            

        </div>
    );
};

export default Terms;