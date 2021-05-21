import React from 'react'
import { Link } from 'react-router-dom'
import { useStore } from './../stores/Store';

const Header = () => {

    const { userStore: {logout, user} } = useStore();
return (
<nav className="navbar navbar-expand-lg main-navbar">
    <form className="form-inline mr-auto">
        <ul className="navbar-nav mr-3">
            <li><Link to="#" data-toggle="sidebar" className="nav-link nav-link-lg"><i className="fas fa-bars"></i></Link>
            </li>
            <li><Link to="#" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i
                        className="fas fa-search"></i></Link></li>
        </ul>
        <div className="search-element">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250" />
            <button className="btn" type="submit"><i className="fas fa-search"></i></button>
            <div className="search-backdrop"></div>
            <div className="search-result">
                <div className="search-header">
                    Histories
                </div>
                <div className="search-item">
                    <Link to="#">How to hack NASA using CSS</Link>
                    <Link to="#" className="search-close"><i className="fas fa-times"></i></Link>
                </div>
                <div className="search-item">
                    <Link to="#">Kodinger.com</Link>
                    <Link to="#" className="search-close"><i className="fas fa-times"></i></Link>
                </div>
                <div className="search-item">
                    <Link to="#">#Stisla</Link>
                    <Link to="#" className="search-close"><i className="fas fa-times"></i></Link>
                </div>
                <div className="search-header">
                    Result
                </div>
                <div className="search-item">
                    <Link to="#">
                        <img className="mr-3 rounded" width="30" src="../assets/img/products/product-3-50.png"
                            alt="product"/>
                        oPhone S9 Limited Edition
                    </Link>
                </div>
                <div className="search-item">
                    <Link to="#">
                        <img className="mr-3 rounded" width="30" src="../assets/img/products/product-2-50.png"
                            alt="product"/>
                        Drone X2 New Gen-7
                    </Link>
                </div>
                <div className="search-item">
                    <Link to="#">
                        <img className="mr-3 rounded" width="30" src="../assets/img/products/product-1-50.png"
                            alt="product"/>
                        Headphone Blitz
                    </Link>
                </div>
                <div className="search-header">
                    Projects
                </div>
                <div className="search-item">
                    <Link to="#">
                        <div className="search-icon bg-danger text-white mr-3">
                            <i className="fas fa-code"></i>
                        </div>
                        Stisla Admin Template
                    </Link>
                </div>
                <div className="search-item">
                    <Link to="#">
                        <div className="search-icon bg-primary text-white mr-3">
                            <i className="fas fa-laptop"></i>
                        </div>
                        Create a new Homepage Design
                    </Link>
                </div>
            </div>
        </div>
    </form>
    <ul className="navbar-nav navbar-right">
        <li className="dropdown"><Link to="#" data-toggle="dropdown"
                className="nav-link dropdown-toggle nav-link-lg nav-link-user">
                <img alt="avatar us1" src="../assets/img/avatar/avatar-1.png" className="rounded-circle mr-1"/>
                <div className="d-sm-none d-lg-inline-block">Hi, {user?.firstName} {user?.lastName}</div>
            </Link>
            <div className="dropdown-menu dropdown-menu-right">
                <div className="dropdown-title">Logged in 5 min ago</div>
                <Link to="features-profile.html" className="dropdown-item has-icon">
                    <i className="far fa-user"></i> Profile
                </Link>
                <Link to="features-settings.html" className="dropdown-item has-icon">
                    <i className="fas fa-cog"></i> Settings
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="#" onClick={logout} className="dropdown-item has-icon text-danger">
                    <i className="fas fa-sign-out-alt"></i> Logout
                </Link>
                
            </div>
        </li>
    </ul>
</nav>
)
}

export default Header