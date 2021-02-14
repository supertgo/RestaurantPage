import initSkeleton from './modules/skeleton';
import homeInit from './modules/home';
import initContact from './modules/contact'

initWebSite();

function initWebSite () {
    initSkeleton();
    
    //initContact;
    //homeInit();
    addNavEvents();
    
}



function addNavEvents() {

    const homeBtn = document.getElementById('home');
    
  
    homeBtn.addEventListener('click', homeInit);
    
  }

