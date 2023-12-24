import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddAProduct = () => {
    const navigate = useNavigate();
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const sd = event.target.sd.value;
        const price = event.target.price.value;
        const minimum = event.target.minimum.value;
        const available = event.target.available.value;
        const products = { name, img, sd, price, minimum, available };
        fetch('https://ars-car-parts-server-side.onrender.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
                toast.success("Product Added");
            })

    }
    return (
        <div>
            <h2 className='my-4 text-xl text-blue-400 font-bold'>Add New Product In Database</h2>
            <form onSubmit={handleAddProduct} action="">
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <input type="text" name='img' placeholder="Image URL" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <input type="text" name='sd' placeholder="Short Description" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <input type="text" name='price' placeholder="Product Price" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <input type="text" name='minimum' placeholder="Minimum Quantity" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />
                <input type="text" name='available' placeholder="Available Quantity" className="input input-bordered w-full max-w-xs mb-2" required />
                <br />

                <input type="submit" value="Add Product" className="btn w-full max-w-xs mt-2" />



            </form>
        </div>
    );
};

export default AddAProduct;