function menu () {


    
    const divContentEl = document.querySelector('#content');
    const divMenu = document.createElement('div');

    divMenu.id = 'menu';

    divContentEl.appendChild(divMenu);
}


function initMenu (){
    menu();
    
    
}

export {initMenu};