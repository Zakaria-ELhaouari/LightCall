
import React from 'react'
import { Route, Switch } from 'react-router'
import PrivateAdminRoute from '../security/PrivateAdminRoute'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Status from './Status'
import Orders from './Orders'
import Projects from './Projects'
import SideBar from './SideBar'
import City from './City'
import ShippingCompany from './ShippingCompany'
import Operator from './Operator'




const Layout = () => {
    return (
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <Header/>
                <SideBar/>
                    <Switch>
                        <Route exact path="/dashboard" component={Main} />
                        <Route exact path="/orders" component={Orders} />
                        <Route path="/status" component={Status} /> 
                        {/* <Route path="/operateur" component={Operateur}/> */}
                        <Route path="/shippingCompany" component={ShippingCompany}/>
                        <Route path="/cities" component={City}/>
                        <Route  path="/projects" component={Projects} />
                        <Route path="/operateur" component={Operator}/>
                        
                    </Switch>
                <Footer/>
            </div>
    )
}

export default Layout;
