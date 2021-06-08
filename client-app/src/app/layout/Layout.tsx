import { useStore } from '../stores/Store'
import { Route, Switch } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Main from '../features/Admin/Main'
import Status from './Status'
import Orders from './Orders'
import Projects from './Projects'
import SideBar from './SideBar'
import City from './City'
import ShippingCompany from './ShippingCompany'
import Operator from './Operator'
import Product from './Product'
import PrivateAdminRoute from '../security/PrivateAdminRoute'
import PublicRoute from '../security/PublicRoute'

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
                        <Route path="/products" component={Product}/>
                    </Switch>
                <Footer/>
            </div>
    )
}

export default Layout;
