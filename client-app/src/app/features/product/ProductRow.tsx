import React from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../../stores/Store';



function ProductRow() {

   const {productStore} = useStore();

   const {products , deleteProduct , selectProduct} = productStore;
    return ( 
        <>
            {products.map((product)=> {
                return ( 
                    <tr key={product.id}>
                        <td>{product.Name}</td>
                         <td>{product.Description}</td>
                         <td>{product.Quantity}</td>
                        {/* <td>
                            <div>
                                <Link to="/cities/Editcity" onClick={()=> selectCity(city.id) } className="btn btn-info mr-2" >Edit</Link>
                                <button className="btn btn-danger" onClick={()=> deleteCity(city.id) } >Delete</button>
                            </div>
                        </td> */}
                    </tr>)}
            )}
        </>
    );
}

export default ProductRow;