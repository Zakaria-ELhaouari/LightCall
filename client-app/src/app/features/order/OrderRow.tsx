 import React from 'react';

import { useStore } from '../../stores/Store';



function OrderRow() {

   const {orderStore} = useStore();

   const {orders , deleteOrder} = orderStore



    return ( 
        <>
       
        {orders.map((order)=> {
         return ( 
        <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.project?.project_Type}</td>
        <td>{order.customer}</td>
        <td>{order.product}</td>
        <td>{order.price}</td>
        <td>
          <div>
           
            <button className="btn btn-danger" onClick={()=> deleteOrder(order.id) } >Delete</button>
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default OrderRow;