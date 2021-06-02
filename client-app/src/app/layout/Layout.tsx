import { Route, Switch } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Status from './Status'
import Orders from './Orders'
import Projects from './Projects'
import SideBar from './SideBar'
import PrivateAdminRoute from '../security/PrivateAdminRoute'
// import PrivateAdminRoute from '../security/PrivateAdminRoute'


const Layout = () => {
 

    return (
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <Header/>
                <SideBar/>
                    <Switch>
                        <PrivateAdminRoute exact path="/dashboard" component={Main} />
                        <Route exact path="/orders" component={Orders} />
                        <Route  path="/projects" component={Projects} />
                        <Route  component={Status} />
                        
                    </Switch>
                <Footer/>
            </div>
    )
}

export default Layout
