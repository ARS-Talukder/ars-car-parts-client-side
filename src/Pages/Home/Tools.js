import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Tool from './Tool';

const Tools = () => {
    const {data:tools, isLoading}=useQuery("allTools",()=>fetch('https://lit-cove-72616.herokuapp.com/products').then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    
    return (
        <div className='mt-4'>
            <h2 className='text-2xl text-orange-500 font-bold mb-4 underline'>Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;