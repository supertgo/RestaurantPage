import {initMenu} from './menu';

function createCopy (){

    
    const divContentEl = document.querySelector('#content');
    const divHome = document.createElement('div');
    const title = document.createElement('h2');
    const text = document.createElement('h3');
    const btnOrder = document.createElement('button');

    title.textContent = 'About';
    text.textContent =  'Come and experience the taste of Brazilian food with typical dishes';

    divHome.id = 'home';
    btnOrder.id = 'btn';
    btnOrder.textContent = 'ORDER NOW';


    divContentEl.appendChild(divHome);
    divHome.appendChild(title);
    divHome.appendChild(text);
    divHome.appendChild(btnOrder);

    //function to load the menu page by menu
    btnOrder.addEventListener('click', menuByButtom);
}

function menuByButtom () {

    initMenu();

    //Need to make this manually cause this function is on contactjs
    const divContentEl = document.querySelector('#content');
    const links = document.querySelectorAll('.links');

    links.forEach(e => {e.style.borderBottom = '1px solid black'
        e.style.color = 'black'});

    links[1].style.borderBottom = '5px solid red';
    links[1].style.color = 'red';

    divContentEl.children[2].remove();

}

function homeInit(){
    createCopy();

    const divHome = document.querySelector('#home');
    divHome.style.display = 'block';
}

function setHomeToNone (){
    
    
    const divContentEl = document.querySelector('#content');
    const divHome = document.querySelector('#home');

    createCopy();
    
    if (divHome != null){
        divHome.style.display = 'none';
        
    }

    if (divHome != null) divHome.remove();

    if (divContentEl.children.length > 2)
        divContentEl.lastChild.remove();
    
}

export {homeInit, setHomeToNone}
