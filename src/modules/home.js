function createCopy (){

    
    const divContentEl = document.querySelector('#content');
    

    const divHome = document.createElement('div');

    divHome.id = 'home';
    const title = document.createElement('h2');
    title.textContent = 'About';

    const text = document.createElement('h3');
    text.textContent =  'Easiest way to eat clean and healthy with brazilian food';

    const btnOrder = document.createElement('button');
    
    btnOrder.id = 'btn';
    btnOrder.textContent = 'ORDER NOW';


    divContentEl.appendChild(divHome);
    divHome.appendChild(title);
    divHome.appendChild(text);
    divHome.appendChild(btnOrder);
}

function homeInit(){
    createCopy();
}

export default homeInit;