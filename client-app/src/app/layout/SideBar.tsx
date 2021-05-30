import React, {  MouseEvent, MouseEventHandler, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


const SideBar = () => {

const location = useLocation();
useEffect(() => {
  
  var navLink = document.getElementsByClassName("nav-link");
  if(navLink){
      for(var i = 0; i < navLink.length ; i++){
      if(navLink[i].id === location.pathname.replace('/', '') ){
          navLink[i].parentElement?.classList.add('active')
      }
      }
  }

}, [])


const toggleDropDownActive: MouseEventHandler<HTMLLIElement> = (event: MouseEvent<HTMLElement>) => {
  var navItems = document.getElementsByClassName("nav-item");
  if(navItems){
    for(var i = 0; i < navItems.length ; i++){
      event.currentTarget !== navItems[i] &&  navItems[i].classList.remove('active');
      event.currentTarget !== navItems[i] && navItems[i].getElementsByClassName('dropdown-menu')[0].classList.remove('d-block');
  }
  }
  event.currentTarget.classList.toggle('active');
  var dropDown = event.currentTarget.getElementsByClassName('dropdown-menu');
  dropDown[0].classList.toggle('d-block');

}


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
              <li className="nav-item dropdown active"  onClick={toggleDropDownActive}>
                {/* <a href="#" className="nav-link has-dropdown"></a> */}
                <Link to="/dashboard" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></Link>
                <ul className="dropdown-menu">
                  <li>
                    {/* <a className="nav-link" href="index-0.html">General Dashboard</a> */}
                    <Link to="/login" className="nav-link" id="dashboard" >Dashboard</Link>
                  </li>
                  <li className=""><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                </ul>
              </li>


              <li className="menu-header">Test Starter</li>
              <li className="nav-item dropdown " onClick={toggleDropDownActive}>
                {/* <a href="#" className="nav-link has-dropdown"></a> */}
                <Link to="/dashboard" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Dashboard</span></Link>
                <ul className="dropdown-menu">
                  <li>
                    {/* <a className="nav-link" href="index-0.html">General Dashboard</a> */}
                    <Link to="/login" className="nav-link" >Login</Link>
                  </li>
                  <li className=""><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                </ul>
              </li>
            </ul>


        </aside>
      </div>
    )
}

export default SideBar
