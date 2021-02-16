import initSkeleton from './modules/skeleton';
import  { homeInit, setHomeToNone } from './modules/home';
import  {initContact, setContactToNone } from './modules/contact';


function initWebSite () {
    initSkeleton();
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



function addNavEvents() {

    const home = document.querySelector('#homeMenu');
    const contact = document.querySelector('#contactMenu');

    contact.addEventListener('click', contactLoad);
    home.addEventListener('click', homeLoad);
    
  }

  initWebSite();

  