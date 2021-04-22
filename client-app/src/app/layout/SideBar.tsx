import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">LightCall</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">LC</a>
          </div>
          <ul className="sidebar-menu">
              <li className="menu-header">Dashboard</li>
              <li className="nav-item dropdown">
                {/* <a href="#" className="nav-link has-dropdown"></a> */}
                <Link to="/dashboard" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></Link>
                <ul className="dropdown-menu">
                  <li>
                    {/* <a className="nav-link" href="index-0.html">General Dashboard</a> */}
                    <Link to="/login" className="nav-link" >Login</Link>
                  </li>
                  <li className="active"><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                </ul>
              </li>
            </ul>

            <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
              <a href="https://getstisla.com/docs" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <i className="fas fa-rocket"></i> Documentation
              </a>
            </div>
        </aside>
      </div>
    )
}

export default SideBar
