import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite";
import Lottie from "lottie-react";
import loaderAnimation from "../../assets/loader.json";
import {  useStore } from '../../stores/Store'
 import OrderRow from './OrderRow';


function OrdersList() {

     const {orderStore} = useStore();

useEffect(()=>{
    orderStore.loadOrders()
} , [orderStore])


 if(orderStore.loadingInitial) return( <div className='d-flex justify-content-center' > <Lottie   animationData={loaderAnimation} /> </div>)

    return (
        <div>
                   
         <div className="card mt-4">

                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Order</th>
                          <th scope="col">Project</th>
                          <th scope="col">Customer</th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Actions</th>

                        </tr>
                      </thead>
                      <tbody>
                      
                     <OrderRow/>

                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    );
}

export default observer(OrdersList) ;