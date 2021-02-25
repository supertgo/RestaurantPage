import initSkeleton from './modules/skeleton';
import  { homeInit, setHomeToNone } from './modules/home';
import  {initContact, setContactToNone } from './modules/contact';
import {initMenu} from './modules/menu';

const links = document.querySelectorAll('.links');
const home = document.querySelector('#homeMenu');
const contact = document.querySelector('#contactMenu');
const menu = document.querySelector('#menuMenu');

function resetLi (){

    links.forEach(e => {e.style.borderBottom = '1px solid black'
        e.style.color = 'black'});
}

function initWebSite () {

    initSkeleton();

    homeInit();

    home.style.borderBottom = '5px solid green';
    home.style.color = 'green';
    addNavEvents();
}

function contactLoad () {

    setHomeToNone();
    initContact();

    resetLi();

    contact.style.borderBottom = '5px solid blue';
    contact.style.color = 'blue';
    //contact.style.transform = 'scale(1.3)';
}

function homeLoad () {

    setContactToNone();

    homeInit();

    resetLi();

    home.style.borderBottom = '5px solid green';
    home.style.color = 'green';
}

function loadMenu () {

    setHomeToNone();
    setContactToNone();

    initMenu();

    resetLi();

    menu.style.borderBottom = '5px solid red';
    menu.style.color = 'red';
}

function addNavEvents() {

    contact.addEventListener('click', contactLoad);
    home.addEventListener('click', homeLoad);
    menu.addEventListener('click', loadMenu);
    
  }

  initWebSite();

  