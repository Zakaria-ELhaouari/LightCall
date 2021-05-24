import React from 'react'

import OrderList from '../features/order/OrdersList'


const Main = () => {
    return (
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Orders</h1>
          </div> 
   
   <OrderList/>

        </section>
      </div>
    )
}

export default Main
