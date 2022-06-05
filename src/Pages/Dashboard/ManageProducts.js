import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://lit-cove-72616.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const handleDelete=id=>{
        const proceed=window.confirm('Do You want to delete?')
        if(proceed){
            const url=`https://lit-cove-72616.herokuapp.com/products/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    const remaining=products.filter(p=>p._id!==id);
                    setProducts(remaining)
                }
            })
        }
    }
    return (
        <div>
            <h2 className='text-xl font-bold underline'>All Products</h2>
            {
                products.map(product=>
                <h2 className='text-xl my-4 font-bold text-blue-500'>
                    {product.name}
                    <span onClick={()=>handleDelete(product._id)} className='btn ml-4'>delete</span>
                </h2>)
            }
        </div>
    );
};

export default ManageProducts;