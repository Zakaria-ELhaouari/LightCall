import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { useStore } from '../../stores/Store'
import OperateurRow from './OperateurRow';

export default observer(function OperateurList(){
    const {operateurStore} = useStore();
    useEffect(()=>{
      operateurStore.loadOperateurs()
    } , [operateurStore])
  if(operateurStore.loadingInitial) return(<div>Loading...</div>)
    return(
        <div>
         <div className="card mt-4">
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                            <th scope="col">lastName</th>
                            <th scope="col">firstName</th>
                            <th scope="col">email</th>
                            <th scope="col">status</th>
                            <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <OperateurRow/>
                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    )
})