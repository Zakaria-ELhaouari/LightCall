import { RouteProps } from 'react-router'
import Footer from './Footer'
import Header from './Header'
import SideBar from './SideBar'

interface Props extends RouteProps {
}


const AdminLayout = ({ children }: Props) => {

    return (
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <Header/>
                <SideBar/>

                    {children}

                <Footer/>
            </div>
    )
}

export default AdminLayout;
