function createCopy (){

    
    const divContentEl = document.querySelector('#content');

    const title = document.createElement('h2');
    title.textContent = 'About';

    const text = document.createElement('h3');
    text.textContent = 'Welcome to the global delivery restaurant. '  +  'Healthy and clean food 24/7/365' +
    ' our porpuse its to continues improving our quality to you!!'

    document.querySelector('body').appendChild(divContentEl);
    divContentEl.appendChild(title);
    divContentEl.appendChild(text);
}

function homeInit(){
    createCopy();
}

export default homeInit;