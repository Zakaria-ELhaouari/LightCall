 import { observer } from 'mobx-react-lite';
import React , {useState , SyntheticEvent} from 'react';
import { useStore } from '../../stores/Store';



function OrderRow() {

  const [target, setTarget] = useState('');
   const {orderStore} = useStore();
   
   const {orders , deleteOrder , loading} = orderStore

   const handleOrderDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(id);
    deleteOrder(id)
}



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
            <button  className={`btn btn-danger ${loading && target === order.id ? "btn-progress" : ""}`} color='red' onClick={(e)=> handleOrderDelete( e ,order.id) }>Delete</button>
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default observer(OrderRow);