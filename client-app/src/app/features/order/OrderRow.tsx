 import { observer } from 'mobx-react-lite';
import React , {useState , SyntheticEvent} from 'react';
import { Button } from "semantic-ui-react"
import { useStore } from '../../stores/Store';



function OrderRow() {

  const [target, setTarget] = useState('');
   const {orderStore} = useStore();
   
   const {orders , deleteOrder , loading} = orderStore

   const handleReservationDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
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
           
            <Button  loading={loading && target === order.id} className="btn btn-danger" color='red' onClick={(e)=> handleReservationDelete( e ,order.id) } content="Delete" />
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

 export default observer(OrderRow);