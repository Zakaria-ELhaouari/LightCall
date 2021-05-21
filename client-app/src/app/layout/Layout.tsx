
import React from 'react'
import { Route, Switch } from 'react-router'
import PrivateAdminRoute from '../security/PrivateAdminRoute'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Status from './Status'
import Orders from './Orders'
import SideBar from './SideBar'
import Operator from './Operator'


const Layout = () => {
    return (
        <div className="main-wrapper">
        <div className="navbar-bg"></div>
            <Header/>
            <SideBar/>
                <Switch>
                    <PrivateAdminRoute exact path="/dashboard" component={Main} />
                    <Route exact path="/orders" component={Orders} />
                    <Route  component={Status} />
                    <Route path="/operateur" component={Operator}/>
                </Switch>
            <Footer/>
        </div>
    )
}

export default Layout;
