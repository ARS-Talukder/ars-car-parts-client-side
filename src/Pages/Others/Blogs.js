import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-orange-400 mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-left text-2xl text-red-600 font-bold'>Question-1: How will you improve the performance of a React Application?</h4>
                <h5 className='text-left text-blue-800  font-bold'>Answer : I can improve react application by optimizing picture size, Using Loading Components, Using link tag at the place of a tag</h5>

            </div>
            <div className='bg-orange-400 mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-left text-2xl text-red-600 font-bold'>Question-3:  How does prototypical inheritance work?</h4>
                <h5 className='text-left text-blue-800  font-bold'>Answer : The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</h5>

            </div>
            <div className='bg-orange-400 mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-left text-2xl text-red-600 font-bold'>Question-4:  Why you do not set the state directly in React?</h4>
                <h5 className='text-left text-blue-800  font-bold'>Answer : State means The value can be changed. If we set state directly by (...). The value will not able to change next time by clicking any other button which is connected with that state.</h5>

            </div>
            
            <div className='bg-orange-400 mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-left text-2xl text-red-600 font-bold'>Question-5: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                <h5 className='text-left text-blue-800  font-bold'>Answer : First we will take a blank array. Then, we will run forEach to products array. Then We will get each product. After that We will write if(product.name==="Shadhin"). Then, we will  push that product to that blank array</h5>

            </div>
            <div className='bg-orange-400 mx-auto my-4 px-4 py-2' style={{ width: '90%' }}>
                <h4 className='text-left text-2xl text-red-600 font-bold'>Question-6: What is a unit test? Why should write unit tests?</h4>
                <h5 className='text-left text-blue-800  font-bold'>Answer : Unit Testing is the process of checking small pieces of code to deliver information early. Unit tests save time and money. Well-written unit tests act as documentation for a code. It simplifies the debugging process</h5>

            </div>
            
            

        </div>
    );
};

export default Blogs;