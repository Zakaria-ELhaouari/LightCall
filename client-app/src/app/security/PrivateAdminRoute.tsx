import { observer } from 'mobx-react-lite';
import React from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';
import { useStore } from '../stores/Store';


interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}


const PrivateAdminRoute = ({component: Component, ...rest}: Props) => {
    const {commonStore: {isRoles}, userStore: {isLoggedIn}} = useStore();
    return (
        <Route 
            {...rest}
            render={(props) =>  isRoles(["Admin"]) && isLoggedIn ? <Component {...props} /> : <Redirect to='/RestrictedAccess' />}
        />
    )
}

export default observer(PrivateAdminRoute) ;
