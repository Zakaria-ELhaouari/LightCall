import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../stores/Store";
import ProductRow from "./ProductRow";

export default observer(function ProductList(){
    const {productStore} = useStore();
    useEffect(()=>{
        productStore.loadProducts()
    } , [productStore])
    if(productStore.loadingInitial) return(<div>Loading...</div>)
    return(
        <div>
           {/* <Link to="/cities/creatCity" className="btn btn-icon icon-left btn-primary"> <i className="fa fa-plus" > </i> Add City  </Link> */}
         <div className="card mt-4">
                  <div className="card-body">
                    {/* <CityForm/> */}
                    <table className="table">
                      <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Descrition</th>
                            <th scope="col">Quantity</th>
                            {/* <th scope="col">Project</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <ProductRow/>
                      </tbody>
                    </table>
                  </div>
               
                </div>  
        </div>
    )
})