import { observer } from 'mobx-react-lite';
import React from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SideBar from '../layout/SideBar';
import { useStore } from '../stores/Store';

interface Props extends RouteProps {
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}


const PivateLayout = ({component: Component, ...rest}: Props) => {
    const {commonStore: {isRoles}, userStore: {isLoggedIn}} = useStore();
    return (
        <div className="main-wrapper">
        <div className="navbar-bg"></div>
            <Header/>
            <SideBar/>
                <Route 
                    {...rest}
                    render={(props) =>  isRoles(["Admin"]) && isLoggedIn ? <Component {...props} /> : <Redirect to='/RestrictedAccess' />}
                />
                            
            <Footer/>
        </div>
    )
}

export default observer(PivateLayout) ;