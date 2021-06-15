import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import ProductForm from "../features/product/ProductForm";
import ProductList from "../features/product/ProductList";

const Product = () => {
    const location = useLocation();
    return (
        <div className="main-content">
        <section className="section">
        <div className="section-header">
            <h1>Products</h1>
          </div> 
          <Switch>
           <Route exact path="/Products" component={ProductList} />
           <Route key={location.key} path={['/Products/creatProduct' , '/Products/:id']} component={ProductForm} />
         </Switch>
        </section>
      </div>
      
    )
}
export default Product