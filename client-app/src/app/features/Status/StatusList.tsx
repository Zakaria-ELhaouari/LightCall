import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Link } from 'react-router-dom'
import {  useStore } from '../../stores/Store'
import StatusRow from './StatusRow';


function StatusList() {

    const {statusStore} = useStore();

useEffect(()=>{
    statusStore.loadStatus()
} , [statusStore])


if(statusStore.loadingInitial) return(<div>Loading...</div>)

    return (
        <div>
                   <Link to="/Status/AddStatus" className="btn btn-icon icon-left btn-primary"> <i className="fa fa-plus" > </i> Add Status  </Link>
         <div className="card mt-4">

                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                         
                          <th scope="col">Name</th>
                          <th scope="col">Piority</th>
                          <th scope="col">Actions</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                      
                      <StatusRow  />

                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    );
}

export default observer(StatusList) ;