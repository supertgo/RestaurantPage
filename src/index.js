import initSkeleton from './modules/skeleton';
import  { homeInit, setHomeToNone } from './modules/home';
import  {initContact, setContactToNone } from './modules/contact';
import {initMenu} from './modules/menu';

//Colocar evento de click no botao e direcionar e paǵina para o menu


function initWebSite () {
    initSkeleton();

    homeInit();
    addNavEvents();
}

function contactLoad () {

    setHomeToNone();

    initContact();

}

function homeLoad () {

    setContactToNone();

    homeInit();
}

function loadMenu () {

    setHomeToNone();
    setContactToNone();

    initMenu();
}

function addNavEvents() {

    const home = document.querySelector('#homeMenu');
    const contact = document.querySelector('#contactMenu');
    const menu = document.querySelector('#menuMenu');

    contact.addEventListener('click', contactLoad);
    home.addEventListener('click', homeLoad);
    menu.addEventListener('click', loadMenu);
    
  }

  initWebSite();

  