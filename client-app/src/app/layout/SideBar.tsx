import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useStore } from '../stores/Store';
import SideBarAdmin from './Menus/SideBarAdmin';
import SideBarMember from './Menus/SideBarMember';


const SideBar = () => {
  const {layoutStore: {toggleNavLinkActive}, commonStore: {isRoles}} = useStore();

const location = useLocation();
useEffect(() => {
  
  var navLink = document.getElementsByClassName("nav-link");
  if(navLink){
      for(var i = 0; i < navLink.length ; i++){
        if(navLink[i].id === location.pathname.replace('/', '') ){
            navLink[i].parentElement?.classList.add('active');
            navLink[i].parentElement?.parentElement?.classList.add('d-block');
            navLink[i].parentElement?.parentElement?.parentElement?.classList.add('active');
        }

        navLink[i].addEventListener('click', toggleNavLinkActive);
      }
  }

})


    return (
      <div className="main-sidebar">
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <a href="index.html">LightCall</a>
          </div>
          <div className="sidebar-brand sidebar-brand-sm">
            <a href="index.html">LC</a>
          </div>

        {isRoles(["Admin"]) && <SideBarAdmin />}  
        {isRoles(["Member"]) && <SideBarMember />}  

        </aside>
      </div>
    )
}

export default SideBar
