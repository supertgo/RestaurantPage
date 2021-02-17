import initSkeleton from './modules/skeleton';
import  { homeInit, setHomeToNone } from './modules/home';
import  {initContact, setContactToNone } from './modules/contact';
import {initMenu} from './modules/menu';


function initWebSite () {
    initSkeleton();

    initMenu();
    //addNavEvents();
}

function contactLoad () {

    setHomeToNone();

    initContact();

}

function homeLoad () {

    setContactToNone();

    homeInit();
}



function addNavEvents() {

    const home = document.querySelector('#homeMenu');
    const contact = document.querySelector('#contactMenu');
    const menu = document.querySelector('#menuMenu');

    contact.addEventListener('click', contactLoad);
    home.addEventListener('click', homeLoad);
    menu.addEventListener('click',);
    
  }

  initWebSite();

  