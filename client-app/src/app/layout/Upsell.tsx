import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import UpsellForm from "../features/upsell/UpsellForm";
import UpsellList from "../features/upsell/UpsellList";
const Upsell = () =>{
    const location = useLocation();

    return(
        <div className="main-content">
            <section className="section">
            <div className="section-header">
                <h1>Upsell</h1>
            </div> 
            <Switch>
            <Route exact path="/Upsell" component={UpsellList} />
            <Route key={location.key} path={['/Upsell/creatUpsell' , '/Upsell/:id']} component={UpsellForm} />
            </Switch>
            </section>
        </div>
    )
}

export default Upsell