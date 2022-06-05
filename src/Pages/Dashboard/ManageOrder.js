import React from 'react';

const ManageOrder = ({order}) => {
    return (
        <div>
           <h2>Client Name: {order.clientName}</h2>
        </div>
    );
};

export default ManageOrder;