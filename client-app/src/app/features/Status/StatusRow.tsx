import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Status } from '../../models/Status';
import { useStore } from '../../stores/Store';



function StatusRow() {
   
  
   const {statusStore} = useStore();

   const {selectStatus , deleteStatus , status} = statusStore

    return ( 
        <>
        {status.map((statu)=> {
          console.log(statu.statusPiority)
         return ( 
        <tr key={statu.id}>
        <td>{statu.statusType}</td>
        <td>{statu.statusPiority}</td>
        <td>
          <div>
            <Link to="/Status/EditStatus" onClick={()=> selectStatus(statu.id) } className="btn btn-info mr-2" >Edit</Link>
            <button className="btn btn-danger" onClick={()=> deleteStatus(statu.id) } >Delete</button>
          </div>
          </td>
      </tr>)}

        )}

     
      </>
    );
}

export default observer(StatusRow);