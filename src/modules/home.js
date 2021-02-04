function createCopy (){

    
    const divContentEl = document.querySelector('#content');

    const divHome = document.createElement('div');

    divHome.id = 'home';
    const title = document.createElement('h2');
    title.textContent = 'About';

    const text = document.createElement('h3');
    text.textContent = 'Welcome to the global delivery restaurant. '  +  'Healthy and clean food 24/7/365' +
    ' our porpuse its to continues improving our quality to you!!'

    divContentEl.appendChild(divHome);
    divHome.appendChild(title);
    divHome.appendChild(text);
}

function homeInit(){
    createCopy();
}

export default homeInit;