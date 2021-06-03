import React, { useEffect } from 'react'
import { Switch } from 'react-router';
import PrivateOperatorRoute from '../../security/PrivateOperatorRoute';
import OperatorHeader from './OperatorHeader';
import OperatorDashoard from './OperatorDashoard';
import Footer from '../../layout/Footer';

const OperatorLayout = () => {
    useEffect(() => {
        document.body.classList.add('layout-3');
    }, [])
    return (
       <div className="main-wrapper container">
           <div className="navbar-bg"></div>
            <OperatorHeader />
                <Switch>
                    <PrivateOperatorRoute exact path="OperatorDashboard" component={OperatorDashoard} />
                </Switch>
            <Footer/>
       </div>
    )
}

export default OperatorLayout
