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
                        <td>{product.name}</td>
                         <td>{product.description}</td>
                         <td>{product.quantity}</td>
                         {/* {if(product.project== undefined)} */}
                         {/* {!product.project && <td>{product.project.project_Type}</td> />}
                         
                         {/* {console.log(product.project.project_Type)} */}
                         {/* <td>{product.ProjectId}</td>  */}
                         {console.log(product.project?.project_Type)}
                         <td>{product.project?.project_Type}</td>
                        <td>
                            <div>
                                <Link to="/Products/EditProduct" onClick={()=> selectProduct(product.id) } className="btn btn-info mr-2" >Edit</Link>
                                <button className="btn btn-danger" onClick={()=> deleteProduct(product.id) } >Delete</button>
                            </div>
                        </td>
                    </tr>)}
            )}
        </>
    );
}

export default ProductRow;