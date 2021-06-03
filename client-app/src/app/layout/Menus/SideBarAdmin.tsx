import React from 'react'
import { Link } from 'react-router-dom';


const SideBarAdmin = () => {
    // const {layoutStore: {toggleDropDownActive}} = useStore();
    return (
        <>
        <ul className="sidebar-menu">
            <li className="menu-header">Dashboard</li>
            <li className="">
                <Link to="/Admindashboard" className="nav-link" id="dashboard" ><i className="fas fa-user-secret"></i> <span>General Dashboard</span></Link>
            </li>
            <li className="">
                <Link to="/subscriptionDash" className="nav-link" id="subscriptionDash" ><i className="fas fa-user-secret"></i> <span>Subsriptions Statistics</span></Link>
            </li>
            <li className="menu-header">System Management</li>
            <li className="">
                <Link to="/manageOperators" className="nav-link" id="manageOperators" ><i className="fas fa-user-secret"></i> <span>Manage Operators</span></Link>
            </li>
            <li className="">
                <Link to="/ivrSystem" className="nav-link" id="ivrSystem" ><i className="fas fa-user-secret"></i> <span>IVR system</span></Link>
            </li>
            <li className="">
                <Link to="/users" className="nav-link" id="users" ><i className="fas fa-user-secret"></i> <span>Users</span></Link>
            </li>
            <li className="">
                <Link to="/subPlans" className="nav-link" id="subPlans" ><i className="fas fa-user-secret"></i> <span>Subscription plans</span></Link>
            </li>
            <li className="">
                <Link to="/shipping" className="nav-link" id="shipping" ><i className="fas fa-user-secret"></i> <span>Shipping</span></Link>
            </li>
            <li className="">
                <Link to="/invoices" className="nav-link" id="invoices" ><i className="fas fa-user-secret"></i> <span>Invoices</span></Link>
            </li>
    </ul>
    <div className="mt-4 mb-4 p-3 hide-sidebar-mini">
              <Link to="/settings" id="settings" className="btn btn-primary btn-lg btn-block btn-icon-split">
                <i className="fas fa-rocket"></i> Settings
              </Link>
    </div>
    </>
    )
}

export default SideBarAdmin
