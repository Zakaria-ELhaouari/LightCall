import { makeAutoObservable } from 'mobx';

export default class LayoutStore {

   constructor(){
       makeAutoObservable(this);
   }

//    toggleDropDownActive: MouseEventHandler<HTMLLIElement> = (event: MouseEvent<HTMLElement>) => {
//     var navItems = document.getElementsByClassName("nav-item");
//     if(navItems){
//       for(var i = 0; i < navItems.length ; i++){
//         event.currentTarget !== navItems[i] &&  navItems[i].classList.remove('active');
//         event.currentTarget !== navItems[i] && navItems[i].getElementsByClassName('dropdown-menu')[0].classList.remove('d-block');
//     }
//     }
//     event.currentTarget.classList.toggle('active');
//     var dropDown = event.currentTarget.getElementsByClassName('dropdown-menu');
//     dropDown[0].classList.toggle('d-block');
//   }

  toggleNavLinkActive: EventListener = (event) => {
    var navLink = document.getElementsByClassName("nav-link");
  
    if(navLink){
        for(var i = 0; i < navLink.length ; i++){
            event.currentTarget !== navLink[i] && navLink[i].parentElement?.classList.remove('active');
            event.currentTarget !== navLink[i] && navLink[i].parentElement?.parentElement?.classList.remove('d-block');
        }
    }
   (event.currentTarget as HTMLElement)?.parentElement?.classList.toggle('active');
    // (event.currentTarget as HTMLElement)?.parentElement?.classList.remove('d-block');

  }

}