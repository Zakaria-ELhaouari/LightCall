import React from 'react'
import { Route, Switch } from 'react-router'
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
                        <Route exact path="/dashboard" component={Main} />
                    </Switch>
                <Footer/>
            </div>
        
    )
}

export default Layout
