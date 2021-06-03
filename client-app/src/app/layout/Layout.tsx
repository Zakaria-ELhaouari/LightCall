import { useStore } from '../stores/Store'
import { Route, Switch } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Main from '../features/Admin/Main'
import Status from './Status'
import Orders from './Orders'
import Projects from './Projects'
import SideBar from './SideBar'
import PrivateAdminRoute from '../security/PrivateAdminRoute'
import PublicRoute from '../security/PublicRoute'

const Layout = () => {

    return (
        <div className="main-wrapper">
            <div className="navbar-bg"></div>
            <Header/>
            <SideBar/>
                <Switch>
                    <PrivateAdminRoute exact path="/Admindashboard" component={Main} />
                    <PublicRoute exact path="/dashboard" component={Main} />
                    <Route exact path="/orders" component={Orders} />
                    <Route  path="/projects" component={Projects} />
                    <Route  component={Status} />
                    
                </Switch>
            <Footer/>
        </div>
    )
}

export default Layout;
