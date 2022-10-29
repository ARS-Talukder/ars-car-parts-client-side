import React from 'react';
import Footer from '../Home/Footer';

const Blogs = () => {
    return (
        <div>
            <div className='border-2 mx-auto my-4 px-4 py-6' style={{ width: '90%' }}>
                <img className='h-52 w-52 mx-auto' src="https://i.ibb.co/7Ykpkwy/air-filter.jpg" alt="air_filter" />
                <h4 className='text-center text-2xl text-red-600 mt-3 font-bold'>Let's talk about Air Filter</h4>
                <h5 className='text-left mt-3 text-blue-800  font-bold'>An engine air filter prevents your engine from being damaged with dirt, dust, sand, and other contaminants, but if it becomes clogged, your engine air filter can start to negatively impact your vehicle performance. A cabin air filter is used to decontaminate the air that your vehicle brings into its cabin</h5>

            </div>

            <div className='border-2 mx-auto my-4 px-4 py-6' style={{ width: '90%' }}>
                <img className='h-52 w-52 mx-auto' src="https://image.made-in-china.com/202f0j00eSnQERpFZKzM/Auto-Radiator-for-Mercedes-W211-Auto-Parts-2115001302-Radiator-for-PE6.jpg" alt="Radiator" />
                <h4 className='text-center text-2xl text-red-600 mt-3 font-bold'>What does Radiator do in the car?</h4>
                <h5 className='text-left mt-3 text-blue-800  font-bold'>Radiators work to eliminate heat from the engine. The process begins when the thermostat in the front of the engine detects excess heat. Then coolant and water get released from the radiator and sent through the engine to absorb this heat</h5>

            </div>

            <div className='border-2 mx-auto my-4 px-4 py-6' style={{ width: '90%' }}>
                <img className='h-52 w-52 mx-auto' src="https://i.ibb.co/W36SPwx/looking-glass.jpg" alt="looking_glass" />
                <h4 className='text-center text-2xl text-red-600 mt-3 font-bold'>Importance of Looking Glass</h4>
                <h5 className='text-left mt-3 text-blue-800  font-bold'>Looking glass is too much if overtaking is required, but overtaking is not good. Looking glass is needed when turning right or left. When slowing down or stopping the car completely, look in the looking glass to see if any car or anything else is coming from the vicinity</h5>

            </div>

            <Footer></Footer>
            
        
        </div>
    );
};

export default Blogs;