import React, { useEffect } from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';
import OperatorHeader from '../features/Operator/OperatorHeader';
import { useStore } from '../stores/Store';

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const PrivateOperatorRoute = ({component: Component, ...rest}: Props) => {
    const {commonStore: {isRoles}, userStore: {isLoggedIn}} = useStore();
    useEffect(() => {
        document.body.classList.add('layout-3');
    }, [])
    return (

        <div className="main-wrapper container">
        <div className="navbar-bg"></div>
                <OperatorHeader />
                <Route 
                {...rest}
                render={(props) => isRoles(["Operator"]) && isLoggedIn ? <Component {...props} /> : <Redirect to='/RestrictedAccess' />}
            />
        </div>
    )
}

export default PrivateOperatorRoute
