import initSkeleton from './modules/skeleton';
import homeInit, { setHomeToNone} from './modules/home';
import initContact from './modules/contact';


function initWebSite () {
    initSkeleton();
    addNavEvents();
}

function contactInit (){

    initContact();
    setHomeToNone();
    
}

function addNavEvents() {

    const home = document.querySelector('#homeMenu');
    const contact = document.querySelector('#contactMenu');

    contact.addEventListener('click', initContact);
    home.addEventListener('click', homeInit);
    
  }

  initWebSite();

  