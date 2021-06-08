import React, { useEffect } from 'react'
import { RouteProps, Switch } from 'react-router';
import OperatorHeader from './OperatorHeader';
import Footer from '../../layout/Footer';
import { useStore } from './../../stores/Store';

interface Props extends RouteProps {
}

const OperatorLayout = ({children}: Props) => {
    const {commonStore: {isRoles} } = useStore();
    useEffect(() => {
      isRoles(["Operator"]) && document.body.classList.add('layout-3');
      !isRoles(["Operator"]) && document.body.classList.remove('layout-3');
    }, [isRoles])
    return (
       <div className="main-wrapper container">
           <div className="navbar-bg"></div>
            <OperatorHeader />
                <Switch>
                   {children}
                </Switch>
            <Footer/>
       </div>
    )
}

export default OperatorLayout
