import {initMenu} from './menu';

function createCopy (){

    
    const divContentEl = document.querySelector('#content');
    

    const divHome = document.createElement('div');

    divHome.id = 'home';
    const title = document.createElement('h2');
    title.textContent = 'About';

    const text = document.createElement('h3');
    text.textContent =  'Come and experience the taste of Brazilian food with typical dishes';

    const btnOrder = document.createElement('button');
    
    btnOrder.id = 'btn';
    btnOrder.textContent = 'ORDER NOW';


    divContentEl.appendChild(divHome);
    divHome.appendChild(title);
    divHome.appendChild(text);
    divHome.appendChild(btnOrder);

    btnOrder.addEventListener('click', menuByButtom);

    
}

function menuByButtom () {

    initMenu();

    const divContentEl = document.querySelector('#content');

    let divHome = document.querySelector('#home');

    divHome.style.display = 'none'.

    if (divContentEl.children.length > 2)
        divContentEl.lastChild.remove();

    

}

function homeInit(){
    createCopy();

    const divHome = document.querySelector('#home');
    divHome.style.display = 'block';

   
}

function setHomeToNone (){
    
    
    const divContentEl = document.querySelector('#content');
    createCopy();
    
    const divHome = document.querySelector('#home');
    
    divHome.style.display = 'none';

    divHome.remove();

    

    if (divContentEl.children.length > 2)
        divContentEl.lastChild.remove();
    
}

export {homeInit, setHomeToNone}
