
import React from 'react'
import { Switch } from 'react-router'
import PrivateAdminRoute from '../security/PrivateAdminRoute'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import SideBar from './SideBar'

const Layout = () => {
    return (
        
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <Header/>
                <SideBar/>
                    <Switch>
                        <PrivateAdminRoute exact path="/dashboard" component={Main} />
                        
                    </Switch>
                <Footer/>
            </div>
        
    )
}

export default Layout;
