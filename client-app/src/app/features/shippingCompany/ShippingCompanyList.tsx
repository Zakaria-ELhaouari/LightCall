import { observer } from 'mobx-react-lite';
import React, { useEffect  } from 'react'
import { Link } from 'react-router-dom';
import { useStore } from '../../stores/Store'
import ShippingCompanyRow from './ShippingCompanyRow';

export default observer(function ShippingCompanyList(){
    const {shippingCompanyStore} = useStore();

    useEffect(()=>{
        shippingCompanyStore.laodShippingCompanys();
    } , [shippingCompanyStore])

    if(shippingCompanyStore.loadingInitial) return(<div>Loading...</div>)
    return(
        <div>
           <Link to="/shippingCompany/creat_shipping_Company" className="btn btn-icon icon-left btn-primary"> <i className="fa fa-plus" > </i> Add Shipping Company  </Link>
         <div className="card mt-4">
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Api Client</th>
                            <th scope="col">cities</th>
                            <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                          <ShippingCompanyRow/>
                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    )
})